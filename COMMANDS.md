# Commands Used

This file documents the commands run to create a GitHub repository for this project and push the existing local code to it.

## 1. Check existing git remotes

```bash
git remote -v
```

**Syntax:** `git remote -v`
**Explanation:** Lists all remote repositories currently linked to the local git repo, along with their fetch/push URLs (`-v` = verbose). Returned nothing, confirming no remote was configured yet.

## 2. Check working tree status

```bash
git status
```

**Syntax:** `git status`
**Explanation:** Shows the current branch, and whether there are staged, unstaged, or untracked changes. Confirmed the branch was `main` and the working tree was clean (nothing to commit).

## 3. Check GitHub CLI authentication

```bash
gh auth status
```

**Syntax:** `gh auth status`
**Explanation:** Part of the [GitHub CLI](https://cli.github.com/) (`gh`). Displays which GitHub account(s) the CLI is currently authenticated as, the protocol used for git operations (SSH/HTTPS), and the token's permission scopes. Confirmed we were logged in as `nimapdevyash` with `repo` scope (needed to create repos and push).

## 4. Create the GitHub repo and push the code

```bash
gh repo create color-changer --public --source=. --remote=origin --push
```

**Syntax:** `gh repo create <name> [flags]`
**Explanation:** Creates a new repository on GitHub and wires it up to the local project in one step.

- `color-changer` — name of the new repository.
- `--public` — repo visibility (as opposed to `--private`).
- `--source=.` — use the current directory as the source of the repo (instead of cloning a fresh empty one).
- `--remote=origin` — name to give the new remote in the local git config (`origin` is the conventional default).
- `--push` — after creating the repo and adding the remote, immediately push the current branch to it.

This single command was equivalent to running:

```bash
git remote add origin git@github.com:nimapdevyash/color-changer.git
git push -u origin main
```
