# Редизайн в стиле cmogrigorev.ru

Этот документ — короткий лог изменений после редизайна. Полезен, если через пару месяцев нужно будет вспомнить, что и зачем.

## Что изменилось по сравнению со старой версией

### Удалено
- **GraphQL + Apollo** (`src/apollo/`, `src/app/graphql/`) — фича была неоправдана для статичного резюме
- **CommandMenu (Cmd+K)** + зависимости `cmdk`, `vaul`, `@radix-ui/react-dialog` — нет в новом дизайне
- **Docker** (`Dockerfile`, `docker-compose.yaml`) — деплоим через Vercel
- **Print-стили** (`print:*` классы по всему коду) — резюме теперь интерактивное, а PDF лежит отдельно
- **Старые ассеты** `src/images/logos/` — legacy, не использовались
- **Старые компоненты**: `Header.tsx`, `Summary.tsx`, `Highlights.tsx`, `section-skeleton.tsx`, `section-error-boundary.tsx`

### Новые компоненты в `src/app/components/`
- `Nav.tsx` — sticky-навигация с лого, якорными ссылками, переключателем языка и CTA «Связаться». На мобильном — бургер
- `Hero.tsx` — главный экран в две колонки: тэг роли + H1 + описание + чипсы-метрики + кнопки соцсетей слева, фото справа
- `Competencies.tsx` — три карточки с лайм-буллетами
- `WorkExperience.tsx` — таймлайн с лайм-точками слева (раньше были карточки)
- `EducationBlock.tsx` — две карточки в ряд: Образование+Курсы / Языки
- `Skills.tsx` — секция чипсов
- `Projects.tsx` — карточки сайд-проектов в 3 колонки
- `Contact.tsx` — две карточки: контактная info / Позиционирование с тегами
- `Footer.tsx` — копирайт
- `ResumeContent.tsx` — собирает всё вместе в правильном порядке

### Изменено
- **Тема в `globals.css`**: тёмный фон `#0D1117`, лайм-акцент `#C6F432`, увеличен radius до `0.75rem`
- **`tailwind.config.js`**: добавлен `fontFamily.sans` с Inter, шире контейнер (1280px вместо 1400px)
- **Шрифт**: Inter подключается через `@import url('https://fonts.bunny.net/...')` в globals.css. Это устойчивее в любой среде, чем `next/font/google`. Если хочешь вернуть нативный `next/font/google` — он тоже сработает на твоей машине и Vercel: просто верни старый импорт из layout.tsx (см. историю git)
- **`src/lib/types.ts`**: расширен `ResumeData` новыми полями — `role`, `headline`, `languages`, `courses`, `positioning`, `relocation`, `resumePdfUrl`
- **`src/data/resume-data-i18n.tsx`**: переписан под новую структуру. RU — твой актуальный контент. EN — качественный перевод RU (старый legacy-en от Motion/Parabol/Nokia удалён)
- **`src/data/resume-data.tsx`**: теперь просто re-export `RESUME_DATA_I18N.ru` для server-side metadata
- **`LanguageSwitcher`**: компактные пилюли RU/EN вместо одной кнопки

## Структура страницы (порядок секций)

```
Nav (sticky)
  ↓
Hero               (#about)
  ↓
Competencies       (#competencies)
  ↓
WorkExperience     (#experience)
  ↓
EducationBlock     (#education)
  ↓
Skills             (#skills)
  ↓
Projects           (#projects)
  ↓
Contact            (#contact)
  ↓
Footer
```

## Как редактировать контент

Весь твой контент живёт в **одном файле** — `src/data/resume-data-i18n.tsx`.
Две локали: `ru` и `en`. Поменяешь там — сайт обновится автоматически.

Если хочешь добавить новое поле (например, новую секцию):
1. Добавь поле в `ResumeData` (`src/lib/types.ts`)
2. Заполни в обеих локалях `resume-data-i18n.tsx`
3. Используй в компоненте через `useResumeData()`

## Как запустить локально

```bash
pnpm install
pnpm dev
```

Открыть http://localhost:3000

## Деплой

Vercel подхватит автоматически — `next build` проходит, статика генерируется.
