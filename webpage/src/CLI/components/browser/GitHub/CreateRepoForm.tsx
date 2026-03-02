import { useState } from 'react';
import { Book, Lock, ChevronDown, Info } from 'lucide-react';

const CreateRepoForm = ({ onSubmit }: { onSubmit: (name: string, addReadme: boolean) => void }) => {

  const [repoName, setRepoName] = useState('');
  const [addReadme, setAddReadme] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(repoName, addReadme);  // pass values up to router
  };

  return (
    <div className="bg-[#0d1117] min-h-full text-[#c9d1d9] font-sans">
      <div className="max-w-[820px] mx-auto py-10 px-4 md:px-8">

        {/* Header Section */}
        <div className="border-b border-[#30363d] pb-4 mb-8">
          <h1 className="text-2xl font-semibold text-[#f0f6fc]">Create a new repository</h1>
          <p className="text-[#8b949e] mt-1 text-sm">
            Repositories contain a project's files and version history. Have a project elsewhere?
            <span className="text-[#58a6ff] cursor-pointer hover:underline ml-1">Import a repository.</span>
          </p>
          <p className="text-sm text-[#8b949e]">
            <em>Required fields are marked with an asterisk (*).</em>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Owner & Repo Name */}
          <div className="flex flex-col md:flex-row items-start md:items-end gap-2">
            <div>
              <label className="block font-semibold mb-2 text-[#f0f6fc]">Owner *</label>
              <button type="button" className="flex items-center gap-2 bg-[#21262d] border border-[#30363d] px-3 py-1.5 rounded-md text-sm font-medium hover:bg-[#30363d]">
                <div className="w-5 h-5 bg-linear-to-tr from-orange-400 to-red-500 rounded-full" />
                username <ChevronDown size={14} />
              </button>
            </div>

            <span className="hidden md:block text-2xl mb-1 text-[#8b949e]">/</span>

            <div className="flex-1 w-full">
              <label className="block font-semibold mb-2 text-[#f0f6fc]">Repository name *</label>
              <input
                type="text"
                value={repoName}
                onChange={(e) => setRepoName(e.target.value)}
                className="w-full md:w-80 bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1.5 text-sm focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] outline-none transition-all"
                required
              />
            </div>
          </div>

          <p className="text-xs text-[#8b949e]">
            Great repository names are short and memorable. How about <span className="text-[#3fb950] font-bold">ubiquitous-adventure</span>?
          </p>

          {/* Description */}
          <div>
            <label className="block font-semibold mb-2 text-[#f0f6fc]">
              Description <span className="text-[#8b949e] font-normal text-sm">(optional)</span>
            </label>
            <input
              type="text"
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1.5 text-sm focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] outline-none"
            />

            {/* Calculate charcount dynamically - for now its hardcoded */}
            <p className="text-xs text-[#8b949e] mt-2">
              0 / 350 characters
            </p>

          </div>

          <hr className="border-[#30363d]" />

          {/* Visibility Selection */}
          <div className="space-y-4">
            <div className="flex items-start gap-3 cursor-pointer group">
              <input type="radio" name="visibility" id="public" defaultChecked className="mt-1.5 accent-[#58a6ff]" />
              <label htmlFor="public" className="cursor-pointer">
                <div className="flex items-center gap-2 font-semibold text-[#f0f6fc]">
                  <Book size={18} className="text-[#8b949e]" /> Public
                </div>
                <p className="text-xs text-[#8b949e]">Anyone on the internet can see this repository. You choose who can commit.</p>
              </label>
            </div>

            <div className="flex items-start gap-3 cursor-pointer group opacity-60">
              <input type="radio" name="visibility" id="private" className="mt-1.5 accent-[#58a6ff]" />
              <label htmlFor="private" className="cursor-pointer">
                <div className="flex items-center gap-2 font-semibold text-[#f0f6fc]">
                  <Lock size={18} className="text-[#8b949e]" /> Private
                </div>
                <p className="text-xs text-[#8b949e]">You choose who can see and commit to this repository.</p>
              </label>
            </div>
          </div>

          <hr className="border-[#30363d]" />

          {/* Initialization Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#f0f6fc]">Initialize this repository with:</h3>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="readme" className="accent-[#58a6ff]" checked={addReadme} onChange={(e) => setAddReadme(e.target.checked)} />
              <label htmlFor="readme" className="text-sm font-semibold text-[#f0f6fc]">Add a README file</label>
            </div>
            <p className="text-xs text-[#8b949e] ml-6 -mt-3">READMEs can be used as longer descriptions. <u>About READMEs</u></p>
          </div>

          <hr className="border-[#30363d]" />

          {/* Help Text & Submit */}
          <div className="flex items-start gap-2 text-[#8b949e] text-xs">
            <Info size={14} className="mt-0.5" />
            <p>As this is a tutorial application, Public and Private will have no effect on repo creation!</p>
          </div>

          <button
            type="submit"
            className="bg-[#238636] hover:bg-[#2ea043] disabled:opacity-50 disabled:bg-[#238636] text-white px-5 py-2 rounded-md font-semibold transition-colors shadow-sm cursor-pointer"
          >
            Create repository
          </button>

        </form>
      </div>
    </div>
  );
};

export default CreateRepoForm;
