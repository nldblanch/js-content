# Pull Request Demo

Learn how to contribute to a project using Git branches and Pull Requests! This guide will walk you through forking a repository, making changes, and submitting a pull request.

---

## Table of Contents

### Part 1: First-Time Repository Setup
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Step 1: Fork the Repository](#step-1-fork-the-repository)
- [Step 2: Clone Your Fork](#step-2-clone-your-fork)
- [Step 3: Set Up Remote Tracking](#step-3-set-up-remote-tracking)

### Part 2: The Branch/PR Workflow (Repeatable)
- [Step 4: Sync with Latest Changes](#step-4-sync-with-latest-changes)
- [Step 5: Create a New Branch](#step-5-create-a-new-branch)
- [Step 6: Make Your Changes](#step-6-make-your-changes)
- [Step 7: Stage and Commit Your Changes](#step-7-stage-and-commit-your-changes)
- [Step 8: Push Your Branch to Your Fork](#step-8-push-your-branch-to-your-fork)
- [Step 9: Create a Pull Request on Your Fork](#step-9-create-a-pull-request-on-your-fork-merge-to-your-main)

### Part 3: Contributing to the Original Repository
- [Step 10: Create a Pull Request to the Original Repository](#step-10-create-a-pull-request-to-the-original-repository)
- [Step 11: Keeping Your Fork in Sync](#step-11-keeping-your-fork-in-sync)

### Reference & Help
- [Common Issues & Solutions](#common-issues--solutions)
- [Git Command Reference](#git-command-reference)
- [Best Practices](#best-practices)
- [Need Help?](#need-help)
- [Learning Resources](#learning-resources)

---

<br>

## Overview

In this exercise, you'll learn the complete Git workflow in three parts:

**Part 1: First-Time Setup** (Do once)
- Fork and clone the repository
- Set up remote connections

**Part 2: Branch/PR Workflow** (Repeat for each feature)
- Create branches for new work
- Make changes and commit them
- Submit pull requests to your fork

**Part 3: Contributing Upstream** (When ready to share)
- Submit your work to the original repository
- Keep your fork synchronized

### Important Note About Forks

**This tutorial uses a forking workflow**, which is common for contributing to open-source projects you don't have write access to. However, **in most professional team environments**, you'll work differently:

- **With a fork** (this tutorial): You create your own copy of the repository, work on it, and submit pull requests back to the original
- **Without a fork** (typical team workflow): You work directly on branches in the shared team repository and create pull requests between branches in the same repo

The forking workflow is valuable to learn because:
- It's how you contribute to most open-source projects
- It teaches you about remotes and upstream repositories
- The branching and PR concepts are identical to team workflows

Once you understand this workflow, working without forks is actually simpler - you skip the fork step and just clone the main repository directly!

---

## Prerequisites

Before you begin, make sure you have:
- Git installed on your computer
- A GitHub account
- Basic command line knowledge

---

<br>
<br>

## Part 1: First-Time Repository Setup

> **Note:** You only need to complete Part 1 once. After that, you can jump straight to Part 2 for future contributions.

### Step 1: Fork the Repository

1. Go to the original repository on GitHub: `https://github.com/nldblanch/js-content`
2. Click the **"Fork"** button in the top-right corner
3. This creates a copy of the repository under your GitHub account

**What is a fork?**
A fork is your own copy of someone else's repository. You can make changes to your fork without affecting the original project.

---

### Step 2: Clone Your Fork

Open your terminal and clone **your forked repository** (not the original):

```bash
# Replace YOUR-USERNAME with your actual GitHub username
git clone https://github.com/YOUR-USERNAME/js-content.git
```

Navigate into the cloned directory:

```bash
cd js-content
```

---

### Step 3: Set Up Remote Tracking

Add the original repository as an "upstream" remote so you can sync changes:

```bash
git remote add upstream https://github.com/nldblanch/js-content.git
```

Verify your remotes:

```bash
git remote -v
```
You should see:
- `origin` - your fork
- `upstream` - the original repository

**Why do we need two remotes?**
- `origin` is where you push your work
- `upstream` is where you pull updates from the original project

---

<br>
<br>

## Part 2: The Branch/PR Workflow

> **This is the workflow you'll repeat** every time you want to make changes. Start here if you've already completed Part 1.

### Step 4: Sync with Latest Changes

Before creating a new branch, make sure your main branch is current:

```bash
# Switch to main branch
git checkout main

# Pull the latest changes from YOUR fork
git pull origin main

# Pull the latest changes from the ORIGINAL repo
git pull upstream main
```

---

### Step 5: Create a New Branch

Create and switch to a new branch for your changes:

```bash
# Use a descriptive branch name (replace your-name with your actual name)
git checkout -b add-your-name-to-associates
```

**Branch Naming Tips:**
- Use lowercase and hyphens
- Be descriptive: `add-john-smith`, `fix-typo`, `update-associates`
- Avoid spaces and special characters

---

### Step 6: Make Your Changes

Navigate to the Pull Request Demo folder:

```bash
cd "Pull Request Demo"
```

Open `associates.js` in your code editor and add your information:

```js
const associates = [
    {
      name: "Nathan",
      academy: "February 2025",
      tip: ""
    },
    {
      name: "Your Name",
      academy: "Your Cohort (e.g., March 2025)",
      tip: "Submit a pull request to add your name!"
    }
]
```

**Important:** Make sure to:
- Add a comma after the previous entry
- Keep the JSON formatting valid
- Use proper indentation

---

### Step 7: Stage and Commit Your Changes

Check what files have changed:

```bash
git status
```

Stage your changes:

```bash
git add associates.js
```

Commit your changes with a descriptive message:

```bash
git commit -m "Add [Your Name] to associates list"
```

**Good Commit Messages:**
- "Add John Smith to associates list"
- "Update associates.js with cohort information"
- "Update" (too vague)
- "changes" (not descriptive)

---

### Step 8: Push Your Branch to Your Fork

Push your new branch to **your fork** on GitHub:

```bash
# Push to YOUR fork (origin), not the original repo
git push origin add-your-name-to-associates
```

**Note:** If this is your first push of this branch, Git might prompt you to set up branch tracking:

```bash
git push --set-upstream origin add-your-name-to-associates
# or the shorter version:
git push -u origin add-your-name-to-associates
```

This sets up your local branch to track the remote branch on your fork, making future pushes easier.

---

### Step 9: Create a Pull Request on Your Fork (Merge to Your Main)

Before submitting to the original repository, you'll first merge your changes into your fork's main branch using GitHub:

1. **Go to your fork on GitHub** (`https://github.com/YOUR-USERNAME/js-content`)

2. You should see a yellow banner saying:
   - **"Compare & pull request"** for your recently pushed branch
   - Click **"Compare & pull request"**

3. **Important:** Make sure the pull request is set to merge into **YOUR fork**, not the original repo:
   - **Base repository:** `YOUR-USERNAME/js-content` (your fork)
   - **Base branch:** `main`
   - **Head repository:** `YOUR-USERNAME/js-content` (your fork)
   - **Compare branch:** `add-your-name-to-associates`

4. **Fill in the PR details:**
   - **Title:** "Add [Your Name] to associates list"
   - **Description:** Brief description of your changes

5. Click **"Create pull request"**

6. **Review and Merge:**
   - Review your changes one more time
   - Click **"Merge pull request"**
   - Click **"Confirm merge"**
   - Optionally, delete the branch after merging

Now your changes are in your fork's main branch and you're ready to submit to the original repository!

---

<br>
<br>

## Part 3: Contributing to the Original Repository

> **Complete this part** when you're ready to share your work with the original project owner.

### Step 10: Create a Pull Request to the Original Repository

Now you'll submit your changes to the original repository:

1. **Go to your fork on GitHub** (`https://github.com/YOUR-USERNAME/js-content`)

2. You should see a yellow banner saying:
   - **"Your branch is ahead of nldblanch:main"**
   - Click **"Compare & pull request"**

3. **If you don't see the banner:**
   - Click the **"Pull requests"** tab
   - Click **"New pull request"**
   - Click **"compare across forks"**
   - Set:
     - **Base repository:** `nldblanch/js-content`
     - **Base branch:** `main`
     - **Head repository:** `YOUR-USERNAME/js-content`
     - **Compare branch:** `main` (or your branch name if you didn't merge yet)

4. **Fill in the Pull Request details:**
   - **Title:** "Add [Your Name] to associates list"
   - **Description:** 
     ```
     ## What does this PR do?
     Adds my name to the associates list as part of the Pull Request Demo.
     
     ## Changes made:
     - Add <your name> to associates.js
     ```

5. Click **"Create pull request"**

**Congratulations!** You've successfully contributed to an open-source project!

---

### Step 11: Keeping Your Fork in Sync

After your PR is merged, keep your fork up to date:

```bash
# Switch to main
git checkout main

# Pull changes from the original repo
git pull upstream main

# Push updates to your fork
git push origin main
```

**When to sync your fork:**
- Before starting new work (before Step 4)
- After your PR is merged to the original repository
- Periodically to stay up to date with the project

---

<br>
<br>

## Quick Workflow Summary

### First Time Only (Part 1)
```bash
# 1. Fork on GitHub, then:
git clone https://github.com/YOUR-USERNAME/js-content.git
cd js-content
git remote add upstream https://github.com/nldblanch/js-content.git
```

### Every Time You Work (Part 2)
```bash
# 2. Sync and create branch
git checkout main
git pull origin main
git pull upstream main
git checkout -b descriptive-branch-name

# 3. Make changes, then:
git add .
git commit -m "Descriptive message"
git push origin descriptive-branch-name

# 4. Create PR on GitHub to merge into YOUR fork's main
# 5. Merge on GitHub
# 6. Pull the merged changes
git checkout main
git pull origin main
```

### When Ready to Share (Part 3)
```bash
# 7. Create PR on GitHub from YOUR fork to ORIGINAL repo
# 8. Wait for review and merge
# 9. Sync your fork again
git pull upstream main
git push origin main
```

---

<br>

## What You've Learned

By completing this guide, you now know how to:

- **Fork a repository** - Create your own copy of a project
- **Clone repositories** - Download code to your local machine
- **Manage remotes** - Work with multiple repository connections
- **Create branches** - Isolate your work from the main codebase
- **Stage and commit** - Save your changes with meaningful messages
- **Push to remote** - Share your work on GitHub
- **Create Pull Requests** - Propose changes to projects
- **Merge changes** - Integrate approved work
- **Sync forks** - Keep your copy up to date
- **Contribute to open source** - Share your work with others

These are the fundamental skills used by professional developers every day!

---

<br>
<br>

## Common Issues & Solutions

### Issue: "fatal: refusing to merge unrelated histories"

**Solution:**
```bash
git pull upstream main --allow-unrelated-histories
```

### Issue: Merge conflicts

**Solution:**
1. Open the conflicting file
2. Look for conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
3. Edit the file to resolve conflicts
4. Stage the resolved file: `git add filename`
5. Complete the merge: `git commit`

### Issue: Forgot to create a branch

**Solution:**
```bash
# Create a new branch from current state
git checkout -b new-branch-name

# Your changes will move to the new branch
```

### Issue: Pushed to main by mistake

**Solution:**
```bash
# Create a new branch from main
git checkout -b correct-branch-name

# Reset main to match upstream
git checkout main
git reset --hard upstream/main
git push origin main --force
```

---

<br>

## Git Command Reference

| Command | Description |
|---------|-------------|
| `git clone <url>` | Clone a repository |
| `git checkout -b <branch>` | Create and switch to new branch |
| `git status` | Check status of files |
| `git add <file>` | Stage changes |
| `git commit -m "message"` | Commit staged changes |
| `git push origin <branch>` | Push branch to your fork |
| `git pull upstream main` | Pull changes from original repo |
| `git merge <branch>` | Merge branch into current branch |
| `git branch` | List local branches |
| `git branch -d <branch>` | Delete local branch |

---

<br>

## Best Practices

1. **Always pull before starting work** - Keep your branch up to date
2. **Use descriptive branch names** - Make it clear what you're working on
3. **Commit often** - Small, focused commits are better
4. **Write clear commit messages** - Explain what and why
5. **Test before pushing** - Make sure your changes work
6. **Keep PRs focused** - One feature or fix per PR
7. **Respond to feedback** - Be open to suggestions on your PR

---

<br>

## Need Help?

If you get stuck:
1. Check the error message carefully
2. Use `git status` to see what state you're in
3. Google the error message
4. Ask your instructor or peers
5. Check GitHub's documentation: https://docs.github.com

---

<br>

## Learning Resources

- [GitHub's Pull Request Guide](https://docs.github.com/en/pull-requests)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [Interactive Git Tutorial](https://learngitbranching.js.org/)

---

Happy Contributing!
