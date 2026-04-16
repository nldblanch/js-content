import { WindowControlButtons } from "./WindowControlButtons";
import { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";

interface Props {
  children: React.ReactNode;
  title: string;
  code: string;
}

export const VSCodeWindow = ({ children, title, code }: Props) => {
  // Reference to allow clicking the container to focus the input
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const handleContainerClick = () => {
    // Find the input inside the children and focus it
    const input = containerRef.current?.querySelector("input");
    if (input) {
      (input as HTMLInputElement).focus();
    }
  };

  return (
    <div className="rounded-3xl w-full">
      {/* Header */}
      <div className="py-4 px-6 flex items-center gap-4 bg-black-800 rounded-t-3xl font-fira text-muted text-2xl">
        <WindowControlButtons />
        <h2>{title}</h2>
      </div>

      {/* Code Body - Added cursor-text and onClick */}
      <div
        ref={containerRef}
        onClick={handleContainerClick}
        className="rounded-b-3xl py-4 px-6 bg-black-900 text-2xl!"
      >
        <pre className="prose prose-invert">
          <code className="language-js text-2xl!">{code}</code>
        </pre>
        {children}
      </div>
    </div>
  );
};
