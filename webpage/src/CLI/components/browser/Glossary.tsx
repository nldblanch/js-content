import { useEffect } from "react";
import { useAppStore } from "@/store/useAppStore";
import type { CommandDef } from "@/types";

const shellCommands: CommandDef[] = [
  {
    command: 'ls',
    description: 'List directory contents',
    flags: [
      { name: '-l', desc: 'Use a long listing format' },
      { name: '-a', desc: 'Include hidden files (starting with .)' }
    ],
    args: [
      { name: '[dir]', desc: 'Directory to list (defaults to current)' }
    ]
  },
  {
    command: 'cd',
    description: 'Change directory',
    args: [
      { name: '<dir>', desc: 'The directory to navigate to' }
    ]
  },
  {
    command: 'mkdir',
    description: 'Make a new directory',
    flags: [
      { name: '-p', desc: 'Create parent directories as needed' }
    ],
    args: [
      { name: '<dir>', desc: 'Name of the directory to create' }
    ]
  },
  {
    command: 'touch',
    description: 'Create an empty file or update timestamp',
    args: [
      { name: '<file>', desc: 'Name of the file to create or update' }
    ]
  },
];

const gitCommands: CommandDef[] = [
  {
    command: 'git init',
    description: 'Initialize a new Git repository'
  },
  {
    command: 'git clone',
    description: 'Create a copy of an existing repository',
    args: [
      { name: '<url>', desc: 'The URL of the remote repository' },
      { name: '[dir]', desc: 'Local directory to clone into (optional)' }
    ]
  },
  {
    command: 'git status',
    description: 'Show the working tree status',
    flags: [
      { name: '-s', desc: 'Give the output in an short-format' }
    ]
  },
  {
    command: 'git add',
    description: 'Stage changes for commit',
    args: [
      { name: '<file>', desc: 'Specific file to stage' },
      { name: '.', desc: 'Stage all modified and new files' }
    ]
  },
  {
    command: 'git commit',
    description: 'Record staged changes to the repository',
    flags: [
      { name: '-m "<msg>"', desc: 'Use the given message as the commit message' },
      { name: '-a', desc: 'Automatically stage modified/deleted files' }
    ]
  },
  {
    command: 'git remote',
    description: 'Manage set of tracked repositories',
    flags: [
      { name: 'add <name> <url>', desc: 'Add a new remote with the given name and URL' },
      { name: 'remove <name>', desc: 'Remove the remote with the given name' },
      { name: '-v', desc: 'Show URLs in verbose mode' }
    ]
  },
  {
    command: 'git push',
    description: 'Update remote refs along with associated objects',
    flags: [
      { name: '<remote>', desc: 'The remote repository to push to (e.g. origin)' },
      { name: '<branch>', desc: 'The branch to push (e.g. main)' },
      { name: '-u', desc: 'Set upstream for the branch' }
    ]
  }
];

export default function Glossary() {

  useEffect(() => {
    useAppStore.getState().setBrowserUrl('https://localhost:3000/glossary');
  }, []);

  const renderCommandCard = ({ command, description, flags, args }: CommandDef, type: 'shell' | 'git') => {
    const themeColor = type === 'shell' ? 'blue' : 'emerald';

    return (
      <div key={command} className={`bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-${themeColor}-400 transition-all flex flex-col h-full`}>
        <div className="mb-2">
          <code className={`text-${themeColor}-700 bg-${themeColor}-50 px-2 py-1 rounded font-mono text-sm font-semibold`}>
            {command}
          </code>
        </div>
        <p className="text-slate-700 text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {(flags || args) && (
          <div className="space-y-3 pt-4 border-t border-slate-100 mt-auto">
            {args && args.length > 0 && (
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Arguments</h4>
                <ul className="space-y-1">
                  {args.map((arg) => (
                    <li key={arg.name} className="text-xs flex gap-2 items-start">
                      <code className="text-slate-800 font-mono font-medium whitespace-nowrap">{arg.name}</code>
                      <span className="text-slate-500 leading-snug">- {arg.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {flags && flags.length > 0 && (
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Flags</h4>
                <ul className="space-y-1">
                  {flags.map((flag) => (
                    <li key={flag.name} className="text-xs flex gap-2 items-start">
                      <code className="text-slate-800 font-mono font-medium whitespace-nowrap">{flag.name}</code>
                      <span className="text-slate-500 leading-snug">- {flag.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-full bg-slate-50 text-slate-900 font-sans p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold tracking-tight mb-8">Command Glossary</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-semibold border-b border-slate-200 pb-2 mb-6 text-slate-800">
              Shell Commands
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {shellCommands.map(cmd => renderCommandCard(cmd, 'shell'))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold border-b border-slate-200 pb-2 mb-6 text-slate-800">
              Git Commands
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gitCommands.map(cmd => renderCommandCard(cmd, 'git'))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
