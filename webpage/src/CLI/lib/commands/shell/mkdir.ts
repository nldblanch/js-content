import fs from "@CLI/lib/fileSystem.ts";
import type { CommandContext } from "@CLI/types.ts";
import { resolvePath, isFsError } from "@CLI/lib/commands/helpers.ts";

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
  const results = await Promise.all(
    args.map(async (arg) => {
      const targetPath = resolvePath(arg);

      if (recursive) {
        const parts = targetPath.split("/").filter(Boolean);
        let currentPath = "";
        for (const part of parts) {
          currentPath += `/${part}`;
          try {
            await fs.promises.mkdir(currentPath);
          } catch (err: unknown) {
            // Ignore if it already exists, otherwise re-throw
            if (!isFsError(err) || err.code !== "EEXIST") {
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
          if (isFsError(err) && err.code === "EEXIST") {
            return `mkdir: '${arg}': File exists`;
          }
          return `mkdir: '${arg}': No such file or directory`;
        }
      }
    }),
  );

  return results.filter(Boolean).join("\r\n");
}
