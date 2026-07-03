import fs from './fileSystem';
import git from 'isomorphic-git';

// Define Types
export interface ChallengeStep {
  label: string; // Label explaining step
  test: () => Promise<boolean>; // Returns true if complete
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  hints: string[];
  steps: ChallengeStep[];
}

// Helper Functions for checking conditions
async function pathExists(path: string): Promise<boolean> {
  try {
    await fs.promises.stat(path);
    return true;
  } catch {
    return false;
  }
}

async function isGitRepo(dir: string): Promise<boolean> {
  return pathExists(`${dir}/.git`);
}

async function remoteRepoExists(name: string): Promise<boolean> {
  return pathExists(`/remote/${name}.git`);
}

async function fileInRemote(repoName: string, fileName: string): Promise<boolean> {
  try {
    const gitdir = `/remote/${repoName}.git`;
    const sha = await git.resolveRef({ fs, gitdir, ref: 'refs/heads/main' });
    const { tree } = await git.readTree({ fs, gitdir, oid: sha });
    return tree.some((entry) => entry.path === fileName);
  } catch {
    return false;
  }
}

// Check if local repo has remote configured
async function hasRemote(dir: string, remoteName: string): Promise<boolean> {
  try {
    const remotes = await git.listRemotes({ fs, dir });
    return remotes.some((r) => r.remote === remoteName);
  } catch {
    return false;
  }
}

// Check if local repo has commits
async function hasCommits(dir: string): Promise<boolean> {
  try {
    const log = await git.log({ fs, dir, depth: 1 });
    return log.length > 0;
  } catch {
    return false;
  }
}

// DEFINE CHALLENGES
export const challenges: Challenge[] = [
  {
    id: 'basic-navigation',
    title: 'Challenge 1: Basic Navigation',
    description: 'Get comfortable with the terminal. Create a project directory and a file inside it.',
    hints: [
      'Use `mkdir` to create directories',
      'Use `cd` to move into a directory',
      'Use `touch` to create an empty file',
    ],
    steps: [
      { label: 'Create a "my-project" directory', test: () => pathExists('/home/user/my-project') },
      {
        label: 'Navigate into my-project',
        test: async () => {
          // Can't check if a user has cd'd easily, this step is here just to encourage them to move into the directory.
          return pathExists('/home/user/my-project');
        },
      },
      { label: 'Create a README.md file inside it', test: () => pathExists('/home/user/my-project/README.md') },
    ],
  },

  {
    id: 'git-basics',
    title: 'Challenge 2: Git Basics',
    description: 'Initialize a Git repository, stage your files, and make your first commit.',
    hints: [
      'Use `git init` to create a new repository',
      'Use `git add .` to stage all files',
      'Use `git commit -m "message"` to commit',
    ],
    steps: [
      { label: 'Initialize a git repo in my-project', test: () => isGitRepo('/home/user/my-project') },
      { label: 'Create a README.md file', test: () => pathExists('/home/user/my-project/README.md') },
      { label: 'Make your first commit', test: () => hasCommits('/home/user/my-project') },
    ],
  },

  {
    id: 'github-setup',
    title: 'Challenge 3: GitHub Setup',
    description: 'Create a remote repository on GitHub (the browser tab), then connect your local repo to it.',
    hints: [
      'Click the GitHub tab and create a new repository called "my-project"',
      'Use `git remote add origin <url>` to connect',
      'Use `git push origin main` to upload your commits',
    ],
    steps: [
      { label: 'Create a "my-project" repo on GitHub', test: () => remoteRepoExists('my-project') },
      { label: 'Add "origin" remote to your local repo', test: () => hasRemote('/home/user/my-project', 'origin') },
      { label: 'Push your commits to GitHub', test: () => fileInRemote('my-project', 'README.md') },
    ],
  },

  {
    id: 'push-changes',
    title: 'Challenge 4: Push New Changes',
    description: 'Make changes to your project and push them to GitHub. Verify the file appears in the browser.',
    hints: [
      'Use `touch app.js` to create a new file',
      'Stage and commit: `git add .` then `git commit -m "add app.js"`',
      'Push with `git push origin main`',
    ],
    steps: [
      { label: 'Create an app.js file', test: () => pathExists('/home/user/my-project/app.js') },
      {
        label: 'Commit app.js',
        test: async () => {
          try {
            const log = await git.log({ fs, dir: '/home/user/my-project', depth: 2 });
            return log.length >= 2; // At least 2 commits now
          } catch {
            return false;
          }
        },
      },
      { label: 'Push so app.js appears on GitHub', test: () => fileInRemote('my-project', 'app.js') },
    ],
  },

  {
    id: 'clone-repo',
    title: 'Challenge 5: Clone a Repository',
    description:
      'Clone your remote repository into a new local directory, just like downloading a project from GitHub.',
    hints: [
      'Navigate back to /home/user with `cd ..`',
      'Use `git clone <url> my-clone`',
      'Check the contents with `ls my-clone`',
    ],
    steps: [
      { label: 'Clone the repo into "my-clone"', test: () => isGitRepo('/home/user/my-clone') },
      { label: 'Verify README.md exists in the clone', test: () => pathExists('/home/user/my-clone/README.md') },
    ],
  },
];
