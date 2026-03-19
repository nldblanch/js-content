// Shell commands (ls, cd, mkdir, touch, cat, echo etc.)
import { useTerminalStore } from "@/store/useTerminalStore.ts";
import FS from '@isomorphic-git/lightning-fs'
import fs from '@/lib/fileSystem.ts';
import type { CommandContext } from "@/types.ts";
import { resolvePath, exists, isFsError } from "./helpers.ts";


/**
 *  Finds and returns the contents of a directory, with options for showing hidden files and long format.
 * Supports: -a (all files including hidden), -l (long format with file type and size).
 * @param ctx - A context object from the dispatch function containing any flags and arguments.
 * @returns String - A formatted string of the directory contents, or an error message if the path is invalid.
 */
export async function ls(ctx: CommandContext): Promise<string> {

  const { flags, args } = ctx;                                            // Deconstruct flags and args from the command context

  const showHidden = !!flags.a;                                           // Use Double NOT (!!) to ensure we get a real bool
  const longFormat = !!flags.l;

  const targetPath = resolvePath(args[0] || ".");                         // Get target directory (first positional argument or current)

  try {
    // Await directory contents from query
    const contents = await fs.promises.readdir(targetPath);

    // Filter hidden files if -a is not set
    const filtered = showHidden ? contents : contents.filter((name: string) => !name.startsWith('.'));

    // Format output based on -l flag
    if (longFormat) {

      // Await each file to build output lines with type, size, and name
      const lines = await Promise.all(

        // Map over filtered contents
        filtered.map(async (name) => {
          const filePath = resolvePath(`${targetPath}/${name}`);
          const stats = await fs.promises.stat(filePath);

          const type = stats.type === 'dir' ? 'd' : '-';
          const size = stats.size.toString().padStart(8, ' ');
          return `${type} ${size} ${name}`;
        })
      );
      // Join lines with newlines for long format output
      return lines.join('\r\n');
    }
    // If not long format, just join names with spacing
    return filtered.join('  ');
  } catch {
    return `ls: cannot access '${args[0] || "."}': No such file or directory`;
  }
}

/**
 * Function to fetch and return the current working directory from the Zustand store.
 * Zustand provides .getState() and .setState() functions to access/update outside of React.
 * @returns String containing current working directory from the Zustand store
 */
export async function pwd(): Promise<string>  {
  const cwd = useTerminalStore.getState().cwd;
  return `Path\r\n----\r\n${cwd}`;
}

/**
 * Attempts to create a file at the current working directory with the given name(s).
 * @param ctx - A context object from the dispatcher containing any arguments
 * @returns
 */
export async function touch(ctx: CommandContext): Promise<string> {
  const { args } = ctx;
  if (args.length === 0) return "touch: missing file operand";

  const results = await Promise.all(
    args.map(async (arg) => {
      const path = resolvePath(arg);
      try {
        await fs.promises.writeFile(path, "");
        return "";
      } catch {
        return `touch: cannot create file '${arg}': No such directory`;
      }
    })
  );
  return results.filter(Boolean).join('\r\n');
}

/**
 * Create a new directory at the current working directory with the given name(s). Supports -p for recursive creation.
 * -p will allow creating nested directories in one command
 * @param ctx - A context object from the dispatcher containing any arguments and flags
 * @returns - An empty string on success, or an error message if the directory cannot be created (e.g. parent doesn't exist without -p, or already exists).
 */
export async function mkdir(ctx: CommandContext): Promise<string> {
  const { args, flags } = ctx;
  if (args.length === 0) return "mkdir: missing operand";

  const recursive = !!flags.p;
  const results = await Promise.all(args.map(async (arg) => {
    const targetPath = resolvePath(arg);

    if (recursive) {
      const parts = targetPath.split('/').filter(Boolean);
      let currentPath = "";
      for (const part of parts) {
        currentPath += `/${part}`;
        try {
          await fs.promises.mkdir(currentPath);
        } catch (err: unknown) {
          // Ignore if it already exists, otherwise re-throw
          if (!isFsError(err) || err.code !== 'EEXIST') {
            throw err;
          }
        }
      }
      return "";
    } else {
      try {
        await fs.promises.mkdir(targetPath);
        return "";
      } catch (err: unknown) {
        if (isFsError(err) && err.code === 'EEXIST') {
          return `mkdir: '${arg}': File exists`;
        }
        return `mkdir: '${arg}': No such file or directory`;
      }
    }
  }));

  return results.filter(Boolean).join('\r\n');
}

/**
 *  Changes the current working directory in the Zustand store to the target directory specified in the command arguments.
 *  Validates that the target path exists and is a directory before updating the CWD
 * @param ctx - A context object from the dispatcher containing any arguments
 * @returns string - An empty string on success, or an error message if the target path is invalid or not a directory.
 */
export async function cd(ctx: CommandContext): Promise<string> {
  const { args } = ctx;
  if (args.length === 0) return ""; // cd with no args usually goes to ~ or does nothing

  const target = args[0];                       // Get target dir from first positional argument
  const state = useTerminalStore.getState();    // Fetch state from Zustand store to access current CWD and setCwd function

  let targetPath = resolvePath(target);         // Resolve target path against CWD

  // Handle special case for ".." to go up one directory
  if (target === "..") {
    const parts = state.cwd.split('/').filter(Boolean);
    parts.pop();
    targetPath = '/' + parts.join('/');
  }

  try {
    // Check if target path exists and is a directory. If not, return appropriate error message.
    if (!(await exists(fs, targetPath, 'dir'))) return `cd: ${target}: No such directory`;

    state.setCwd(targetPath);
    return "";
  } catch {
    return `cd: ${target}: No such file or directory`;
  }
}

// --- DEBUGGING COMMANDS ---

/**
 * Debugging command to clear the entire IndexedDB filesystem and reload the application.
 */
 export async function clearFS(): Promise<string> {
   new FS('local-fs', { wipe: true });
   window.location.reload();
   return "";
 }
