import git from "isomorphic-git";
import fs from "@CLI/lib/fileSystem.ts";
import { getCwd } from "@CLI/store/useTerminalStore.ts";
import type { CommandContext } from "@CLI/types.ts";
import { exists, urlToPath } from "../helpers.ts";
import { copyMissingObjects } from "./utils.ts";

/**
 * git pull [<remote>] [<branch>]
 */
export async function pull(ctx: CommandContext): Promise<string> {
  const { args } = ctx;
  const dir = getCwd();
  const remoteName = args[0] ?? "origin";
  const branch = args[1] ?? "main";

  try {
    const remotes = await git.listRemotes({ fs, dir });
    const entry = remotes.find((r) => r.remote === remoteName);
    if (!entry)
      return `fatal: '${remoteName}' does not appear to be a git repository`;

    const bareDir = urlToPath(entry.url);
    if (!bareDir || !(await exists(fs, bareDir, "dir")))
      return `fatal: repository '${entry.url}' not found`;

    let remoteSha: string;
    try {
      remoteSha = await git.resolveRef({
        fs,
        gitdir: bareDir,
        ref: `refs/heads/${branch}`,
      });
    } catch {
      return `fatal: couldn't find remote ref ${branch}`;
    }

    let localSha: string | null = null;
    try {
      localSha = await git.resolveRef({ fs, dir, ref: `refs/heads/${branch}` });
    } catch {
      /* ignore */
    }

    if (localSha === remoteSha) return "Already up to date.";

    await copyMissingObjects(bareDir, `${dir}/.git`, remoteSha);
    await git.writeRef({
      fs,
      dir,
      ref: `refs/heads/${branch}`,
      value: remoteSha,
      force: true,
    });
    await git.writeRef({
      fs,
      dir,
      ref: "HEAD",
      value: `refs/heads/${branch}`,
      force: true,
      symbolic: true,
    });
    await git.checkout({ fs, dir, ref: branch, force: true });

    const shortLocal = localSha ? localSha.slice(0, 7) : "0000000";
    return `Updating ${shortLocal}..${remoteSha.slice(0, 7)}\nFast-forward`;
  } catch (err: unknown) {
    return `error: ${(err as Error).message}`;
  }
}
