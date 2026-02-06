---
name: format-with-biome
description: Format and fix code using Biome (formatter, organize imports, linter). Use when the user asks to format code, format the entire project, fix formatting, run Biome, or apply project code style; or after making edits that should follow biome.json.
---

# Format Code with Biome

This project uses **Biome** for formatting, import organization, and linting. When formatting or fixing code, use Biome instead of Prettier or other formatters so output matches `biome.json`.

## When to Apply

- User asks to "format" code, "format the project", "format entire project", "fix formatting", or "run Biome"
- After generating or editing code that should match project style
- User mentions "Biome" or "project code style"

## Commands

Use **pnpm** from the **project root**. Default is **entire project** (`.`).

**Entire project (default)** — format, organize imports, and apply safe lint fixes across the whole repo:

```bash
pnpm exec biome check --write .
```

**Entire project, format only** (no lint/imports):

```bash
pnpm exec biome format --write .
```

**Single file or directory** (only when user specifies a path):

```bash
pnpm exec biome check --write src/components/Button.tsx
pnpm exec biome check --write src/
```

## Project Conventions (biome.json)

- Indent: 2 spaces
- Quotes: double (JS/TS)
- Organize imports: on
- Respects .gitignore; excludes node_modules, .next, convex/_generated

## Notes

- Prefer `biome check --write` so format + organize imports + lint fixes run together.
- Run from the project root so `biome.json` is found.
- If formatting fails (e.g. syntax errors), fix errors first or use `biome format --write` which can format with errors when `formatWithErrors` is enabled (currently false in this project).
