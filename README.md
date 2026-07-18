# Next App Redux-Toolkit Template

## Quick Start

```zsh
https://github.com/Kir93/next-app-reduxToolkit-template.git use this template and make project
git clone https://github.com/Kir93/{PROJECT_NAME}.git
```

1. Install packages - pnpm install
2. Change brand colors - ./app/globals.css (`@theme` primary/secondary tokens)
3. Running Project - pnpm dev

---

## Repository short explanation

NextJS App Route Simple Template

- FrameWork : next (React Compiler enabled)
- Styling Tool: Tailwind CSS v4 + Base UI (headless) + shadcn pattern (`cn`)
- Icons : lucide-react
- Global/Server State Management : @reduxjs/toolkit

Route-specific demo/layout components are co-located under `app/_components/` (App Router private folder). Cross-route shared code stays under `src/` (`api`, `store`, `config`, `utils`, `lib`, `components/common`, `provider`).

## Usage Patterns

### `cn` — class merging

`src/lib/utils.ts` exports `cn` (`clsx` + `tailwind-merge`) to compose conditional Tailwind classes without conflicts.

```tsx
import { cn } from '@lib/utils';

<div className={cn('p-4', isActive && 'bg-primary-900', className)} />;
```

### Button — CVA variants

`src/components/ui/Button.tsx` wraps the headless Base UI `Button` with `class-variance-authority`. Use the `Button` component, or `buttonVariants(...)` to style any element (links, dialog triggers).

```tsx
import Button, { buttonVariants } from '@components/ui/Button';

<Button variant="primary" size="md">
  Save
</Button>; // primary | secondary | outline, sm | md
<a className={buttonVariants({ variant: 'outline' })}>Link as button</a>;
```

### Base UI (headless) components

Imported per-component for tree-shaking (`@base-ui/react/<part>`). See demos under `app/_components/`:

- `DialogSection.tsx` — `Dialog.Root/Trigger/Portal/Backdrop/Popup/Title/Description/Close` + a `lucide-react` icon.
- `InputSection.tsx` — `Field.Root/Label/Control/Description` + `Input`.

### State management (RTK)

`makeStore` (`src/config/configureStore.ts`) is provided once via `ReduxProvider`. Use the typed hooks from `@utils/useTypeRedux`.

```tsx
import { useAppDispatch, useAppSelector } from '@utils/useTypeRedux';
import { login, logout } from '@store/user';

const { me } = useAppSelector((state) => state.user);
const dispatch = useAppDispatch();
```

See `app/_components/ReducerButtonSection.tsx` for the login/logout demo.

## Package Version

Important library version history

| Name             | Version |
| :--------------- | :------ |
| react            | 19.2.7  |
| next             | 16.2.7  |
| tailwindcss      | v4      |
| @base-ui/react   | v1      |
| @reduxjs/toolkit | v2      |

## AI-ready

This template ships with AI coding-assistant instructions, so tools like Claude Code, Cursor, Codex, and Copilot follow its conventions out of the box:

- [`CLAUDE.md`](./CLAUDE.md) — canonical conventions (tech stack, folder layout, code style, Redux Toolkit typed-hooks pattern, and the React Compiler "no manual memoization" rule).
- [`AGENTS.md`](./AGENTS.md) — vendor-neutral pointer to `CLAUDE.md` with a 3-line summary for tools that read `AGENTS.md`.

After creating your project, edit `CLAUDE.md` to match your stack. Personal or machine-local overrides can live in a gitignored `CLAUDE.local.md`, which Claude Code merges automatically.
