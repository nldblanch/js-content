import fs from './fileSystem.ts';
import { useTerminalStore } from "../store/useTerminalStore.ts";

async function mkdirSafe(path: string) {
  try {
    await fs.promises.mkdir(path);
  } catch (err: unknown) {
    // Silently fail if directory already exists, but log other errors
    if (err instanceof Error && !err.message.includes('EEXIST')) {
      console.error(`Error creating directory ${path}:`, err);
    }
  }
}

export default async function initFs() {
  // Create the initial file structure.
  await mkdirSafe('/');
  await mkdirSafe('/home');
  await mkdirSafe('/home/user');

  // Set the initial working directory in the terminal store.
  useTerminalStore.getState().setCwd('/home/user');
}
