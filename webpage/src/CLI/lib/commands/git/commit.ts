import git from "isomorphic-git";
import fs from "@CLI/lib/fileSystem.ts";
import { getCwd } from "@CLI/store/useTerminalStore.ts";
import type { CommandContext } from "@CLI/types.ts";
import { exists } from "../helpers.ts";

/**
 * git commit -m "message"
 */
export async function commit(ctx: CommandContext): Promise<string> {
  const { flags, args } = ctx;
  const dir = getCwd();

  if (!(await exists(fs, `${dir}/.git`, "dir"))) {
    return "fatal: not a git repository (or any of the parent directories): .git";
  }

  if (!flags["m"]) {
    return `error: switch 'm' requires a value\nusage: git commit -m <message>`;
  }

  const message = args[0];
  if (!message) {
    return `error: switch 'm' requires a value`;
  }

  try {
    let branch = "main";
    try {
      branch = (await git.currentBranch({ fs, dir })) ?? "main";
    } catch {
      /* use default */
    }

    const sha = await git.commit({
      fs,
      dir,
      message,
      author: { name: "Student Learner", email: "student@example.local" },
    });

    return `[${branch} ${sha.substring(0, 7)}] ${message}`;
  } catch (err: unknown) {
    const msg = (err as Error).message ?? "";
    if (msg.includes("nothing to commit") || msg.includes("no changes")) {
      return "nothing to commit, working tree clean";
    }
    return `error: ${msg}`;
  }
}
