---
name: git-conventions
description: Use when composing a commit message or advising on git workflow for MoTDex. Conventional Commits, MoTDex scopes, no AI attribution.
---

# Git conventions — MoTDex

## Commit format

```
<type>(<scope>): <subject>
```

- **Subject:** imperative, lowercase, no period, ≤72 chars, English.
- **No body** unless user explicitly asks.
- **No trailers:** no `Co-Authored-By`, no `Generated with …`.

## Types

| Type | Use |
| ---- | --- |
| `feat` | New page, component, term data, feature |
| `fix` | Bug fix |
| `docs` | Documentation, agent skills |
| `style` | Formatting only |
| `refactor` | Restructure, no behaviour change |
| `chore` | Deps, CI, tooling |
| `build` | Build/deploy config |

## Scopes (examples)

`app`, `config`, `deploy`, `data`, `agents`, `public`, `docs`

## Branches

`feat/<short-desc>`, `fix/<short-desc>`, `chore/<short-desc>`

## Rules

- Never commit unless user asks.
- Never `--no-verify`, `--force`, or amend pushed commits without explicit approval.

When Husky/commitlint is added, follow whatever hooks enforce — don't bypass.
