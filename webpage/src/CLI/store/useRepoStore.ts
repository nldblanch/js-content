// This store handles states related to the repository emulation.
// Although both the 'remote' and 'local' directories share the same FS, we treat them as separate entities.
// As such, we use a unique Zustand store for both.

import { create } from 'zustand';

interface RepoStore {
  repoDir: string | null;
  setRepoDir: (newDir: string) => void;
}

export const useRepoStore = create<RepoStore>((set) => ({
  // Repo does not exist on startup, init as null
  repoDir: null,
  setRepoDir: (newDir) => set({ repoDir: newDir }),
}));

export const getRepoDir = (): string | null => {
  return useRepoStore.getState().repoDir;
};
