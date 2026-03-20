import git from "isomorphic-git";
import fs from "@CLI/lib/fileSystem.ts";
import { getCwd } from "@CLI/store/useTerminalStore.ts";

/**
 * git log
 */
export async function log(): Promise<string> {
  const dir = getCwd();

  try {
    const commits = await git.log({ fs, dir });
    if (commits.length === 0)
      return "fatal: your current branch does not have any commits yet";

    const lines: string[] = [];
    for (const entry of commits) {
      const { oid, commit: c } = entry;
      const date = new Date(c.author.timestamp * 1000);

      lines.push(`commit ${oid}`);
      lines.push(`Author: ${c.author.name} <${c.author.email}>`);
      lines.push(`Date:   ${date.toLocaleString()}`);
      lines.push(`\n    ${c.message}\n`);
    }

    return lines.join("\r\n");
  } catch {
    return "fatal: not a git repository (or any of the parent directories): .git";
  }
}
