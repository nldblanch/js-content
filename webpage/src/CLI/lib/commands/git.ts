import git from 'isomorphic-git';
import fs from '../fileSystem';
import { getCwd } from "../../store/useTerminalStore.ts";
import type { CommandContext } from "../../types.ts";
import { resolvePath, exists, urlToPath } from './helpers.ts';
import { mkdir } from './shell.ts';

/**
 * Internal Git Router
 * Routes git commands using the subcmd property of the context.
 */
export async function main(ctx: CommandContext): Promise<string> {
  const { subcmd } = ctx;

  const subcommands: Record<string, (ctx: CommandContext) => Promise<string>> = {
    "init": init,
    "remote": remote,
    //"clone": clone,
    "add": add,
    "status": async () => "Status: Not yet implemented",
  };

  const handler = subcommands[subcmd || ""];
  if (!handler) return subcmd ? `git: '${subcmd}' is not a git command.` : "usage: git <command>";

  return await handler(ctx);
}

/**
 * Initializes a new Git repository. If a directory is specified, it will initialize there.
 * If the directory doesn't exist, it will be created first.
 * If no directory is specified, it initializes in the current working directory.
 * @param ctx - A context object from the dispatcher containing any arguments and flags
 * @returns - An empty string on success, or an error message if the directory cannot be created or initialized.
 */
export async function init(ctx: CommandContext): Promise<string> {
  const { args } = ctx;

  // No directory specified, initialize in current working directory
  if (args.length === 0) {
    await git.init({
      fs,             // LightningFS instance
      dir: getCwd()   // from Zustand store
    });
    return "Initialized empty Git repository in " + getCwd();
  }

  // Directory specified, initialize there.
  if (await exists(fs, args[0], "dir")) {
    await git.init({
      fs,
      dir: resolvePath(args[0])
    });
    return "Initialized empty Git repository in " + resolvePath(args[0]);
  }

  // If it doesn't exist, create it first.
  else {
    await mkdir({ args: [args[0]], flags: { p: true } });
    await git.init({
      fs,
      dir: resolvePath(args[0])
    });
    return "Initialized empty Git repository in " + resolvePath(args[0]);
  }
};

/**
 * Manage remote connections for the repository. This includes listing existing remotes, adding new ones, removing, and renaming them.
 *
 * Supported commands:
 *  git remote                              list remote names
 *  git remote -v                           list remotes with their URLs
 *  git remote add <name> <url>             register a new remote e.g. `git remote add origin https://github.com/user/repo.git`
 *  git remote remove <name>                remove a remote
 *  git remote rename <old> <new>           rename a remote
 *
 *  Remote add dpes NOT check if it is valid - neither does real git. Check happens on Push
 */
export async function remote(ctx: CommandContext): Promise<string> {
  const { args, flags } = ctx;
  const dir = getCwd();

  // git remote
  if (args.length === 0) {
    try {
      const remotes = await git.listRemotes({ fs, dir });

      if (remotes.length === 0) return '';

      if (flags['v']) {
        // Show name + URL for both fetch and push, just like real git
        return remotes
          .flatMap(({ remote, url }) => [
            `${remote}\t${url} (fetch)`,
            `${remote}\t${url} (push)`,
          ])
          .join('\r\n');
      }

      // No -v: just the names, one per line
      return remotes.map(r => r.remote).join('\r\n');

    } catch {
      return `fatal: not a git repository (or any of the parent directories): .git`;
    }
  }

  const subAction = args[0];  // e.g. 'add', 'remove', 'rename'

  // git remote add <name> <url>
  if (subAction === 'add') {
    const remoteName = args[1];
    const remoteUrl  = args[2];

    if (!remoteName || !remoteUrl) {
      return `usage: git remote add <name> <url>`;
    }

    // Validate it at least looks like a github.com URL
    if (urlToPath(remoteUrl) === null) {
      return `error: invalid remote URL '${remoteUrl}'\n` +
             `Hint: URLs should look like https://github.com/user/repo.git`;
    }

    try {
      // Store the URL exactly as usr typed it — matches real git.
      // urlToPath() is called at push time.
      await git.addRemote({ fs, dir, remote: remoteName, url: remoteUrl });
      return '';
    } catch (err: unknown) {
      const msg = (err as Error).message ?? '';
      if (msg.includes('already exists')) {
        return `error: remote ${remoteName} already exists.`;
      }
      return `error: ${msg}`;
    }
  }

  // git remote remove <name>
  if (subAction === 'remove' || subAction === 'rm') {
    const remoteName = args[1];
    if (!remoteName) return `usage: git remote remove <name>`;

    try {
      await git.deleteRemote({ fs, dir, remote: remoteName });
      return '';  // Silent on success
    } catch {
      return `error: No such remote: '${remoteName}'`;
    }
  }

  // git remote rename <old> <new>
  if (subAction === 'rename') {
    const oldName = args[1];
    const newName = args[2];
    if (!oldName || !newName) return `usage: git remote rename <old> <new>`;

    try {
      const remotes = await git.listRemotes({ fs, dir });
      const existing = remotes.find(r => r.remote === oldName);
      if (!existing) return `error: No such remote: '${oldName}'`;

      // isomorphic-git has no renameRemote — delete and re-add with the stored URL
      await git.deleteRemote({ fs, dir, remote: oldName });
      await git.addRemote({ fs, dir, remote: newName, url: existing.url });
      return '';  // Silent on success
    } catch (err: unknown) {
      return `error: ${(err as Error).message}`;
    }
  }

  // Unknown subaction
  return `error: Unknown subcommand: ${subAction}\n` +
         `usage: git remote [-v]\n` +
         `   or: git remote add <name> <url>\n` +
         `   or: git remote rename <old> <new>\n` +
         `   or: git remote remove <name>`;
}

/*
export async function clone(ctx: CommandContext): Promise<string> {
  // git clone
}
*/

// git add <file>
export async function add(ctx: CommandContext): Promise<string> {

  const { args } = ctx;   // What files are we staging? ('.' for all files in cwd, or specific file paths)
  const dir = getCwd();   // Current working directory from Zustand store

  if (args.length == 0) return "git add: missing file operand. Use 'git add <file>' to specify a file, or 'git add .' to stage all files in the current directory.";

  try {
    // Isomorphic-Git can't handle '.' by default, so walk directory and add each file individually
    if (args[0] === ".") {
      // Get the status of all files in the directory
      const matrix = await git.statusMatrix({ fs, dir });

      // Filter for files that are modified, new (untracked), or deleted
      // row[1] = head, row[2] = workdir, row[3] = stage
      const filePaths = matrix
        .filter(row => row[2] !== row[3])
        .map(row => row[0]);

      for (const filepath of filePaths) {
        await git.add({ fs, dir, filepath });
      }
      return `added ${filePaths.length} files`;
    }

    // Add each specified file individually
    for (const filepath of args) {
      await git.add({ fs, dir, filepath });
    }
    return `added ${args.length} file(s)`;
  } catch (err: unknown) {
    return `git: ${(err as Error).message}`;
  }
}


// git commit -m "message"
export async function commit(ctx: CommandContext): Promise<string> {
  const { flags, args } = ctx;

  if (flags.length == '0') return "";

  const message = args[0];

  if (!message) return "error: switch `m' requires a value";

  try {
    const sha = await git.commit({
      fs,
      dir: getCwd(),
      message,
      author: {
        name: "Student Learner",
        email: "student@example.local",
      },
    });
    // Return a message similar to the default git commit output, showing the first 7 characters of the commit SHA and the commit message
    return `[main ${sha.substring(0, 7)}] ${message}`;
  } catch {
    return `nothing to commit, working tree clean`;
  }
}

// For these we will need to simulate a remote repo with FS or in memory
// Preface with _ as they dont actually make use of context
/*
export async function push(_ctx: CommandContext): Promise<string> {
  return "Everything up-to-date";
}

export async function pull(_ctx: CommandContext): Promise<string> {
  return "Already up-to-date.";
}
*/
