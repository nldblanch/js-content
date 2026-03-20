import fs from "@CLI/lib/fileSystem.ts";
import type { CommandContext } from "@CLI/types.ts";
import { resolvePath } from "@CLI/lib/commands/helpers.ts";

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
    }),
  );
  return results.filter(Boolean).join("\r\n");
}
