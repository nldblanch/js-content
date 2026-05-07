import SplitView from './components/layout/SplitView';
import initFs from './lib/initFs.ts';
import { useEffect } from 'react';

// Buffer is not provided by Vite, but is expected by isomorphic-git.
import { Buffer } from 'buffer';
(window as unknown as { Buffer: typeof Buffer }).Buffer = Buffer;

export default function CLI() {
  // Initialize the file system on component mount.
  useEffect(() => {
    initFs();
  }, []);

  return (
    <>
      <SplitView className="p-4" />
    </>
  );
}
