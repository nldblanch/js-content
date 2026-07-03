import React, { useEffect, useState, useCallback } from 'react';
import { BookMarked, Star, Circle, Clock, Search, Plus } from 'lucide-react';
import { fetchRemoteRepos } from '@CLI/lib/repo';
import { useAppStore } from '@CLI/store/useAppStore';

interface RepoIndexProps {
  onSelectRepo: (repoDir: string) => void;
  onNewRepo?: () => void;
}

const RepoIndex: React.FC<RepoIndexProps> = ({ onSelectRepo, onNewRepo }) => {
  const [repoPaths, setRepoPaths] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Set the browser URL when this page becomes the active tab
  useEffect(() => {
    useAppStore.getState().setBrowserUrl('https://github.com/user');
  }, []);

  useEffect(() => {
    const loadRepos = async () => {
      const paths = await fetchRemoteRepos();
      setRepoPaths(paths);
      setLoading(false);
    };
    loadRepos();
  }, []);

  // useCallback to memoize the handler and prevent unnecessary re-renders
  const handleSelectRepo = useCallback(
    (path: string) => () => {
      onSelectRepo(path);
    },
    [onSelectRepo],
  );

  const getDisplayName = (path: string) => {
    const parts = path.split('/');
    const lastPart = parts[parts.length - 1];
    return lastPart.replace('.git', '');
  };

  return (
    <div className="bg-[#0d1117] min-h-full text-[#c9d1d9] font-sans">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Search & New Repo Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#30363d] pb-6 mb-2">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-[#8b949e]" />
            </div>
            <input
              type="text"
              placeholder="Find a repository..."
              className="block w-full pl-10 pr-3 py-1.5 border border-[#30363d] rounded-md text-sm text-[#c9d1d9] bg-[#0d1117] focus:outline-none focus:ring-1 focus:ring-[#58a6ff] focus:border-[#58a6ff]"
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-[#8b949e] font-medium">{repoPaths.length} results</span>
            <button
              onClick={onNewRepo}
              className="flex items-center gap-1.5 bg-[#238636] hover:bg-[#2ea043] text-white px-3 py-1.5 rounded-md text-sm font-semibold transition-colors shadow-sm cursor-pointer"
            >
              <Plus size={16} />
              New
            </button>
          </div>
        </div>

        {/* Repo List */}
        <div className="divide-y divide-[#30363d]">
          {loading ? (
            <div className="py-24 flex items-center justify-center text-[#8b949e] animate-pulse mt-4">
              <BookMarked className="mr-2 h-5 w-5" />
              <span className="text-lg">Loading your repositories...</span>
            </div>
          ) : (
            repoPaths.map((path) => (
              <div key={path} className="py-6 flex justify-between items-start transition-colors duration-150">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <BookMarked className="h-4 w-4 text-[#8b949e]" />
                    <button
                      onClick={handleSelectRepo(path)}
                      className="text-[#58a6ff] hover:underline text-xl font-semibold leading-tight"
                    >
                      {getDisplayName(path)}
                    </button>
                    <span className="ml-1 px-2 py-0.5 text-xs font-medium text-[#8b949e] border border-[#30363d] rounded-full leading-none">
                      Public
                    </span>
                  </div>

                  <p className="text-[14px] text-[#8b949e] max-w-2xl mt-1 mb-3">
                    Source files located at{' '}
                    <span className="font-mono text-xs bg-[#161b22] px-1.5 py-0.5 rounded border border-[#30363d]">
                      {path}
                    </span>
                  </p>

                  {/* Meta Stats Row */}
                  <div className="flex items-center gap-4 text-xs text-[#8b949e]">
                    <div className="flex items-center gap-1.5">
                      <Circle className="h-3 w-3 fill-yellow-400 stroke-yellow-500" />
                      <span>JavaScript</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" />
                      <span>0</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>Updated recently</span>
                    </div>
                  </div>
                </div>

                {/* Star Button */}
                <div className="hidden sm:block">
                  <button className="flex items-center gap-1.5 px-3 py-1 bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] rounded-md text-xs font-semibold text-[#c9d1d9] shadow-sm transition-all">
                    <Star className="h-3.5 w-3.5 text-[#8b949e]" />
                    Star
                  </button>
                </div>
              </div>
            ))
          )}

          {repoPaths.length === 0 && (
            <div className="py-24 flex flex-col items-center justify-center text-[#8b949e] border-2 border-dashed border-[#30363d] rounded-lg mt-4">
              <BookMarked className="h-10 w-10 mb-2 opacity-20" />
              <p className="text-lg font-medium text-[#f0f6fc]">No repositories found</p>
              <p className="text-sm">Create a new repository to get started.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepoIndex;
