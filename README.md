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

## Package Version

Important library version history

| Name             | Version |
| :--------------- | :------ |
| react            | 19.2.7  |
| next             | 16.2.7  |
| tailwindcss      | v4      |
| @base-ui/react   | v1      |
| @reduxjs/toolkit | v2      |
