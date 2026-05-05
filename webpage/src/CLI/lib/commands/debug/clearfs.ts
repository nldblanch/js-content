import FS from "@isomorphic-git/lightning-fs";

/**
 * Debugging command to clear the entire IndexedDB filesystem and reload the application.
 */
export async function clearFS(): Promise<string> {
  new FS("local-fs", { wipe: true });
  window.location.reload();
  return "";
}
