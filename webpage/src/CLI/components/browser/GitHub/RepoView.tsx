import { useState, useEffect } from 'react';
import { useRepoStore } from '../../../store/useRepoStore';   // Subscribe to repo changes
import { useAppStore } from '../../../store/useAppStore';     // Subscribe to gitRevision
import { getFileTree } from '../../../lib/repo';              // Allows navigating the file tree of the repo

import {                                                      // Lucide Icon Imports
  Book, Folder, FileText, ChevronDown, Play, Code,
  Settings, Star, GitFork, Eye
} from 'lucide-react';

// Define data structs
interface TreeEntry {
  name: string;
  isDir: boolean;
  path: string;
}

interface FileRowProps {
  icon: React.ReactNode;
  name: string;
  message: string;
  time: string;
  onClick: () => void;
}

interface RepoActionButtonProps {
  icon: React.ReactNode;
  label: string;
  count: string | number;
}

interface RepoViewProps {
  onNavigateToIndex?: () => void;
}

const GithubRepo = ({ onNavigateToIndex }: RepoViewProps) => {

  // Subscribe to Zustand stores — component re-renders when these change
  const repoDir = useRepoStore(state => state.repoDir);
  const gitRevision = useAppStore(state => state.gitRevision);
  const repoName = repoDir ? repoDir.split('/').pop()?.replace('.git', '') : 'my-cool-repo';

  const [currentPath, setCurrentPath] = useState<string>("");   // Current path within repo
  const [entries, setEntries] = useState<TreeEntry[]>([]);      // Files/folders at the current path
  const [loading, setLoading] = useState(true);                 // Loading state for repo contents

  // Fetch file tree whenever the path or repo changes. Update to memoize??
  useEffect(() => {
    const loadFiles = async () => {
      if (!repoDir) return;
      setLoading(true);
      // Hardcoded 'main' for ref, could eventually add branch switching functionality
      const data = await getFileTree(repoDir, 'main', currentPath);
      setEntries(data);
      setLoading(false);
    };

    loadFiles();
  }, [repoDir, currentPath, gitRevision]);

  const navigateTo = (path: string) => setCurrentPath(path);

  return (
    <div className="bg-[#0d1117] min-h-screen text-[#c9d1d9] font-sans p-4 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div className="flex items-center gap-2 text-xl">
          <Book size={18} className="text-[#8b949e]" />
          <span className="text-[#58a6ff] hover:underline cursor-pointer" onClick={onNavigateToIndex}>user</span>
          <span className="text-[#8b949e]">/</span>
          <span
            className="font-semibold text-[#58a6ff] hover:underline cursor-pointer"
            onClick={() => navigateTo("")}
          >
            {repoName}
          </span>
          <span className="px-2 py-0.5 text-xs border border-[#30363d] rounded-full text-[#8b949e]">Public</span>
        </div>

        <div className="flex gap-2">
          <RepoActionButton icon={<Eye size={16} />} label="Watch" count="1" />
          <RepoActionButton icon={<GitFork size={16} />} label="Fork" count="0" />
          <RepoActionButton icon={<Star size={16} />} label="Star" count="12" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-[#30363d] mb-4 text-sm">
        <div className="flex items-center gap-2 px-4 py-2 border-b-2 border-[#f78166] text-[#f0f6fc]">
          <Code size={16} /> Code
        </div>
        <div className="flex items-center gap-2 px-4 py-2 text-[#8b949e] hover:text-[#f0f6fc] cursor-pointer">
          <Play size={16} /> Actions
        </div>
        <div className="flex items-center gap-2 px-4 py-2 text-[#8b949e] hover:text-[#f0f6fc] cursor-pointer">
          <Settings size={16} /> Settings
        </div>
      </div>

      {/* Dynamic Breadcrumbs */}
      <div className="flex items-center gap-2 mb-4 text-sm font-medium">
        <button
          onClick={() => navigateTo("")}
          className="text-[#58a6ff] hover:underline flex items-center gap-1"
        >
          {repoName}
        </button>
        {currentPath.split('/').filter(Boolean).map((part, i, arr) => {
          const pathSoFar = arr.slice(0, i + 1).join('/');
          return (
            <div key={pathSoFar} className="flex items-center gap-2">
              <span className="text-[#8b949e]">/</span>
              <button
                onClick={() => navigateTo(pathSoFar)}
                className="text-[#58a6ff] hover:underline"
              >
                {part}
              </button>
            </div>
          );
        })}
      </div>

      {/* File List Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 bg-[#21262d] px-3 py-1.5 rounded-md border border-[#30363d] text-sm font-medium hover:bg-[#30363d] cursor-pointer">
          <GitFork size={14} /> main <ChevronDown size={14} />
        </div>
        <button className="bg-[#238636] hover:bg-[#2ea043] text-white px-3 py-1.5 rounded-md text-sm font-semibold flex items-center gap-2 shadow-sm">
          <Code size={14} /> Code <ChevronDown size={14} />
        </button>
      </div>

      {/* Real File Explorer */}
      <div className="border border-[#30363d] rounded-md overflow-hidden bg-[#0d1117]">
        {/* Latest Commit Bar (Mocked info, but functional context) */}
        <div className="bg-[#161b22] p-4 border-b border-[#30363d] flex justify-between items-center text-sm">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#1f6feb] flex items-center justify-center text-[10px] text-white font-bold">
              UN
            </div>
            <span className="font-semibold text-[#f0f6fc]">User Name</span>
            <span className="text-[#8b949e] hidden sm:inline truncate max-w-xs">
              Viewing {currentPath || 'root'}
            </span>
          </div>
          <div className="flex items-center gap-4">
              {/* Static placeholder values for now */}
             <span className="text-[#8b949e] text-xs">ae34f21</span>
             <span className="text-[#8b949e]">just now</span>
          </div>
        </div>

        {/* File Rows */}
        <div className="divide-y divide-[#30363d]">
          {loading ? (
            <div className="p-8 text-center text-[#8b949e] animate-pulse">
              Loading files...
            </div>
          ) : (
            entries.map((entry) => (
              <FileRow
                key={entry.path}
                icon={entry.isDir
                  ? <Folder size={16} className="text-[#7d8590] fill-[#7d8590]/10" />
                  : <FileText size={16} className="text-[#7d8590]" />
                }
                name={entry.name}
                message={entry.isDir ? "Folder" : "Source File"}
                time="now"
                onClick={() => entry.isDir ? navigateTo(entry.path) : console.log("Open file:", entry.path)}
              />
            ))
          )}
          {!loading && entries.length === 0 && (
            <div className="p-8 text-center text-[#8b949e]">
              This directory is empty.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Sub Component Helpers
const FileRow = ({ icon, name, message, time, onClick }: FileRowProps) => (
  <div
    onClick={onClick}
    className="flex items-center justify-between p-3 hover:bg-[#161b22] text-sm transition-colors cursor-pointer group"
  >
    <div className="flex items-center gap-3 w-1/3">
      {icon}
      <span className="text-[#f0f6fc] group-hover:text-[#58a6ff] group-hover:underline truncate">
        {name}
      </span>
    </div>
    <div className="text-[#8b949e] flex-1 truncate px-4">{message}</div>
    <div className="text-[#8b949e] text-right whitespace-nowrap">{time}</div>
  </div>
);

const RepoActionButton = ({ icon, label, count }: RepoActionButtonProps) => (
  <div className="flex items-center border border-[#30363d] rounded-md overflow-hidden text-xs font-semibold shadow-sm">
    <button className="flex items-center gap-2 bg-[#21262d] hover:bg-[#30363d] px-3 py-1.5 border-r border-[#30363d] text-[#c9d1d9] transition-colors">
      {icon} {label}
    </button>
    <span className="bg-[#161b22] px-3 py-1.5 text-[#8b949e]">{count}</span>
  </div>
);

export default GithubRepo;
