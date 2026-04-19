@AGENTS.md

# Match-app — ビジネスマッチングプラットフォーム

## Project Overview
- フリーランス・コンサルタント・経営者をつなぐ事業マッチングサイト
- AIマッチング推薦機能搭載
- 誰でも使える直感的UI

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **DB**: PostgreSQL + Drizzle ORM
- **Auth**: Better Auth v1
- **State**: Zustand
- **Test**: Vitest + Testing Library
- **Validation**: Zod v4

## Conventions

### File Structure
```
src/
  app/          # Next.js App Router pages
  components/   # Shared UI components
  features/     # Feature modules (domain-grouped)
  lib/          # Utilities, config, db
  hooks/        # Custom React hooks
  types/        # Shared TypeScript types
  test/         # Test setup
```

### Coding Rules
- TypeScript strict: no `any`, no `as` casts without justification
- Components: named export, PascalCase filename
- Hooks: `use` prefix, camelCase
- DB queries: Drizzle ORM only (no raw SQL)
- Env validation: Zod schema in `src/lib/config.ts`
- Spacing/sizing: Tailwind utility classes only
- Tests: co-located `*.test.ts(x)` files

### Git
- Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `test:`
- Branch: `feature/`, `fix/`, `chore/` prefix

### Commands
```bash
npm run dev          # Dev server
npm run build        # Production build
npm run typecheck    # TypeScript check
npm test             # Run tests
npm run lint         # ESLint
```
