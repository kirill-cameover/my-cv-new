# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal CV / resume web application — Next.js 14 + React 18 + TypeScript + Tailwind CSS. Design inspired by cmogrigorev.ru — dark theme, lime accent (#C6F432), single-page with sticky nav and anchor links.

## Commands

```bash
pnpm dev          # Dev server on http://localhost:3000
pnpm build        # Production build
pnpm start        # Run production build
pnpm lint / lint:fix / format / format:fix / check / check:fix
```

## Architecture

### Single source of truth
Resume content lives in `src/data/resume-data-i18n.tsx` — keyed by locale (`ru` / `en`). Typed in `src/lib/types.ts`.
`src/data/resume-data.tsx` is a thin re-export of the Russian version for server-side metadata.

### Sections (in `src/app/components/`)
`Nav` (sticky) → `Hero` → `Competencies` → `WorkExperience` (timeline) → `EducationBlock` → `Skills` → `Projects` → `Contact` → `Footer`.
`ResumeContent.tsx` assembles them in order.

### i18n
- `src/i18n/LanguageProvider.tsx` — context, persists choice in `localStorage`
- `src/i18n/translations.ts` — UI labels
- `src/data/useResumeData.ts` — returns localised `ResumeData`
- `src/components/LanguageSwitcher.tsx` — RU/EN toggle

### Theme
- `src/app/globals.css` — CSS variables, Inter from bunny.net via `@import`
- `tailwind.config.js` — maps variables to Tailwind tokens

## When editing

- New field on resume? → add to `ResumeData` (`src/lib/types.ts`), fill both locales in `resume-data-i18n.tsx`, consume via `useResumeData()`
- New section? → create the component, register in `ResumeContent.tsx`, add anchor id + matching nav link in `Nav.tsx`
- Colors / radius? → edit CSS variables in `globals.css`
