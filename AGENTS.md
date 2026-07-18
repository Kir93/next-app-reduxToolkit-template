# next-app-reduxToolkit-template — agent guide

Canonical conventions live in [CLAUDE.md](./CLAUDE.md) — read it first.

Key rules:

- **React Compiler is enabled** — do NOT hand-write `useCallback` / `useMemo` / `React.memo`.
- Package manager is **pnpm**.
- State via Redux Toolkit: use the typed hooks from `@utils/useTypeRedux`, slices under `src/store/*`.

<!-- AGENTS.local.md is a gitignored local override, absent on a fresh clone (the import then resolves to nothing). -->

@./AGENTS.local.md
