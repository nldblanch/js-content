import { Terminal as XTerm } from "@xterm/xterm";
import "@xterm/xterm/css/xterm.css";
import { FitAddon } from "@xterm/addon-fit";
import { useEffect, useRef } from "react";
import { dispatchCommand } from "@CLI/lib/commands/index.ts";
import { getCwd } from "@CLI/store/useTerminalStore.ts";

function Terminal() {
  const terminalRef = useRef<HTMLDivElement>(null); // Ref to hold the terminal instance
  const primaryPrompt = "user@cli-emu:";

  // Wait for DOM to be fully loaded before component mount.
  useEffect(() => {
    const terminal = new XTerm(); // Create new terminal instance
    const fitAddon = new FitAddon(); // This allows the terminal to handle dynamic resizing
    terminal.loadAddon(fitAddon); // Load the fit addon into the terminal instance

    if (!terminalRef.current) return; // Guard against null ref
    terminal.open(terminalRef.current); // Open terminal in container

    fitAddon.fit(); // Fit terminal to container size
    terminal.write(`Welcome to GitSim!\r\n${primaryPrompt}/home/user$ `);

    // xterm handles its own state, a persistent input buffer is fine
    let inputBuffer = "";

    // xterm has its own event system for handling user input
    terminal.onData(async (data) => {
      if (data.includes("\r")) {
        // Check for Enter key (carriage return)
        const result = await dispatchCommand(inputBuffer);
        terminal.write(
          result
            ? `\r\n${result}\r\n${primaryPrompt}${getCwd()}$ `
            : `\r\n${primaryPrompt}${getCwd()}$ `,
        );
        inputBuffer = "";
      } else if (data.includes("\u007F")) {
        // If backspace, slice last char
        inputBuffer = inputBuffer.slice(0, -1);
        terminal.write("\b \b"); // Move back, write space to erase, move back again
      } else {
        // For other input, just append to buffer
        inputBuffer += data;
        terminal.write(data); // Echo input back to terminal
      }
    });

    // Cleanup function to dispose of terminal instance on unmount
    return () => {
      terminal.dispose(); // Terminal handles its own state and listeners.
    };
  }, []);

  return (
    <div className="h-full bg-black text-white font-mono text-sm rounded-md overflow-hidden">
      <div ref={terminalRef} className="h-full p-4" />
    </div>
  );
}

export default Terminal;
