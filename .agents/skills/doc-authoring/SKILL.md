---
name: doc-authoring
description: Use when writing docs/ for MoTDex, adding ADRs, or codifying conventions. Single source of truth, terse current-reality docs.
---

# Doc authoring — MoTDex

## Principles

1. **One source of truth** — normative rules in one file; skills/commands pointer-link, don't duplicate.
2. **Current reality only** — no backstory.
3. **Terse** — tables and bullets over prose.
4. **Audience split** — encyclopedia content (Persian) vs developer handbook (English unless team chooses otherwise).

## Structure (when `docs/` exists)

```
docs/
  index.md
  getting-started.md    # install, dev, build:pages, deploy
  architecture.md         # static Nuxt, data model, routing
  conventions.md          # or pointer to nuxt-app skill
  decisions/              # ADRs
```

## ADRs

`docs/decisions/NNNN-short-title.md` — Context, Decision, Consequences.

## After adding a doc

- Add a row to the doc table in `AGENTS.md`.
- Create/update a skill pointer if agents must follow it at task time.

## Don't

- Document noirium/library patterns (web components, ApiService, feature barrels under `src/features/`).
- Reference VitePress sidebar until a docs site is configured for MoTDex.
- Duplicate rules already in `AGENTS.md` or `nuxt-app` / `static-deploy` skills.
