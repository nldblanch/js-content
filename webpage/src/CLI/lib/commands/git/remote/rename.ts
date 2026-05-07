import git from 'isomorphic-git';
import fs from '@CLI/lib/fileSystem.ts';

export async function rename(dir: string, args: string[]): Promise<string> {
  const oldName = args[1];
  const newName = args[2];
  if (!oldName || !newName) return `usage: git remote rename <old> <new>`;

  try {
    const remotes = await git.listRemotes({ fs, dir });
    const existing = remotes.find((r) => r.remote === oldName);
    if (!existing) return `error: No such remote: '${oldName}'`;

    await git.deleteRemote({ fs, dir, remote: oldName });
    await git.addRemote({ fs, dir, remote: newName, url: existing.url });
    return '';
  } catch (err: unknown) {
    return `error: ${(err as Error).message}`;
  }
}
