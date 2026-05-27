# N7 — Landing Page

Pixel-faithful, fully responsive rebuild of the N7 / CB7 Figma design.

**Stack:** React 18 · Vite 6 · TypeScript · Tailwind CSS 4 · React Router

## Prerequisites

- Node.js 18+ (see `.nvmrc` — Node 22 recommended)
- [pnpm](https://pnpm.io/installation) 10+

```bash
npm i -g pnpm   # if needed
```

## Quick start

```bash
pnpm install
pnpm dev        # http://localhost:5173
```

## Scripts

| Command             | Description                                    |
| ------------------- | ---------------------------------------------- |
| `pnpm dev`          | Start Vite dev server                          |
| `pnpm build`        | Production build → `dist/`                     |
| `pnpm preview`      | Serve production build locally                 |
| `pnpm typecheck`    | TypeScript check (no emit)                     |
| `pnpm lint`         | ESLint                                         |
| `pnpm lint:fix`     | ESLint with auto-fix                           |
| `pnpm format`       | Prettier write                                 |
| `pnpm format:check` | Prettier check (CI)                            |
| `pnpm test`         | Run Vitest unit tests                          |
| `pnpm validate`     | typecheck + lint + format check + test + build |

## Project structure

```
src/
  app/              # App shell & routing
  routes/           # Page-level route components
  components/ui/    # Shared buttons, images, icons (semantic HTML)
  sections/         # Landing page sections
  sections/hero/    # Hero split into intro, portrait, widgets
  sections/shared/   # Re-exports from components/ui (compat)
  assets/           # SVG paths, masks
  styles/           # Global CSS, theme tokens, fonts
  test/             # Vitest setup
public/             # Static images
```

## Design tokens

Brand colors, typography, and breakpoints live in `src/styles/theme.css` (Tailwind `@theme`).

- Desktop layout breakpoint: `dt:` (1440px)
- Fonts: Archivo (sans), Chivo Mono (labels/CTAs)

## Deploy (Vercel)

1. Connect the GitHub repo
2. Framework preset: **Vite**
3. Build command: `pnpm build`
4. Output directory: `dist`
5. Install command: `pnpm install`

Use Node 18+ in project settings. pnpm is auto-detected from `pnpm-lock.yaml`.

## CI

GitHub Actions runs on push/PR to `main`:

- Typecheck
- Lint
- Prettier check
- Production build

See `.github/workflows/ci.yml`.

## Editor setup

Recommended VS Code extensions are listed in `.vscode/extensions.json` (ESLint, Prettier, Tailwind).

## pnpm notes

If install warns about ignored build scripts, run:

```bash
pnpm approve-builds
```

Select `@tailwindcss/oxide` and `esbuild`, then `pnpm install` again.
