# Review instructions

Injected verbatim into every Code Review agent. Project conventions live in `AGENTS.md` — violations default to Nit. This file recalibrates severity and scope for MoTDex.

## What Important means here

MoTDex is a **static Nuxt 4 site** deployed to GitHub Pages. Reserve Important for findings that would break production deploy, break routing under `/MoTDex/`, or ship broken static assets.

**Always Important:**

- **Broken `baseURL` or asset paths.** Links, `useRuntimeConfig().app.baseURL`, and `public/` references must work under `/MoTDex/` on GitHub Pages.
- **Nuxt server routes used for runtime API.** GitHub Pages has no Node runtime — static JSON belongs in `public/` or must be prerendered.
- **`any` or unchecked `as SomeType`** in new TypeScript without justification.
- **Hardcoded secrets or env values** committed to the repo.

## Always check

- `pnpm run build:pages` succeeds for deploy-related changes.
- New pages/components follow existing patterns in `app/`.
- Favicon/logo assets stay consistent across `public/` and `nuxt.config.ts` head links.
- RTL/Persian copy uses proper `lang="fa"` and `dir="rtl"` in app head config.

## Cap the nits

Report at most **6 Nits** per review. If everything found is Nit, lead with "No blocking issues."

## Do not report

- Generated output: `.output/`, `.nuxt/`, `node_modules/`, `dist/`.
- Formatting nits CI will eventually enforce (when lint/format hooks are added).

## Summary shape

Open with `N important, M nits` (or `No blocking issues`). Then 1–3 sentences on PR intent, then findings.
