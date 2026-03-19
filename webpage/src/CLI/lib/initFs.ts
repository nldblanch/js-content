import fs from "./fileSystem.ts";
import { useTerminalStore } from "@CLI/store/useTerminalStore.ts";
import { isFsError } from "./commands/helpers.ts";

async function mkdirSafe(path: string) {
  try {
    await fs.promises.mkdir(path);
  } catch (err: unknown) {
    // Silently fail if dir already exists
    if (!isFsError(err) || err.code !== "EEXIST") {
      console.error(`Error creating directory ${path}:`, err);
    }
  }
}

export default async function initFs() {
  // Create the initial file structure.
  await mkdirSafe("/");
  await mkdirSafe("/home");
  await mkdirSafe("/home/user");

  // Set the initial working directory in the terminal store.
  useTerminalStore.getState().setCwd("/home/user");
}
