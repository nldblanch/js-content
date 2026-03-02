export interface CommandContext {
  subcmd?: string | null;                    // Subcommand if applicable, e.g. "commit" in "git commit"
  args: string[];                           // Positional arguments, e.g. ["file.txt", "dir/"]
  flags: Record<string, boolean | string>;  // Flags and options, e.g. { l: true, color: "red" }
  raw?: string | null;                      // The original raw input string for reference. (Optional)
}

export type CommandFn = (ctx: CommandContext) => Promise<string>;
