// Handle functions related to remote repo management

import git from 'isomorphic-git';
import fs from './fileSystem';
import { useRepoStore } from '../store/useRepoStore';
import { useAppStore } from '../store/useAppStore';

export async function createRepo(name: string, addReadme: boolean = false): Promise<void> {
  const dir = `/remote/${name}.git`;

  // Create the directory and initialise as a bare repo
  await fs.promises.mkdir('/remote').catch(() => {}); // Ensure /remote exists
  await fs.promises.mkdir(dir);
  await git.init({ fs, dir, bare: true });            // Init as bare repo

  // If README requested, write it directly into the bare repo
  // Add later

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
 * Get the commit log for a repo
 */
export async function getCommits(repoDir: string) {
  try {
    return await git.log({ fs, dir: repoDir });
  } catch {
    return [];
  }
}

/**
 * Get the top-level file tree from the latest commit
 * @returns Array of objects with name and whether they are a directory.
 */
export async function getFileTree(repoDir: string, ref: string, folderPath: string = "") {
  try {
    // Get the flat list of ALL files in the commit
    const files = await git.listFiles({ fs, dir: repoDir, ref });

    // Ensure folderPath ends with a slash for easier filtering, unless it's root
    const normalizedFolder = folderPath === "" || folderPath === "/"
      ? ""
      : folderPath.endsWith("/") ? folderPath : `${folderPath}/`;

    // De-duplicate top-level entries and determine if dir or file
    const entries = files.reduce((acc: { name: string, isDir: boolean, path: string }[], filePath) => {

      // Only search within the provided folder path.
      if (filePath.startsWith(normalizedFolder)) {

        // Get the part of the path relative to the current folder
        const relativePath = filePath.slice(normalizedFolder.length);
        const parts = relativePath.split('/');

        const name = parts[0];    // Get the top level entry in this folder (could be a file or a subfolder)
        if (!name) return acc;    // Skip if empty (can happen with trailing slashes)

        const isDir = parts.length > 1;             // If there are multiple parts, it's a directory
        const fullPath = normalizedFolder + name;   // Construct the full relative path for this entry

        // If we haven't seen this name at this level yet, add to accumulator
        if (!acc.find(e => e.name === name)) {
          acc.push({ name, isDir, path: fullPath });
        }
      }
      return acc;                                   // Return accumulator for the next iteration
    }, []);

    // Sort so directories appear before files, and then alphabetically within those groups
    return entries.sort((a, b) => {
      if (a.isDir === b.isDir) return a.name.localeCompare(b.name);
      return a.isDir ? -1 : 1;
    });

  } catch (error) {
    console.error("Error reading file tree:", error);
    return [];
  }
}
