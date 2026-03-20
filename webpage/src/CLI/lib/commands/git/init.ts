import git from "isomorphic-git";
import fs from "@CLI/lib/fileSystem.ts";
import { getCwd } from "@CLI/store/useTerminalStore.ts";
import type { CommandContext } from "@CLI/types.ts";
import { resolvePath, exists } from "../helpers.ts";
import { mkdir } from "../shell/mkdir.ts";

/**
 * Initializes a new Git repository.
 */
export async function init(ctx: CommandContext): Promise<string> {
  const { args } = ctx;
  const dir = args.length === 0 ? getCwd() : resolvePath(args[0]);

  if (args.length > 0 && !(await exists(fs, dir, "dir"))) {
    await mkdir({
      args: [args[0]],
      flags: { p: true },
      raw: null,
      subcmd: null,
    });
  }

  await git.init({ fs, dir });
  await fs.promises.writeFile(`${dir}/.git/HEAD`, "ref: refs/heads/main\n");

  return `Initialized empty Git repository in ${dir}/.git/`;
}
