---
name: changesets
description: Use when MoTDex needs a versioned release, editing .changeset/, or advising on bump types. MoTDex is not an npm package yet — changesets apply when publishing releases is set up.
---

# Changesets — MoTDex

MoTDex is currently a **private static site** (`package.json`: `"private": true`). The `.changeset/` folder is prepared for future release tracking.

## When to add a changeset

Add a `.changeset/*.md` when a change is **user-visible** and you are preparing a tagged release:

- New encyclopedia entries or data schema changes surfaced to users
- Breaking URL/routing changes
- Major UI overhauls

Skip for: internal refactors, agent/docs-only edits, CI tweaks.

## Bump types

| Type    | Example                                |
| ------- | -------------------------------------- |
| `patch` | Typo fix, favicon update               |
| `minor` | New term category page, search feature |
| `major` | Breaking data format or URL structure  |

## Rules

- Never hand-edit `package.json` version for releases — use changesets when release flow is active.
- Never run `changeset version` locally unless maintaining the release process.
- Commit `.changeset/*.md` alongside the code change.

When `docs/content/changesets.md` exists, it becomes the detailed guide.
