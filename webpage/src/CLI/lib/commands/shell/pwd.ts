import { useTerminalStore } from "@CLI/store/useTerminalStore.ts";

/**
 * Function to fetch and return the current working directory from the Zustand store.
 * Zustand provides .getState() and .setState() functions to access/update outside of React.
 * @returns String containing current working directory from the Zustand store
 */
export async function pwd(): Promise<string> {
  const cwd = useTerminalStore.getState().cwd;
  return `Path\r\n----\r\n${cwd}`;
}
