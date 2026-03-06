export default function Glossary() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Glossary</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Shell Commands</h2>
          <ul className="list-disc list-inside text-sm text-slate-700">
            <li><code className="bg-slate-100 px-1 rounded">ls</code>: List directory contents</li>
            <li><code className="bg-slate-100 px-1 rounded">cd</code>: Change directory</li>
            <li><code className="bg-slate-100 px-1 rounded">mkdir</code>: Make a new directory</li>
            <li><code className="bg-slate-100 px-1 rounded">touch</code>: Create an empty file or update timestamp</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Git Commands</h2>
          <ul className="list-disc list-inside text-sm text-slate-700">
            <li><code className="bg-slate-100 px-1 rounded">git init</code>: Initialize a new Git repository</li>
            <li><code className="bg-slate-100 px-1 rounded">git clone</code>: Create a copy of an existing repository</li>
            <li><code className="bg-slate-100 px-1 rounded">git status</code>: Show the working tree status</li>
            <li><code className="bg-slate-100 px-1 rounded">git log</code>: Show commit history</li>
            <li><code className="bg-slate-100 px-1 rounded">git remote</code>: Manage remote repositories</li>
            <li><code className="bg-slate-100 px-1 rounded">git add</code>: Stage changes for commit</li>
            <li><code className="bg-slate-100 px-1 rounded">git commit</code>: Record staged changes to the repository</li>
            <li><code className="bg-slate-100 px-1 rounded">git push</code>: Upload local commits to a remote repository</li>
            <li><code className="bg-slate-100 px-1 rounded">git pull</code>: Fetch and merge changes from a remote repository</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
