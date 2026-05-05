import { useTerminalStore } from "@CLI/store/useTerminalStore.ts";
import fs from "@CLI/lib/fileSystem.ts";
import type { CommandContext } from "@CLI/types.ts";
import { resolvePath, exists } from "@CLI/lib/commands/helpers.ts";

/**
 *  Changes the current working directory in the Zustand store to the target directory specified in the command arguments.
 *  Validates that the target path exists and is a directory before updating the CWD
 * @param ctx - A context object from the dispatcher containing any arguments
 * @returns string - An empty string on success, or an error message if the target path is invalid or not a directory.
 */
export async function cd(ctx: CommandContext): Promise<string> {
  const { args } = ctx;
  if (args.length === 0) return ""; // cd with no args usually goes to ~ or does nothing

  const target = args[0]; // Get target dir from first positional argument
  const state = useTerminalStore.getState(); // Fetch state from Zustand store to access current CWD and setCwd function

  let targetPath = resolvePath(target); // Resolve target path against CWD

  // Handle special case for ".." to go up one directory
  if (target === "..") {
    const parts = state.cwd.split("/").filter(Boolean);
    parts.pop();
    targetPath = "/" + parts.join("/");
  }

  try {
    // Check if target path exists and is a directory. If not, return appropriate error message.
    if (!(await exists(fs, targetPath, "dir")))
      return `cd: ${target}: No such directory`;

    state.setCwd(targetPath);
    return "";
  } catch {
    return `cd: ${target}: No such file or directory`;
  }
}
