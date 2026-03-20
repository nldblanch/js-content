import type { CommandContext } from "@CLI/types.ts";
import { resolvePath } from "@CLI/lib/commands/helpers.ts";
import fs from "@CLI/lib/fileSystem.ts";

/**
 *  Finds and returns the contents of a directory, with options for showing hidden files and long format.
 * Supports: -a (all files including hidden), -l (long format with file type and size).
 * @param ctx - A context object from the dispatch function containing any flags and arguments.
 * @returns String - A formatted string of the directory contents, or an error message if the path is invalid.
 */
export async function ls(ctx: CommandContext): Promise<string> {
  const { flags, args } = ctx; // Deconstruct flags and args from the command context

  const showHidden = !!flags.a; // Use Double NOT (!!) to ensure we get a real bool
  const longFormat = !!flags.l;

  const targetPath = resolvePath(args[0] || "."); // Get target directory (first positional argument or current)

  try {
    // Await directory contents from query
    const contents = await fs.promises.readdir(targetPath);

    // Filter hidden files if -a is not set
    const filtered = showHidden
      ? contents
      : contents.filter((name: string) => !name.startsWith("."));

    // Format output based on -l flag
    if (longFormat) {
      // Await each file to build output lines with type, size, and name
      const lines = await Promise.all(
        // Map over filtered contents
        filtered.map(async (name) => {
          const filePath = resolvePath(`${targetPath}/${name}`);
          const stats = await fs.promises.stat(filePath);

          const type = stats.type === "dir" ? "d" : "-";
          const size = stats.size.toString().padStart(8, " ");
          return `${type} ${size} ${name}`;
        }),
      );
      // Join lines with newlines for long format output
      return lines.join("\r\n");
    }
    // If not long format, just join names with spacing
    return filtered.join("  ");
  } catch {
    return `ls: cannot access '${args[0] || "."}': No such file or directory`;
  }
}
