import { getCwd } from "@/store/useTerminalStore.ts";
import type { CommandContext } from "@/types.ts";

import { list } from "./list.ts";
import { add } from "./add.ts";
import { remove } from "./remove.ts";
import { rename } from "./rename.ts";

export async function remote(ctx: CommandContext): Promise<string> {
  const { args, flags } = ctx;
  const dir = getCwd();

  // If no args are passed (e.g. `git remote` or `git remote -v`), we list!
  if (args.length === 0) {
    return await list(dir, flags);
  }

  const subAction = args[0]; // 'add', 'remove', 'rename'

  switch (subAction) {
    case 'add':
      return await add(dir, args);
    case 'rm':
    case 'remove':
      return await remove(dir, args);
    case 'rename':
      return await rename(dir, args);
    default:
      return `error: Unknown subcommand: ${subAction}\n` +
             `usage: git remote [-v]\n` +
             `   or: git remote add <name> <url>\n` +
             `   or: git remote rename <old> <new>\n` +
             `   or: git remote remove <name>`;
  }
}
