# next-app-reduxToolkit-template

Next.js App Router template with Redux Toolkit for state management, styled with Tailwind CSS v4 + Base UI, and React Compiler enabled.

## Tech Stack

- **Framework**: Next.js 16 (App Router), React 19
- **Styling**: Tailwind CSS v4 + Base UI (headless) + shadcn pattern (CVA / clsx / tailwind-merge)
- **Icons**: lucide-react
- **Compiler**: React Compiler (`babel-plugin-react-compiler`)
- **State**: Redux Toolkit v2 (`@reduxjs/toolkit`) + React Redux v9
- **Language**: TypeScript

## Project Structure

- `app/` — App Router entry (`layout.tsx`, `page.tsx`, `globals.css`).
- `app/_components/` — route-specific demo/layout components (App Router private folder).
- `src/` — cross-route shared code: `api/`, `store/` (slices), `config/`, `lib/`, `utils/`, `provider/`, `components/`.
- **Path aliases** (tsconfig): `@api`, `@components`, `@config`, `@lib`, `@store`, `@utils`, `@provider` → `src/*`; `@public` → `public`.

## State Management (Redux Toolkit)

- The store is created by `makeStore` (`src/config/configureStore.ts`) and provided once via `ReduxProvider` (`src/provider/`).
- Slices live in `src/store/*` (e.g. `user`, `post`) — each a `createSlice` default export with named action exports.
- **Always** use the typed hooks from `@utils/useTypeRedux` (`useAppDispatch`, `useAppSelector`, `useAppStore`) — not the untyped `react-redux` hooks.

```tsx
import { useAppDispatch, useAppSelector } from '@utils/useTypeRedux';
import { login } from '@store/user';

const { me } = useAppSelector((state) => state.user);
const dispatch = useAppDispatch();
```

## Commands

```bash
pnpm dev          # Development server
pnpm build        # Production build
pnpm type-check   # TypeScript check (next typegen + tsc)
pnpm lint         # ESLint over the whole project
pnpm format       # Prettier format check over the whole project
```

Package manager is **pnpm**.

## Code Conventions

### React/TypeScript Style

- **Imports**: use named imports (`import { useState } from 'react'`).
- **Components**: use `export default function` declaration (not arrow functions).
- **Children**: use `ReactNode` or `PropsWithChildren` (import directly from `react`).

### Naming

- Components: `PascalCase.tsx`
- Utils/Hooks: `camelCase.ts`
- Types: `PascalCase`
- Constants: `UPPER_SNAKE_CASE`

### Import Order

Auto-sorted by the linter: `react` → external → path aliases (`@store`, `@utils`, …) → relative.

### Comments

- Minimal — add only when the code alone cannot convey intent.
- JSDoc: public APIs and complex functions only.
- Allowed: business-logic "why", workarounds, non-obvious side effects.
- Forbidden: obvious comments, commented-out code.

### Memoization

- **Not needed**: React Compiler is enabled — it auto-optimizes re-renders.
- **Do NOT use** `useCallback`, `useMemo`, or `React.memo` unless genuinely necessary (an expensive computation, or a callback passed to a memoized child that relies on reference equality).
- **ESLint first**: add `useCallback`/`useMemo` when `react-hooks/exhaustive-deps` warns — never suppress it with `eslint-disable`.

## Validation

- **Type check**: run `pnpm type-check` before marking work complete. It runs `next typegen && tsc` — `next typegen` regenerates `next-env.d.ts`, so a fresh clone type-checks cleanly.
- **Lint / format**: `pnpm lint` (`eslint --cache .`) and `pnpm format` (`prettier --check .`) run over the whole project; `lint-staged` runs `eslint --fix` + `prettier --write` on staged files at commit.
- **No full build**: do not run `pnpm build` unless explicitly requested.

## Notes

- React Strict Mode: enabled.
- Deployment: Vercel.

<!-- BEGIN:nextjs-agent-rules -->

## Next.js framework rules

This project uses Next.js. When answering questions about Next.js APIs, routing, rendering, or configuration, consult the documentation bundled with the **installed** version at `node_modules/next/dist/docs/` rather than external sources that may target a different Next.js version:

- `01-app` — App Router
- `02-pages` — Pages Router
- `03-architecture` — architecture and internals
- `04-community` — contribution and community guidance

Always match guidance to the installed Next.js version.

<!-- END:nextjs-agent-rules -->

<!-- AGENTS.local.md is a gitignored local override, absent on a fresh clone (the import then resolves to nothing). -->

@./AGENTS.local.md
