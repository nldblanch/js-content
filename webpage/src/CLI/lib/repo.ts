// Handle functions related to remote repo management

import git from 'isomorphic-git';
import fs from './fileSystem';
import { useRepoStore } from '@/store/useRepoStore';
import { useAppStore } from '@/store/useAppStore';
import { isFsError } from './commands/helpers';
import type { TreeEntry } from 'isomorphic-git';

async function seedReadme(gitdir: string, repoName: string): Promise<void> {
  const content = `# ${repoName}\n`;
  const encoder = new TextEncoder();

  // Write blob (raw file content)
  const blobOid = await git.writeBlob({
    fs,
    gitdir,
    blob: encoder.encode(content),
  });

  // Write a tree containing the blob as "README.md"
  const treeOid = await git.writeTree({
    fs,
    gitdir,
    tree: [
      { mode: '100644', path: 'README.md', oid: blobOid, type: 'blob' } as TreeEntry,
    ],
  });

  // Write the initial commit
  const commitOid = await git.writeCommit({
    fs,
    gitdir,
    commit: {
      message: 'Initial commit',
      tree: treeOid,
      parent: [],
      author: {
        name: 'GitHub',
        email: 'noreply@github.com',
        timestamp: Math.floor(Date.now() / 1000),
        timezoneOffset: 0,
      },
      committer: {
        name: 'GitHub',
        email: 'noreply@github.com',
        timestamp: Math.floor(Date.now() / 1000),
        timezoneOffset: 0,
      },
    },
  });

  // Point main at the new commit
  await git.writeRef({
    fs,
    gitdir,
    ref: 'refs/heads/main',
    value: commitOid,
    force: true,
  });
}

type ValidationResult =
  | { valid: true; sanitized: string }
  | { valid: false; error: string };

export async function validateRepoName(raw: string): Promise<ValidationResult> {
  let name = raw.trim();
  name = name.replace(/\s+/g, '-');                 // spaces → hyphens
  name = name.replace(/[^a-zA-Z0-9._-]/g, '');      // strip invalid characters
  name = name.replace(/\.{2,}/g, '.');              // collapse consecutive dots
  name = name.replace(/-{2,}/g, '-');               // collapse consecutive hyphens
  name = name.replace(/^[.-]+|[.-]+$/g, '');        // strip leading/trailing dots & hyphens

  if (name.length === 0) return { valid: false, error: 'Repository name cannot be empty.' };
  if (name.length > 100) return { valid: false, error: 'Repository name cannot exceed 100 characters.' };
  if (name === '.' || name === '..') return { valid: false, error: 'Repository name cannot be "." or "..".' };

  return { valid: true, sanitized: name };
}

export async function createRepo(name: string, addReadme: boolean = false): Promise<void> {
  const result = await validateRepoName(name);
  if (!result.valid) {
    throw new Error(result.error);
  }

  const sanitized = result.sanitized;
  const dir = `/remote/${sanitized}.git`;

  // Ensure /remote exists
  await fs.promises.mkdir('/remote').catch(() => {});

  // Create the directory — if it somehow already exists, give a clear error
  try {
    await fs.promises.mkdir(dir);
  } catch (err: unknown) {
    if (isFsError(err) && err.code === 'EEXIST') {
      throw new Error(`Repository '${sanitized}' already exists.`);
    }
    throw new Error(`Failed to create repository directory: ${err instanceof Error ? err.message : String(err)}`);
  }

  // Initialise as a bare repo
  await git.init({ fs, dir, bare: true });

  // Override HEAD to default to 'main' instead of 'master'
  await fs.promises.writeFile(`${dir}/HEAD`, 'ref: refs/heads/main\n');

  // Seed with README if requested
  if (addReadme) {
    await seedReadme(dir, sanitized);
  }

  // Update the store
  useRepoStore.getState().setRepoDir(dir);
  useAppStore.getState().bumpRevision();
}



export async function hasRemoteRepo(): Promise<boolean> {
  try {
    const contents = await fs.promises.readdir('/remote');
    return contents.filter((f: string) => f.endsWith('.git')).length > 0;
  } catch {
    return false;
  }
}

/**
 * Get all currently existing repos in /remote/. This is used to populate the repo index page.
 * @returns A string array of all repos in /remote/. Returns an empty array if none exist or on error.
 */
export async function fetchRemoteRepos(): Promise<string[]> {
  try {
    const contents = await fs.promises.readdir('/remote');

    return contents
      .filter((f: string) => f.endsWith('.git'))
      .map((repo) => `/remote/${repo}`);
  } catch {
    return [];
  }
}

/**
 * Get the commit log for a repo (bare repo — use gitdir directly)
 */
export async function getCommits(repoDir: string) {
  try {
    return await git.log({ fs, gitdir: repoDir });
  } catch {
    return [];
  }
}

/**
 * Get the file tree for a given ref and optional subfolder path.
 * Uses `gitdir` instead of `dir` because remote repos are bare —
 * their git objects live directly in the repo folder, not in a .git subfolder.
 *
 * @returns Array of objects with name, isDir, and path.
 */
export async function getFileTree(repoDir: string, ref: string, folderPath: string = "") {
  try {
    // For bare repos, the repoDir IS the gitdir (no .git subfolder)
    const commitSha = await git.resolveRef({ fs, gitdir: repoDir, ref: `refs/heads/${ref}` });

    const { tree } = folderPath
      ? await git.readTree({ fs, gitdir: repoDir, oid: commitSha, filepath: folderPath })
      : await git.readTree({ fs, gitdir: repoDir, oid: commitSha });

    const entries = tree.map(entry => ({
      name: entry.path,
      isDir: entry.type === 'tree',
      path: folderPath ? `${folderPath}/${entry.path}` : entry.path,
    }));

    return entries.sort((a, b) => {
      if (a.isDir === b.isDir) return a.name.localeCompare(b.name);
      return a.isDir ? -1 : 1;
    });

  } catch (error) {
    console.error("Error reading file tree:", error);
    return [];
  }
}
