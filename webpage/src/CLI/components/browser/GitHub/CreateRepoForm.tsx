'use client';

import { useState, useEffect, useActionState } from 'react';
import { Book, Lock, ChevronDown, Info } from 'lucide-react';
import { useAppStore } from '@CLI/store/useAppStore';

interface CreateRepoFormProps {
  onSubmit: (name: string, addReadme: boolean) => Promise<void>;
}

// Keep outside main function to prevent re-creating on render
const getNameSuggestion = (): string => {
  const adjectives = ['ubiquitous', 'animated', 'stunning', 'glorious', 'fuzzy', 'crispy', 'refactored', 'caffeinated'];
  const nouns = ['adventure', 'waffle', 'potato', 'kiwi', 'engine', 'pancake', 'algorithm', 'ninja'];

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${randomAdjective}-${randomNoun}`;
};

const CreateRepoForm = ({ onSubmit }: CreateRepoFormProps) => {
  // Init suggestion via lazy initializer.
  const [suggestion] = useState<string>(getNameSuggestion);

  // Need to keep repo name controlled as we can update it by clicking the suggestion
  const [repoName, setRepoName] = useState('');

  // Side effects to update the store's URL
  useEffect(() => {
    useAppStore.getState().setBrowserUrl('https://github.com/new');
  }, []);

  // React 19 now uses useActionState
  const [error, submitAction, isPending] = useActionState(async (_previousState: string | null, formData: FormData) => {
    try {
      // In React 19, directly extract values from formData using 'name', rather than using controlled inputs
      const name = formData.get('repoName') as string;
      const addReadme = formData.get('addReadme') === 'on';

      await onSubmit(name, addReadme);
      return null;
    } catch (err: unknown) {
      if (err instanceof Error) return err.message;
      return 'An unexpected error occurred.';
    }
  }, null);

  return (
    <div className="bg-[#0d1117] min-h-full text-[#c9d1d9] font-sans">
      <div className="max-w-[820px] mx-auto py-10 px-4 md:px-8">
        {/* Header Section */}
        <header className="border-b border-[#30363d] pb-4 mb-8">
          <h1 className="text-2xl font-semibold text-[#f0f6fc]">Create a new repository</h1>
          <p className="text-[#8b949e] mt-1 text-sm">
            Repositories contain a project&apos;s files and version history. Have a project elsewhere?
            <span className="text-[#58a6ff] cursor-pointer hover:underline ml-1">Import a repository.</span>
          </p>
        </header>

        {/* We no longer use onSubmit in React 19 */}
        <form action={submitAction} className="space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-2">
            <div>
              <label htmlFor="owner-button" className="block font-semibold mb-2 text-[#f0f6fc]">
                Owner *
              </label>
              <button
                id="owner-button"
                type="button"
                className="flex items-center gap-2 bg-[#21262d] border border-[#30363d] px-3 py-1.5 rounded-md text-sm font-medium hover:bg-[#30363d]"
              >
                <div className="w-5 h-5 bg-linear-to-tr from-orange-400 to-red-500 rounded-full" />
                username <ChevronDown size={14} />
              </button>
            </div>

            <span className="hidden md:block text-2xl mb-1 text-[#8b949e]">/</span>

            <div className="flex-1 w-full">
              <label htmlFor="repoName" className="block font-semibold mb-2 text-[#f0f6fc]">
                Repository name *
              </label>
              <input
                id="repoName"
                name="repoName"
                type="text"
                value={repoName}
                onChange={(e) => setRepoName(e.target.value)}
                className="w-full md:w-80 bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1.5 text-sm focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] outline-none transition-all"
                required
              />
            </div>
          </div>

          <p className="text-xs text-[#8b949e]">
            Great repository names are short and memorable. How about{' '}
            <button
              type="button"
              onClick={() => setRepoName(suggestion)}
              className="text-[#3fb950] font-bold cursor-pointer hover:underline transition-all bg-transparent border-none p-0"
            >
              {suggestion}
            </button>
            ?
          </p>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block font-semibold mb-2 text-[#f0f6fc]">
              Description <span className="text-[#8b949e] font-normal text-sm">(optional)</span>
            </label>
            <input
              id="description"
              name="description"
              type="text"
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1.5 text-sm focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] outline-none"
            />
          </div>

          <hr className="border-[#30363d]" />

          {/* Visibility Section */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <input
                type="radio"
                name="visibility"
                value="public"
                id="public"
                defaultChecked
                className="mt-1.5 accent-[#58a6ff]"
              />
              <label htmlFor="public" className="cursor-pointer">
                <div className="flex items-center gap-2 font-semibold text-[#f0f6fc]">
                  <Book size={18} className="text-[#8b949e]" /> Public
                </div>
                <p className="text-xs text-[#8b949e]">Anyone on the internet can see this repository.</p>
              </label>
            </div>

            <div className="flex items-start gap-3 opacity-60">
              <input type="radio" name="visibility" value="private" id="private" className="mt-1.5 accent-[#58a6ff]" />
              <label htmlFor="private" className="cursor-pointer">
                <div className="flex items-center gap-2 font-semibold text-[#f0f6fc]">
                  <Lock size={18} className="text-[#8b949e]" /> Private
                </div>
                <p className="text-xs text-[#8b949e]">You choose who can see and commit.</p>
              </label>
            </div>
          </div>

          <hr className="border-[#30363d]" />

          {/* Initialization Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#f0f6fc]">Initialize this repository with:</h3>
            <div className="flex items-center gap-3">
              <input type="checkbox" name="addReadme" id="readme" className="accent-[#58a6ff]" />
              <label htmlFor="readme" className="text-sm font-semibold text-[#f0f6fc]">
                Add a README file
              </label>
            </div>
          </div>

          <hr className="border-[#30363d]" />

          <div className="flex items-start gap-2 text-[#8b949e] text-xs italic">
            <Info size={14} className="mt-0.5 shrink-0" />
            <p>Public and Private visibility will not affect this tutorial repo.</p>
          </div>

          {error && (
            <div role="alert" className="text-sm text-[#f85149] font-medium">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="bg-[#238636] hover:bg-[#2ea043] disabled:opacity-50 disabled:cursor-not-allowed text-white px-5 py-2 rounded-md font-semibold transition-colors shadow-sm"
          >
            {isPending ? 'Creating...' : 'Create repository'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRepoForm;
