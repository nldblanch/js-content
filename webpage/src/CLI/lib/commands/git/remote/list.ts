import git from "isomorphic-git";
import fs from "@CLI/lib/fileSystem.ts";

export async function list(
  dir: string,
  flags: Record<string, boolean | string>,
): Promise<string> {
  try {
    const remotes = await git.listRemotes({ fs, dir });
    if (remotes.length === 0) return "";

    if (flags["v"]) {
      return remotes
        .flatMap(({ remote, url }) => [
          `${remote}\t${url} (fetch)`,
          `${remote}\t${url} (push)`,
        ])
        .join("\r\n");
    }
    return remotes.map((r) => r.remote).join("\r\n");
  } catch {
    return `fatal: not a git repository (or any of the parent directories): .git`;
  }
}
