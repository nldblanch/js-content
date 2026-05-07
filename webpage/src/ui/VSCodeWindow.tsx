import { WindowControlButtons } from './WindowControlButtons';
import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';

interface Props {
  children: React.ReactNode;
  title: string;
  code: string;
}

export const VSCodeWindow = ({ children, title, code }: Props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="rounded-3xl w-full">
      <div className="py-4 px-6 flex items-center gap-4 bg-black-800 rounded-t-3xl font-fira text-muted text-2xl">
        <WindowControlButtons />
        <h2>{title}</h2>
      </div>
      <div className="rounded-b-3xl py-4 px-6 bg-black-900 text-2xl!">
        <pre className="prose prose-invert">
          <code className="language-js text-2xl!">{code}</code>
        </pre>
        {children}
      </div>
    </div>
  );
};
