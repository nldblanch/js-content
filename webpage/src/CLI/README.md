
## Project Flow

### Terminal Input Handling
```
Terminal types "ls /home"
        ↓
index.ts receives "ls /home"
        ↓
index.ts splits it, sees "ls", calls shell.ts → ls("/home")
        ↓
shell.ts talks to fs, returns output string back up the chain
```

##  Technologies

### `react-resizable-panels`
This library provides a simple way to create resizable panels in React. It will allow us to create a split view with a terminal on one side and a web view on the other, where users can adjust the size of each panel by dragging the divider.
You can think of it as an extension of a basic html table layout, but with the added functionality of being able to resize the panels by dragging the divider.
```jsx
<Group  direction="horizontal">
  <Panel>          {/* Left: Web View */}
    ...
  </Panel>

  <Separator  />

  <Panel>          {/* Right: Terminal */}
    ...
  </Panel>
</Group >
```

### `xterm.js`
This is a popular JavaScript library for creating terminal emulators in the browser. It provides a visual terminal-like interface that we can hook up to our logic. It handles rendering the terminal, managing cursor position, and processing user input for us. We can listen for key events and capture the input string, which we will then parse and execute against our virtual file system and git implementation.

### `lightning-fs`
This is a virtual file system optimized for use with `isomorphic-git`. It allows us to create an in-memory file system that behaves like a real one, which is crucial for running git commands in the browser. It supports standard file operations like reading, writing, and listing files, and it integrates seamlessly with `isomorphic-git` to allow us to perform git operations on the virtual file system. It makes use of the browser's IndexedDB for persistent storage, so we dont have to worry about issues with in-memory storage, such as limits, or data loss on page refresh. 

To make use of `isomorphic-git` we also need a proper file system, as it wouldn't simply accept a more basic JavaScript object, `lightning-fs` provides the necessary API and structure.

### `isomorphic-git`
This is a pure JavaScript implementation of git that can run in the browser. It allows us to execute git commands against our virtual file system, enabling us to simulate a git workflow entirely in the browser. It supports a wide range of git commands, including `git init`, `git add`, `git commit`, and more. It also provides a way to read the git log and file tree, which we can use to render the "GitHub" view in our application.

### `zustand`
This is a small, fast, and scalable state management library for React. It will allow us to manage the state of our application, such as the current file system structure, git history, and UI state (like which commit is selected). It provides a simple API for creating a global store that can be accessed and updated from any component in our application.

## Other dependencies

#### Lucide Icons

#### Tailwind 




## Simulating a repo
We actually use the same file system for both the users 'local' terminal environment, and the 'remote' location. The isolation is handled strictly through the directory path. CLI is scoped to `home/user`, whilst our 'remote' repo lives in `/remote/`.

### But how do we simulate `origin` and `remote`?
This is a really neat feature of `isomorphic-git`.  It contains the concept of remotes stored in the repo's config, this allows us to programmatically add a remote pointing to our local path. 
```js
await git.addRemote({
  fs,
  dir: '/home/user/myrepo',
  remote: 'origin',
  url: '/remote/myrepo.git'  // local path, not a real URL!
})
```

From the user's perspective, `git remote -v` would show `origin` just like real git. They'd never know it's a local path. This gives you realistic `push`/`pull`/`clone` behaviour without any network calls.

**For cloning**, isomorphic-git supports cloning from a local path too — so `git clone /remote/myrepo.git myrepo` would work exactly like cloning from GitHub from the user's perspective.
```
/home/user/myrepo/          ← user's working directory
  .git/                     ← local git history
    config                  ← contains: [remote "origin"] url=/remote/myrepo.git

/remote/                    ← hidden from CLI, user can't cd here
  myrepo.git/               ← bare repo, the "GitHub server"

```

## BrowserFrame & Tab System

`BrowserFrame` is a standalone, self-contained browser chrome component. It takes any number of children, deconstructs them, and generates a tab for each one — no configuration objects, no external state, no special interfaces required on child components.

### Basic Usage

Wrap any components in `<BrowserTab>` and pass them as children to `<BrowserFrame>`:

```/dev/null/example.tsx#L1-7
<BrowserFrame>
  <BrowserTab tabTitle="GitHub">
    <PageRouter />
  </BrowserTab>
  <BrowserTab tabTitle="Documentation">
    <DocsPage />
  </BrowserTab>
</BrowserFrame>
```

Each `<BrowserTab>` becomes a clickable tab in the browser's tab strip. Only the active tab's content is rendered in the content area.

### How It Works

```/dev/null/flow.txt#L1-12
<BrowserFrame>
  <BrowserTab tabTitle="GitHub">     ──→  Tab 1: "GitHub"      (active)
    <PageRouter />
  </BrowserTab>
  <BrowserTab tabTitle="Docs">       ──→  Tab 2: "Docs"
    <DocsPage />
  </BrowserTab>
</BrowserFrame>
        ↓
React.Children.toArray(children)     ──→  [BrowserTab, BrowserTab]
        ↓
childArray[activeIndex]              ──→  renders only the selected tab's content
```

1. `BrowserFrame` calls `React.Children.toArray()` to flatten its children into an indexable array
2. For each child, `getTabTitle()` reads the `tabTitle` prop to determine the tab label
3. An `activeIndex` state tracks which tab is selected
4. Only `childArray[activeIndex]` is rendered into the content area — inactive tabs don't mount

### Tab Title Resolution

`getTabTitle()` uses a priority chain to determine what label appears on each tab:

| Priority | Source | Example |
|----------|--------|---------|
| 1st | `tabTitle` prop on the child | `<BrowserTab tabTitle="GitHub">` → `"GitHub"` |
| 2nd | Component's `displayName` or `name` | `<PageRouter />` → `"PageRouter"` |
| 3rd | Generic fallback | `"Tab 1"`, `"Tab 2"`, etc. |

This means `<BrowserTab>` is optional — bare components still work, they just get auto-named:

```/dev/null/example.tsx#L1-5
<BrowserFrame>
  <PageRouter />
  <Settings />
</BrowserFrame>
```

This produces tabs labelled "PageRouter" and "Settings" automatically.

### The `<BrowserTab>` Wrapper

`BrowserTab` is a transparent wrapper component exported alongside `BrowserFrame`. It exists purely to carry the `tabTitle` prop in a type-safe way — at runtime, it just renders its children:

```/dev/null/example.tsx#L1-3
export function BrowserTab({ children }: BrowserTabProps) {
  return <>{children}</>;
}
```

This solves a TypeScript problem: you can't pass `tabTitle` directly to a component like `<PageRouter tabTitle="GitHub" />` because `PageRouter` doesn't accept that prop. The wrapper gives TypeScript a proper type to validate against, without requiring child components to change their interfaces at all.

### Design Principles

- **Standalone** — `BrowserFrame` ships everything it needs. No external state, no configuration objects, no provider wrappers.
- **Zero impact on children** — Child components don't need to know they're inside a browser frame. They don't accept special props or implement any interface.
- **Graceful degradation** — One child? You get one tab. Five children? Five tabs. No wrapper? Tab name is inferred. Everything just works.


## Testing

AI Generated - not yet verified, proceed with caution. The general flow should work, but some commands may need tweaking based on the actual implementation.

### Phase 1: Set up the "GitHub" side
1. Open the browser panel (left side)
2. Click to create a new repository — name it `my-project`
3. This creates `/remote/my-project.git` as a bare repo

### Phase 2: Local repo setup (terminal)
```/dev/null/test.sh#L1-6
mkdir my-project
cd my-project
git init
touch README.md
git add .
git commit -m "initial commit"
```

### Phase 3: Connect to remote and push
```/dev/null/test.sh#L1-3
git remote add origin https://github.com/user/my-project.git
git remote -v
git push origin main
```

After `git push`, the browser panel should **auto-refresh** and show `README.md` in the file tree.

### Phase 4: Verify push worked
```/dev/null/test.sh#L1-2
touch app.js
git add .
```
Wait — `git add` should be **silent** on success here. If you see output like `added 1 file(s)`, the old version is still running. Then:
```/dev/null/test.sh#L1-2
git commit -m "add app.js"
git push origin main
```
Browser panel should now show both `README.md` and `app.js`.

### Phase 5: Test pull
This is trickier to test right now since we can't easily modify the bare repo independently. But you can test the "already up to date" case:
```/dev/null/test.sh#L1
git pull origin main
```
Should return `Already up to date.`

### Phase 6: Test clone (if wired into router)
```/dev/null/test.sh#L1-3
cd /home/user
git clone https://github.com/user/my-project.git my-clone
cd my-clone
```
Then `ls` should show the files from the remote.
