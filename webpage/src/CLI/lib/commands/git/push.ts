import git from 'isomorphic-git';
import fs from '@/lib/fileSystem.ts';
import { getCwd } from "@/store/useTerminalStore.ts";
import type { CommandContext } from "@/types.ts";
import { urlToPath } from '../helpers.ts';
import { copyMissingObjects } from './utils.ts';
import { useAppStore } from '@/store/useAppStore.ts';

export async function push(ctx: CommandContext): Promise<string> {
  const { args } = ctx;
  const dir = getCwd();
  const remoteName = args[0] || 'origin';
  const branch = args[1] || 'main';

  try {
    const remotes = await git.listRemotes({ fs, dir });
    const remoteConfig = remotes.find(r => r.remote === remoteName);
    if (!remoteConfig) return `fatal: '${remoteName}' does not appear to be a git repository`;

    const localRemotePath = urlToPath(remoteConfig.url);
    if (!localRemotePath) return `fatal: invalid remote URL`;

    let localSha: string;
    try {
      localSha = await git.resolveRef({ fs, dir, ref: `refs/heads/${branch}` });
    } catch {
      return `error: src refspec '${branch}' does not match any`;
    }

    let remoteSha: string | null = null;
    try { remoteSha = await git.resolveRef({ fs, gitdir: localRemotePath, ref: `refs/heads/${branch}` }); } catch { /* ignore */ }

    if (remoteSha === localSha) return 'Everything up-to-date';

    await copyMissingObjects(`${dir}/.git`, localRemotePath, localSha);
    await git.writeRef({ fs, gitdir: localRemotePath, ref: `refs/heads/${branch}`, value: localSha, force: true });

    useAppStore.getState().bumpRevision();

    if (remoteSha === null) return `To ${remoteConfig.url}\n * [new branch]      ${branch} -> ${branch}`;
    return `To ${remoteConfig.url}\n   ${remoteSha.slice(0, 7)}..${localSha.slice(0, 7)}  ${branch} -> ${branch}`;
  } catch (err: unknown) {
    return `error: failed to push some refs to '${remoteName}'\n${(err as Error).message}`;
  }
}
