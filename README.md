# Kirill Cholak — CV

Персональное резюме на Next.js 14 + Tailwind. Дизайн вдохновлён [cmogrigorev.ru](https://www.cmogrigorev.ru/).

## Стек

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui (Radix primitives)
- i18n: ru / en (домашний хук без зависимостей)
- Inter via `@import` (bunny.net mirror) — устойчиво к окружению
- Vercel-ready

## Фичи

- Адаптивная вёрстка (desktop / tablet / mobile)
- Тёмная тема, лайм-акцент
- Переключатель языка с сохранением в `localStorage`
- Sticky-навигация с якорями и мобильным меню
- Таймлайн опыта работы
- JSON-LD structured data для SEO

## Запуск

```bash
pnpm install
pnpm dev
```

Открыть `http://localhost:3000`.

## Контент

Весь контент резюме — в одном файле: [`src/data/resume-data-i18n.tsx`](src/data/resume-data-i18n.tsx).
Структура типизирована через [`src/lib/types.ts`](src/lib/types.ts).

## Деплой

Залить на Vercel — `next build` проходит без настройки.

## Подробности о редизайне

См. [MIGRATION.md](./MIGRATION.md) — что было удалено, добавлено и почему.
