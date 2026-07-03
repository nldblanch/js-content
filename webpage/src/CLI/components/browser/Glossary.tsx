'use client';

import { useEffect } from 'react';
import { useAppStore } from '@CLI/store/useAppStore';
import { COMMAND_GROUPS } from '@CLI/lib/CommandList';
import { Terminal, GitBranch, Copy } from 'lucide-react';
import type { CommandDef, CommandOption } from '@CLI/types';

// Sub Components
const accentStyles: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
};

const iconStyles: Record<string, string> = {
  blue: 'bg-blue-600 shadow-blue-900/20',
  emerald: 'bg-emerald-600 shadow-emerald-900/20',
};

const CommandCard = ({ command, accent }: { command: CommandDef; accent: string }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Add a toast?
  };

  const currentAccentStyle = accentStyles[accent] || accentStyles.blue;

  return (
    <div className="group bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <code className={`px-3 py-1 rounded-md font-mono text-sm font-bold border ${currentAccentStyle}`}>
          {command.command}
        </code>
        <button
          onClick={() => copyToClipboard(command.command)}
          className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-slate-800 rounded-md transition-opacity"
          aria-label="Copy to clipboard"
        >
          <Copy size={14} className="text-slate-400" />
        </button>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-6">{command.description}</p>

      {/* Check for metadata */}
      {(command.args || command.flags) && (
        <div className="grid gap-4 pt-4 border-t border-slate-800">
          {command.args?.map((arg: CommandOption) => (
            <div key={`arg-${arg.name}`} className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Argument</span>
              <div className="flex items-baseline gap-2">
                <code className="text-xs font-semibold text-slate-200">{arg.name}</code>
                <span className="text-xs text-slate-500">{arg.desc}</span>
              </div>
            </div>
          ))}
          {command.flags?.map((flag: CommandOption) => (
            <div key={`flag-${flag.name}`} className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Flag</span>
              <div className="flex items-baseline gap-2">
                <code className="text-xs font-semibold text-slate-200">{flag.name}</code>
                <span className="text-xs text-slate-500">{flag.desc}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Main func

export default function Glossary() {
  // React 19: Use specific effect patterns for side effects
  useEffect(() => {
    const { setBrowserUrl } = useAppStore.getState();
    setBrowserUrl('https://localhost:3000/glossary');
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 space-y-4">
          <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
            System <span className="text-blue-600">Glossary</span>
          </h1>
          <p className="text-slate-500 max-w-2xl text-lg">A reference for CLI commands, copy here</p>
        </header>

        <div className="space-y-20">
          {Object.entries(COMMAND_GROUPS).map(([key, group]) => (
            <section key={key} className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-2 rounded-lg text-white shadow-lg ${iconStyles[group.accent] || iconStyles.blue}`}>
                  {key === 'shell' ? <Terminal size={20} /> : <GitBranch size={20} />}
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 uppercase tracking-tight">
                  {group.title}
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {group.commands.map((cmd) => (
                  <CommandCard key={cmd.command} command={cmd} accent={group.accent} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
