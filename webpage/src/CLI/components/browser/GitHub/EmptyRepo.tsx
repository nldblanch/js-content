interface EmptyStateProps {
  openForm: () => void;
}

const EmptyState = ({ openForm }: EmptyStateProps) => {

  return (
    <div className="bg-[#0d1117] min-h-full text-[#c9d1d9] p-8 font-sans">
      <div className="max-w-3xl mx-auto border border-[#30363d] rounded-md p-8 bg-[#161b22]">
        <h2 className="text-xl font-semibold mb-4 text-[#f0f6fc]">Quick setup — if you’ve done this kind of thing before</h2>
        <div className="bg-[#0d1117] p-4 rounded-md border border-[#30363d] mb-6 font-mono text-sm leading-relaxed">
          <p><span className="text-[#ff7b72]">git remote add</span> origin https://github.com/user/repo.git</p>
          <p><span className="text-[#ff7b72]">git branch</span> -M main</p>
          <p><span className="text-[#ff7b72]">git push</span> -u origin main</p>
        </div>
        <h3 className="font-semibold mb-2">...or create a new repository on the command line</h3>
        <div className="bg-[#0d1117] p-4 rounded-md border border-[#30363d] font-mono text-sm leading-relaxed mb-6">
          <p className="text-[#8b949e]"># echo "# new-project" &gt; README.md</p>
          <p>git init</p>
          <p>git add README.md</p>
          <p>git commit -m "first commit"</p>
        </div>

        <h3 className="font-semibold mb-4">...don't want to use the CLI? Use the web interface instead!</h3>
        <button
          onClick={openForm}
          className="bg-[#238636] hover:bg-[#2ea043] disabled:opacity-50 disabled:bg-[#238636] text-white px-5 py-2 rounded-md font-semibold transition-colors shadow-sm cursor-pointer"
        >
          Create New Repository
        </button>

      </div>

    </div>
  );
};

export default EmptyState;
