import React, { useEffect, useState } from 'react';
import { BookMarked, Star, Circle, Clock, Search } from 'lucide-react';   // Icons
import { fetchRemoteRepos } from '../../../lib/repo';                     // Returns array of existing repo paths

interface RepoIndexProps {
  onSelectRepo: (repoDir: string) => void;
}

const RepoIndex: React.FC<RepoIndexProps> = ({ onSelectRepo }) => {
  const [repoPaths, setRepoPaths] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // On mount, fetch all existing repos in /remote/ and populate the list
  useEffect(() => {
    const loadRepos = async () => {
      const paths = await fetchRemoteRepos();
      setRepoPaths(paths);
      setLoading(false);
    };
    loadRepos();
  }, []);

  // Helper to convert full repo path to display name. E.g. '/remote/my-repo.git' -> 'my-repo'
  const getDisplayName = (path: string) => {
    const parts = path.split('/');
    const lastPart = parts[parts.length - 1];
    return lastPart.replace('.git', '');
  };

  // Loading State
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-400 animate-pulse">
        <BookMarked className="mr-2 h-5 w-5" />
        Loading your repositories...
      </div>
    );
  }

  return (
    <div className=" bg-[#0d1117]max-w-5xl mx-auto px-6 py-10 antialiased text-gray-900">
      {/* Search and Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-6 mb-2">
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Find a repository..."
            className="block w-full pl-10 pr-3 py-1.5 border border-gray-300 rounded-md text-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex items-center gap-2">
           <span className="text-sm text-gray-600 font-medium">{repoPaths.length} results</span>
        </div>
      </div>

      {/* Repo List */}
      <div className="divide-y divide-gray-200">
        {repoPaths.map((path) => (
          <div key={path} className="py-6 flex justify-between items-start transition-colors duration-150">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <BookMarked className="h-4 w-4 text-gray-500" />
                <button
                  onClick={() => onSelectRepo(path)}
                  className="text-[#0969da] hover:underline text-xl font-semibold leading-tight"
                >
                  {getDisplayName(path)}
                </button>
                <span className="ml-1 px-2 py-0.5 text-xs font-medium text-gray-500 border border-gray-200 rounded-full leading-none">
                  Public
                </span>
              </div>

              {/* Placeholder Description */}
              <p className="text-[14px] text-gray-600 max-w-2xl mt-1 mb-3">
                Source files located at <span className="font-mono text-xs bg-gray-100 px-1 rounded">{path}</span>
              </p>

              {/* Meta Stats Row */}
              <div className="flex items-center gap-4 text-xs text-gray-500">
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

            {/* Action Button */}
            <div className="hidden sm:block">
              <button className="flex items-center gap-1.5 px-3 py-1 bg-[#f6f8fa] hover:bg-[#f3f4f6] border border-gray-300 rounded-md text-xs font-semibold text-gray-700 shadow-sm transition-all active:bg-gray-200">
                <Star className="h-3.5 w-3.5 text-gray-500" />
                Star
              </button>
            </div>
          </div>
        ))}

        {repoPaths.length === 0 && (
          <div className="py-24 flex flex-col items-center justify-center text-gray-500 border-2 border-dashed border-gray-200 rounded-lg mt-4">
             <BookMarked className="h-10 w-10 mb-2 opacity-20" />
             <p className="text-lg font-medium">No repositories found</p>
             <p className="text-sm">Check your /remote directory and try again.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RepoIndex;
