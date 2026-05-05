import git from "isomorphic-git";
import fs from "@CLI/lib/fileSystem.ts";
import type { CommandContext } from "@CLI/types.ts";
import { exists, resolvePath, urlToPath } from "../helpers.ts";
import { mkdir } from "../shell/mkdir.ts";
import { copyMissingObjects } from "./utils.ts";

/**
 * git clone <url> [<directory>]
 */
export async function clone(ctx: CommandContext): Promise<string> {
  const { args } = ctx;
  const userUrl = args[0];
  if (!userUrl) return "fatal: You must specify a repository to clone.";

  const repoName =
    userUrl
      .split("/")
      .pop()
      ?.replace(/\.git$/, "") ?? "";
  const targetDir = args[1] ? resolvePath(args[1]) : resolvePath(repoName);

  const bareDir = urlToPath(userUrl);
  if (!bareDir) return "fatal: invalid repository URL";
  if (!(await exists(fs, bareDir, "dir")))
    return `fatal: repository '${userUrl}' not found`;

  try {
    await mkdir({
      args: [targetDir],
      flags: { p: true },
      raw: null,
      subcmd: null,
    });
    await git.init({ fs, dir: targetDir });
    await git.addRemote({ fs, dir: targetDir, remote: "origin", url: userUrl });

    let remoteSha: string;
    try {
      remoteSha = await git.resolveRef({
        fs,
        gitdir: bareDir,
        ref: "refs/heads/main",
      });
    } catch {
      return `Cloning into '${repoName}'...\nwarning: remote HEAD refers to nonexistent ref, unable to checkout.`;
    }

    await copyMissingObjects(bareDir, `${targetDir}/.git`, remoteSha);
    await git.writeRef({
      fs,
      dir: targetDir,
      ref: "refs/heads/main",
      value: remoteSha,
      force: true,
    });
    await git.writeRef({
      fs,
      dir: targetDir,
      ref: "HEAD",
      value: "refs/heads/main",
      force: true,
      symbolic: true,
    });
    await git.checkout({ fs, dir: targetDir, ref: "main", force: true });

    return `Cloning into '${repoName}'... done.`;
  } catch (err: unknown) {
    return `fatal: ${(err as Error).message}`;
  }
}
