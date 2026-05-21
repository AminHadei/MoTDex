# /add-doc

Source of truth for `/add-doc`. Shims: `.cursor/commands/add-doc.md`, `.claude/commands/add-doc.md`.

Add documentation to **MoTDex** following the `doc-authoring` skill.

1. Read [`.agents/skills/doc-authoring/SKILL.md`](../skills/doc-authoring/SKILL.md).
2. Ask which topic if unclear.
3. Write under `docs/` — one file per topic, terse, MoTDex-specific (Nuxt static site, not noirium library).
4. Add row to doc table in `AGENTS.md`.
5. Add skill pointer if agents need it at task time — don't duplicate prose.

Don't commit unless user asks.
