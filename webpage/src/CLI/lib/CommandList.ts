// @/constants/commands.ts
import type { CommandDef } from '@CLI/types';

export const COMMAND_GROUPS: Record<string, { title: string; color: string; accent: string; commands: CommandDef[] }> =
  {
    shell: {
      title: 'Shell Commands',
      color: 'var(--brand-blue)',
      accent: 'blue',
      commands: [
        {
          command: 'ls',
          description: 'List directory contents',
          flags: [
            { name: '-l', desc: 'Use a long listing format' },
            { name: '-a', desc: 'Include hidden files (starting with .)' },
          ],
          args: [{ name: '[dir]', desc: 'Directory to list (defaults to current)' }],
        },
        {
          command: 'cd',
          description: 'Change directory',
          args: [{ name: '<dir>', desc: 'The directory to navigate to' }],
        },
        {
          command: 'mkdir',
          description: 'Make a new directory',
          flags: [{ name: '-p', desc: 'Create parent directories as needed' }],
          args: [{ name: '<dir>', desc: 'Name of the directory to create' }],
        },
        {
          command: 'touch',
          description: 'Create an empty file or update timestamp',
          args: [{ name: '<file>', desc: 'Name of the file to create or update' }],
        },
      ],
    },
    git: {
      title: 'Git Commands',
      color: 'var(--brand-emerald)',
      accent: 'emerald',
      commands: [
        {
          command: 'git init',
          description: 'Initialize a new Git repository',
        },
        {
          command: 'git clone',
          description: 'Create a copy of an existing repository',
          args: [
            { name: '<url>', desc: 'The URL of the remote repository' },
            { name: '[dir]', desc: 'Local directory to clone into (optional)' },
          ],
        },
        {
          command: 'git status',
          description: 'Show the working tree status',
          flags: [{ name: '-s', desc: 'Give the output in an short-format' }],
        },
        {
          command: 'git add',
          description: 'Stage changes for commit',
          args: [
            { name: '<file>', desc: 'Specific file to stage' },
            { name: '.', desc: 'Stage all modified and new files' },
          ],
        },
        {
          command: 'git commit',
          description: 'Record staged changes to the repository',
          flags: [
            {
              name: '-m "<msg>"',
              desc: 'Use the given message as the commit message',
            },
            { name: '-a', desc: 'Automatically stage modified/deleted files' },
          ],
        },
        {
          command: 'git remote',
          description: 'Manage set of tracked repositories',
          flags: [
            {
              name: 'add <name> <url>',
              desc: 'Add a new remote with the given name and URL',
            },
            {
              name: 'remove <name>',
              desc: 'Remove the remote with the given name',
            },
            { name: '-v', desc: 'Show URLs in verbose mode' },
          ],
        },
        {
          command: 'git push',
          description: 'Update remote refs along with associated objects',
          flags: [
            {
              name: '<remote>',
              desc: 'The remote repository to push to (e.g. origin)',
            },
            { name: '<branch>', desc: 'The branch to push (e.g. main)' },
            { name: '-u', desc: 'Set upstream for the branch' },
          ],
        },
      ],
    },
  };
