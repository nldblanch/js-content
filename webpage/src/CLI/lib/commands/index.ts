// Imports
import * as shell from "./shell";
import * as git from "./git";
import type { CommandContext, CommandFn } from "../../types.ts";

/**
 * Register command modules to be accessible within the environment.
 */
 const registry: Record<string, CommandFn> = {
  // Base Shell Commands
  "ls": shell.ls,
  "pwd": shell.pwd,
  "mkdir": shell.mkdir,
  "touch": shell.touch,
  "cd": shell.cd,

  // Complex Modules
  "git": git.main, // One entry point for the whole git module

  // Help System
   "help": async () => `Available commands: ${Object.keys(registry).join(", ")}`,

   // Debugging
   "clearfs": shell.clearFS,
 };

const COMMANDS_WITH_SUBCOMMANDS = ["git", "npm", "node"]

/**
 * Dispatch a command from a given input string.
 * This function is the entry point for processing user input and routing it to the appropriate command handler.
 * @param String input - The raw command string entered by the user.
 * @returns - The output string from the command handler, or an error message if the command is not found or fails.
 */
 export async function dispatchCommand(input: string): Promise<string> {
   const { cmd, subcmd, ctx } = parseInput(input);
   if (!cmd) return "";

   const handler = registry[cmd];
   if (!handler) return `Command not found: ${cmd}.`;

   try {
     // If the command has a subcmd, pass it in the context. Otherwise, just pass the context
     return subcmd ? await handler({ ...ctx, subcmd }) : await handler(ctx);
   } catch (err: unknown) {
     return `Error: ${(err as Error).message || "Failed to execute command"}`;
   }
 }

/**
 *  Parse the input string into a command and its context.
 * @param String input - The raw command string entered by the user.
 * @returns - An object containing the command and a context object containing arguments, ?Subcommands, flags, and the raw input.
 */
function parseInput(input: string): { cmd: string, subcmd: string | null; ctx: CommandContext } {

  // Split string into parts, respecting quoted substrings, or return empty array if no matches. E.g `ls -la "My Documents"` => ["ls", "-la", "My Documents"]
  const matches = input.match(/[^\s"']+|"([^"]*)"|'([^']*)'/g) || [];

  // Clean up single and double quotes.
  const parts = matches.map(m => m.replace(/^['"]|['"]$/g, ""));

  // Extract command (first part) and normalize to lowercase. If no parts, default to empty string.
  const cmd = parts.shift()?.toLowerCase() || "";
  let subcmd: string | null = null;

  const flags: Record<string, boolean | string> = {};
  const args: string[] = [];

  // Check if command has Subcommands
  const isMultiLevel = COMMANDS_WITH_SUBCOMMANDS.includes(cmd);

  parts.forEach(part => {

    // Process flags into a key-value object. E.g --color=red => { color: "red" }, or --a => { a: true }
    if (part.startsWith("--")) {
      const [key, value] = part.replace("--", "").split("=");
      flags[key] = value ?? true;
    } else if (part.startsWith("-") && part.length > 1) {
      // Handles -la as { l: true, a: true }
      part.slice(1).split("").forEach(char => flags[char] = true);
    }
    // Only capture a subcmd if the command is allowed to have one
    else if (isMultiLevel && !subcmd) {
      subcmd = part.toLowerCase();
    }
    // Otherwise, it's a positional argument. E.g ls -la /home => args = ["/home"]
    else {
      args.push(part);
    }
  });

  return { cmd, subcmd, ctx: { args, flags, raw: input } };
}
