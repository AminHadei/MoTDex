---
name: pre-commit
description: Use when finishing a MoTDex task or before declaring work complete. Runs build:pages verification and reports pass/fail.
allowed-tools: Bash(pnpm *), Read
---

# Pre-commit verification — MoTDex

Run before declaring a task complete (especially deploy-related work).

## Pipeline

```bash
pnpm run build:pages
```

This builds with the `github_pages` preset — same as CI. Output: `.output/public/`.

## Optional (when added to the project)

```bash
pnpm run lint      # if lint script exists
pnpm run typecheck # if typecheck script exists
```

## Report

List each step: ✅ pass or ❌ fail with the error snippet. Don't commit unless the user asks.

## Don't

- Don't use `vp` or noirium task-runner commands — MoTDex uses plain `pnpm` scripts.
- Don't skip `build:pages` for changes touching `app/`, `nuxt.config.ts`, `public/`, or `.github/workflows/`.
