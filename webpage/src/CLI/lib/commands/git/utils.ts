import git from 'isomorphic-git';
import fs from '@CLI/lib/fileSystem.ts';
import type { CommitObject, TreeEntry } from 'isomorphic-git';

// Helper functions specific to git operations

/**
 * Copy all git objects reachable from a given SHA from one repo into another.
 */
export async function copyMissingObjects(srcDir: string, destDir: string, sha: string): Promise<void> {
  const visited = new Set<string>();

  async function copyObject(oid: string): Promise<void> {
    if (visited.has(oid)) return;
    visited.add(oid);

    try {
      await git.readObject({ fs, gitdir: destDir, oid, format: 'deflated' });
      return;
    } catch {
      /* not there yet — continue */
    }

    const obj = await git.readObject({
      fs,
      gitdir: srcDir,
      oid,
      format: 'parsed',
    });

    if (obj.type === 'commit') {
      const c = obj.object as CommitObject;
      await git.writeCommit({ fs, gitdir: destDir, commit: c });
      await copyObject(c.tree);
      for (const parent of c.parent) await copyObject(parent);
    } else if (obj.type === 'tree') {
      const entries = obj.object as TreeEntry[];
      await git.writeTree({ fs, gitdir: destDir, tree: entries });
      for (const entry of entries) await copyObject(entry.oid);
    } else if (obj.type === 'blob') {
      await git.writeBlob({
        fs,
        gitdir: destDir,
        blob: obj.object as Uint8Array,
      });
    }
  }

  await copyObject(sha);
}
