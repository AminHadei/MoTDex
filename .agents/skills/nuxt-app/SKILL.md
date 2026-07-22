---
name: nuxt-app
description: Use when editing app/pages, app/components, app/composables, app/layouts, or nuxt.config.ts in MoTDex. Covers Nuxt 4 + Vue 3 conventions — directory layout, TypeScript, components, composables, styling, and baseURL-safe asset paths.
---

# Nuxt app conventions — MoTDex

## Layout

```
app/
  app.vue          # root shell — keep minimal
  pages/           # file-based routes
  components/      # auto-imported (PascalCase filenames)
  composables/     # auto-imported (use* prefix)
  layouts/         # optional layouts
nuxt.config.ts
public/            # static assets (served at baseURL root)
```

## Vue / TypeScript

- `<script setup lang="ts">` for all SFCs.
- Typed props: `defineProps<{ ... }>()` or `withDefaults(defineProps<...>(), {})`.
- Prefer `const` + inference; explicit return types on exported composables.
- No `any`. Use `unknown` at boundaries, then narrow.
- Named exports in composables/utils; default export only for pages if needed.

## Components

- One component per file; filename matches component name (`AppLogo.vue` → `AppLogo`).
- Use `useRuntimeConfig().app.baseURL` when building paths to `public/` assets:

```vue
const base = useRuntimeConfig().app.baseURL // :src="`${base}logo-icon.png`"
```

- Scoped CSS by default. Use logical properties where RTL matters (`margin-inline`, `padding-inline`).

## Pages

- `app/pages/index.vue` → `/` (with baseURL: `/MoTDex/`).
- Nested routes via folders: `app/pages/terms/[slug].vue`.
- Use `useSeoMeta()` or `useHead()` for page-specific meta; global defaults live in `nuxt.config.ts`.

## Config

- `app.baseURL`: `/MoTDex/` locally and in CI (`NUXT_APP_BASE_URL` in deploy workflow).
- `nitro.preset`: only set via env / CLI for GitHub Pages builds — not hardcoded in dev config.
- Keep `compatibilityDate` current when upgrading Nuxt.

## Don't

- Don't add `server/` routes for data that can live in `public/*.json`.
- Don't import from deep paths outside `app/` unless aliased in config.
- Don't hardcode `localhost:3000` or root `/` asset paths — always account for `baseURL`.
