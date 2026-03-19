import type { CommandContext } from "@CLI/types.ts";

// Import all our subcommand handlers
import { init } from "./init.ts";
import { remote } from "./remote/index.ts";
import { clone } from "./clone.ts";
import { add } from "./add.ts";
import { commit } from "./commit.ts";
import { push } from "./push.ts";
import { pull } from "./pull.ts";
import { status } from "./status.ts";
import { log } from "./log.ts";

export async function main(ctx: CommandContext): Promise<string> {
  const { subcmd } = ctx;

  const subcommands: Record<string, (ctx: CommandContext) => Promise<string>> =
    {
      init: init,
      remote: remote,
      clone: clone,
      add: add,
      commit: commit,
      push: push,
      pull: pull,
      status: status,
      log: log,
    };

  const handler = subcommands[subcmd || ""];
  if (!handler)
    return subcmd
      ? `git: '${subcmd}' is not a git command.`
      : "usage: git <command>";

  return await handler(ctx);
}
