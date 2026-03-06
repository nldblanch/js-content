import type FS from "@isomorphic-git/lightning-fs";
import { useTerminalStore } from "../../store/useTerminalStore.ts";

/** Type guard for lightning-fs errors, which extend Error with a `code` property */
export function isFsError(err: unknown): err is Error & { code: string } {
  return err instanceof Error && 'code' in err && typeof err.code === 'string';
}

/**
 * Helper to resolve relative or absolute paths against the CWD
 */
export const resolvePath = (input: string): string => {
  const cwd = useTerminalStore.getState().cwd;

  if (input == ".") return cwd;

  const combined = input.startsWith('/') ? input : `${cwd}/${input}`;
  // Normalize: remove double slashes and trailing slashes (except root)
  let normalized = combined.replace(/\/+/g, '/');
  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }
  return normalized || '/';
};

/**
 * Check if a path exists in the virtual filesystem, and optionally verify its type (e.g. "dir" or "file")
 * @param fs - The virtual filesystem instance
 * @param path - The path to check
 * @param type - Optional type to verify ("dir" or "file")
 * @returns A promise that resolves to true if the path exists (and matches the type if specified), otherwise false.
 */
export const exists = async (fs: FS, path: string, type: string = ""): Promise<boolean> => {

  try {
    // Check if path exists. e.g. if(exists(getCWD()))
    const stats = await fs.promises.stat(path);

    // If type is specified, also check if it matches (e.g. "dir" or "file")
    if (type != "") {
      return stats.type == type ? true : false;
    }

    return true;
  } catch {
    return false;
  }

};

/**
 * Converts a URL into a path for the virtual filesystem.
 * e.g. 'https://github.com/user/my-repo' -> '/remote/my-repo.git'
 * Only called internally — the user always sees their original URL.
 */
export function urlToPath(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === 'github.com') {
      const segments = parsed.pathname.split('/').filter(Boolean);
      // Needs at least /user/repo
      if (segments.length >= 2) {
        const repoName = segments[segments.length - 1].replace(/\.git$/, '');
        return `/remote/${repoName}.git`;
      }
    }
  } catch {
    // Not a valid URL
  }
  return null;
}
