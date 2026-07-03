import git from 'isomorphic-git';
import fs from '@CLI/lib/fileSystem.ts';
import { getCwd } from '@CLI/store/useTerminalStore.ts';
import type { CommandContext } from '@CLI/types.ts';
import { exists } from '../helpers.ts';

// git add <file>
export async function add(ctx: CommandContext): Promise<string> {
  const { args } = ctx;
  const dir = getCwd();

  if (args.length == 0)
    return "git add: missing file operand. Use 'git add <file>' to specify a file, or 'git add .' to stage all files in the current directory.";

  if (!(await exists(fs, `${dir}/.git`, 'dir'))) {
    return 'fatal: not a git repository (or any of the parent directories): .git';
  }

  try {
    if (args[0] === '.') {
      const matrix = await git.statusMatrix({ fs, dir });
      const filePaths = matrix.filter((row) => row[2] !== row[3]).map((row) => row[0]);

      for (const filepath of filePaths) {
        await git.add({ fs, dir, filepath });
      }
      return `added ${filePaths.length} files`;
    }

    for (const filepath of args) {
      await git.add({ fs, dir, filepath });
    }
    return `added ${args.length} file(s)`;
  } catch (err: unknown) {
    const msg = (err as Error).message ?? '';
    if (msg.includes('ENOENT') || msg.includes('does not exist')) {
      return `fatal: pathspec '${args[0]}' did not match any files`;
    }
    return `error: ${msg}`;
  }
}
