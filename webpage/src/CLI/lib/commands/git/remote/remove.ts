import git from 'isomorphic-git';
import fs from '@CLI/lib/fileSystem.ts';

export async function remove(dir: string, args: string[]): Promise<string> {
  const remoteName = args[1];
  if (!remoteName) return `usage: git remote remove <name>`;

  try {
    await git.deleteRemote({ fs, dir, remote: remoteName });
    return '';
  } catch {
    return `error: No such remote: '${remoteName}'`;
  }
}
