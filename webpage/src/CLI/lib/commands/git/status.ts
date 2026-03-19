import git from "isomorphic-git";
import fs from "@CLI/lib/fileSystem.ts";
import { getCwd } from "@CLI/store/useTerminalStore.ts";

export async function status(): Promise<string> {
  const dir = getCwd();

  try {
    const matrix = await git.statusMatrix({ fs, dir });

    const staged: string[] = [];
    const unstaged: string[] = [];
    const untracked: string[] = [];

    for (const [filepath, head, workdir, index] of matrix) {
      if (head === 0 && workdir === 2 && index === 0) untracked.push(filepath);
      else if (head === 0 && workdir === 2 && index === 2)
        staged.push(`new file:   ${filepath}`);
      else if (head === 1 && workdir === 2 && index === 2)
        staged.push(`modified:   ${filepath}`);
      else if (head === 1 && workdir === 2 && index === 1)
        unstaged.push(`modified:   ${filepath}`);
      else if (head === 1 && workdir === 0 && index === 0)
        staged.push(`deleted:    ${filepath}`);
      else if (head === 1 && workdir === 0 && index === 1)
        unstaged.push(`deleted:    ${filepath}`);
    }

    let branch = "main";
    try {
      branch = (await git.currentBranch({ fs, dir })) ?? "main";
    } catch {
      /* ignore */
    }

    const lines: string[] = [`On branch ${branch}`];

    if (!staged.length && !unstaged.length && !untracked.length) {
      lines.push("nothing to commit, working tree clean");
      return lines.join("\r\n");
    }

    if (staged.length) {
      lines.push(
        "",
        "Changes to be committed:",
        '  (use "git restore --staged <file>..." to unstage)',
      );
      for (const f of staged) lines.push(`\t\t${f}`);
    }
    if (unstaged.length) {
      lines.push(
        "",
        "Changes not staged for commit:",
        '  (use "git add <file>..." to update what will be committed)',
      );
      for (const f of unstaged) lines.push(`\t\t${f}`);
    }
    if (untracked.length) {
      lines.push(
        "",
        "Untracked files:",
        '  (use "git add <file>..." to include in what will be committed)',
      );
      for (const f of untracked) lines.push(`\t\t${f}`);
    }

    return lines.join("\r\n");
  } catch {
    return "fatal: not a git repository (or any of the parent directories): .git";
  }
}
