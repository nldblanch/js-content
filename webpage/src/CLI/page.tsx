import SplitView from "./components/layout/SplitView";
import initFs from "./lib/initFs.ts";
import { useEffect } from "react";

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
