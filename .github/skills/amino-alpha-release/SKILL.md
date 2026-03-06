---
name: amino-alpha-release
description: "Commit and publish an alpha prerelease of the @zonos/amino package. USE FOR: bump amino alpha version, release amino alpha, publish amino alpha, commit and push amino changes, amino version:prealpha, tag amino release. Ensures working tree is clean, uses only the version:prealpha script (which builds before tagging), and pushes the branch with tags. DO NOT USE FOR: major/minor/patch releases (use version:major, version:minor, version:patch scripts directly), or releasing other packages."
---

# Amino Alpha Release Workflow

## What This Skill Produces
A committed, tagged, and pushed `@zonos/amino` alpha prerelease (`6.x.x-alpha.N`) on the current branch, built via the `version:prealpha` package.json script.

## Critical Rule
**Always use `pnpm version:prealpha`** — never manually edit `package.json` or run `npm version` directly. The script runs `pnpm build` before tagging to ensure the published package matches the source.

## Steps

### 1. Verify current state
```bash
git status --short
grep '"version"' package.json | head -1
```

### 2. Commit any pending changes first
`pnpm version:prealpha` aborts on a dirty working tree. Stage and commit all changes before running it:

```bash
git add -A
git commit -m "fix: <describe the changes>"
```

Commit message conventions:
- `fix:` — bug fixes
- `feat:` — new features
- `chore:` — maintenance (gitignore, deps, etc.)
- Include a concise body listing each change if there are multiple

### 3. Run the release script
```bash
pnpm version:prealpha
```

This script:
1. Runs `pnpm build` (full production build)
2. Bumps `package.json` version to the next `alpha.N`
3. Creates a git commit: `Bump version 6.x.x-alpha.N`
4. Creates a git tag: `v6.x.x-alpha.N`
5. Pushes the branch + tag via `push:tags`

### 4. Verify success
```bash
git log --oneline -3
git tag -l "v6.0.0-alpha*" | sort -V | tail -5
grep '"version"' package.json | head -1
```

Expect:
- HEAD commit: `Bump version 6.x.x-alpha.N`
- New tag: `v6.x.x-alpha.N` on HEAD
- `package.json` version matches the new tag

## Common Failure: Dirty Working Tree
If `pnpm version` exits with an error about uncommitted changes, complete Step 2 first.

## After Release: Update fe-6-account-web
Once a new alpha is published, update the dependency in `fe-6-account-web`:
```bash
cd ../fe-6-account-web
pnpm update @zonos/amino
```
