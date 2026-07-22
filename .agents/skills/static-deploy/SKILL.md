---
name: static-deploy
description: Use when changing GitHub Pages deployment, baseURL, nitro preset, GitHub Actions workflow, static JSON data in public/, or prerender/generate settings. MoTDex is static-only — no Node runtime in production.
---

# Static deploy — MoTDex

## Production target

GitHub Pages project site: `https://aminhadei.github.io/MoTDex/`

## Build

```bash
pnpm run build:pages   # nuxt build --preset github_pages
# output: .output/public/
```

CI (`.github/workflows/deploy.yml`) runs this on push to `main` and uploads `.output/public`.

## baseURL

| Context                | Value                                   |
| ---------------------- | --------------------------------------- |
| Local dev              | `/MoTDex/` (default in nuxt.config)     |
| CI build               | `NUXT_APP_BASE_URL=/MoTDex/`            |
| Custom domain (future) | `/` — update config + workflow together |

Every `public/` file is served at `{baseURL}{filename}` — e.g. `/MoTDex/data/terms.json`.

## Static data pattern

Encyclopedia entries as JSON:

```
public/data/terms.json
public/data/terms/agile.json   # if split later
```

Fetch client-side or prerender:

```ts
// composables/useTerms.ts
const base = useRuntimeConfig().app.baseURL;
const { data } = await useFetch(`${base}data/terms.json`);
```

For build-time inclusion, prefer `import` or `readFile` in a Nuxt plugin only if output stays static — no server runtime on Pages.

## Dev server (macOS)

Nuxt 4.4.7 socket bug → dev script uses `TMPDIR=/tmp`. Don't remove it.

## Don't

- Don't deploy `nuxt build` (node-server preset) to GitHub Pages.
- Don't rely on `server/api/*` in production.
- Don't commit `.output/` or `.nuxt/`.
