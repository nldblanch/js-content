import git from 'isomorphic-git';
import fs from '@/lib/fileSystem.ts';
import { urlToPath } from '@/lib/commands/helpers.ts';

export async function add(dir: string, args: string[]): Promise<string> {
  const remoteName = args[1];
  const remoteUrl  = args[2];

  if (!remoteName || !remoteUrl) return `usage: git remote add <name> <url>`;

  if (urlToPath(remoteUrl) === null) {
    return `error: invalid remote URL '${remoteUrl}'\n` +
           `Hint: URLs should look like https://github.com/user/repo.git`;
  }

  try {
    await git.addRemote({ fs, dir, remote: remoteName, url: remoteUrl });
    return '';
  } catch (err: unknown) {
    const msg = (err as Error).message ?? '';
    if (msg.includes('already exists')) return `error: remote ${remoteName} already exists.`;
    return `error: ${msg}`;
  }
}
