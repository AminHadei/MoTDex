# AGENTS.md — MoTDex

Orientation for AI agents on **MoTDex** — an open-source Persian knowledge & terminology index for Management of Technology. Static Nuxt 4 site on GitHub Pages.

Claude Code: `CLAUDE.md` → `@AGENTS.md`. Cursor / Codex / others: read this file directly.

## Project snapshot

| Item | Value |
| ---- | ----- |
| Stack | Nuxt 4, Vue 3, Vite, TypeScript |
| Deploy | GitHub Pages — **static only** (`pnpm run build:pages`) |
| `baseURL` | `/MoTDex/` |
| App dir | `app/` (pages, components, composables, layouts) |
| Static assets | `public/` (favicons, JSON data, images) |
| Dev | `pnpm run dev` — uses `TMPDIR=/tmp` (macOS Nuxt 4.4.7 socket fix) |

**Hard constraint:** GitHub Pages has no Node runtime. Put static JSON in `public/`. Prerender pages at build time; do not rely on `server/api/*` in production.

## Skills (load on demand)

Canonical: [`.agents/skills/`](./.agents/skills/). Cursor: [`.cursor/rules/`](./.cursor/rules/). Claude: [`.claude/skills/`](./.claude/skills/).

| Skill | When |
| ----- | ---- |
| `nuxt-app` | Editing `app/**`, `nuxt.config.ts`, Vue/TS |
| `static-deploy` | Deploy, `baseURL`, CI, static JSON |
| `code-conventions` | Pointer to `nuxt-app` + `static-deploy` |
| `git-conventions` | Commits, branch naming |
| `changesets` | Version/changelog (when publishing releases) |
| `pre-commit` | Verification before declaring work done |
| `code-review` | PR / branch review |
| `doc-authoring` | Writing in `docs/` |

Docs handbook (`docs/`) is not set up yet — skills are the source of truth until then.

## Agent rules

1. **Never `--no-verify`.** Fix hook failures at the root cause.
2. **Never commit without user confirmation.**
3. **Reversible local work** — proceed. **Destructive/remote** — confirm first.
4. **Simplicity & surgical scope.** Minimum diff; match existing style.
5. **Verify deploy work:** `pnpm run build:pages` must pass.

## Code review

[`REVIEW.md`](./REVIEW.md) — severity calibration via `code-review` skill.

## Canonical examples

- `app/pages/index.vue`
- `app/components/AppLogo.vue`
- `nuxt.config.ts`
- `.github/workflows/deploy.yml`
