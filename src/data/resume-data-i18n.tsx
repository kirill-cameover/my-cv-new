import type { Locale } from "@/i18n/types";
import type { ResumeData } from "@/lib/types";

export const RESUME_DATA_I18N: Record<Locale, ResumeData> = {
  ru: {
    name: "Кирилл Чолак",
    initials: "КЧ",
    location: "Санкт-Петербург, UTC+3",
    locationLink: "https://www.google.com/maps/place/Saint-Petersburg",
    about: "BizDev · Sales · YouTube Production",
    role: "BIZDEV • SALES • YOUTUBE PRODUCTION",
    headline: "Продажи, партнёрства и YouTube-продакшн",
    highlights: [
      "6+ лет опыта",
      "Выручка 3M$ в год",
      "+500 встреч",
      "80+ партнёрств",
      "Россия + СНГ",
    ],
    summary: (
      <>
        <p>
          <b>Формирую команды и продажи. Делаю YouTube-проекты прибыльными.</b>
        </p>
        <p>
          Закрываю sponsorship-сделки, строю долгосрочные партнёрства, запускаю шоу под рекламодателей. Активный нетворкинг на отраслевых ивентах (Blockchain Life, TradeID, 0xConnect, Crypto Summit). Рабочие контакты с Tier-1 проектами и развитая сеть KOL и агентств.
        </p>
        <p>
          Глубокая экспертиза в YouTube-продвижении и монетизации. BizDev-зона — бенчмаркинг, анализ рынка, маркетинговые материалы. Продажи и переговоры (500+ встреч), risk-оценка, документооборот, фин-модели сотрудничества.
        </p>
      </>
    ),
    avatarUrl:
      "https://avatars.githubusercontent.com/u/98087190?s=400&u=0fd5cc113146cf9090cabbd21952ac6c64d8df7d&v=4",
    personalWebsiteUrl: "https://kirill-cameover.github.io/blog/",
    contact: {
      email: "kiril.ciolac@gmail.com",
      tel: "+79500031429",
      social: [
        {
          name: "Telegram",
          url: "https://t.me/kirillciolac",
          icon: "telegram",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/kirill-ciolac-a356521bb/",
          icon: "linkedin",
        },
        {
          name: "GitHub",
          url: "https://github.com/kirill-cameover",
          icon: "github",
        },
      ],
    },
    competencies: [
      {
        title: "Управление и рост",
        items: [
          "Go-to-Market с учётом регуляторики и медиа-ландшафта",
          "Построение и управление отделом продаж",
          "Партнёрский маркетинг: CPA / RevShare / Hybrid",
          "Audience growth и монетизация YouTube",
        ],
      },
      {
        title: "Продажи и партнёрства",
        items: [
          "Продажа медиа-продуктов и рекламных интеграций",
          "B2B-переговоры и закрытие high-ticket сделок",
          "Разработка коммерческих предложений",
          "Выстраивание долгосрочных партнёрств",
          "Нетворкинг и мероприятия",
          "Монетизация сообществ",
        ],
      },
      {
        title: "Media и Production",
        items: [
          "Продюсирование YouTube-подкастов и шоу",
          "Организация съёмок и производства контента",
          "Content-Ops: продакшн креативов, локализация, ToV",
          "Управление командой продакшна",
        ],
      },
    ],
    work: [
      {
        company: "Хедлайнеры",
        link: "https://www.youtube.com/@AnufrievNikita",
        badges: ["B2B продажи", "КП", "Фин. модели", "Аналитика", "Figma", "Конференции"],
        title: "BizDev, Sales Manager",
        start: "2024",
        end: null,
        description: (
          <>
            <p>Руководство продажами и привлечение крупных клиентов на маркетинговое сопровождение.</p>
            <ul>
              <li>Сопровождение B2B клиентов на всех этапах сделки: от предложения до закрытия. Увеличение выручки на 25%.</li>
              <li>Разработал MediaKit. Заключил более 50 партнёрств. Работа с онлайн-каналами и офлайн-мероприятиями. Участие в конференциях.</li>
              <li>Внедрение мониторинга результатов для клиентов и улучшения процессов.</li>
              <li>Аналитика и метрики оценки эффективности продаж. Внедрение CRM-системы. Сокращение цикла сделки на 30%.</li>
              <li>Разработка презентаций и проведение 300+ встреч с клиентами.</li>
              <li>Развил сеть контактов с Tier-1 проектами в Web3-индустрии.</li>
            </ul>
          </>
        ),
      },
      {
        company: "Kedem.md",
        link: "https://kedem.md",
        badges: ["Управление командой", "Продажи", "Масштабирование"],
        title: "Руководитель коммерческого отдела",
        start: "2024",
        end: "2024",
        description: (
          <>
            <p>Руководство коммерческим отделом Еврейского культурного центра. Создание и организация обучающих групп для детей и взрослых.</p>
            <ul>
              <li>Создание 8 детских образовательных групп: английский, шахматы, танцы и др.</li>
              <li>Создал процесс онбординга преподавателей и оцифровал систему учёта и бонусов.</li>
              <li>Внедрение системы продаж через онлайн и офлайн каналы. Рост прибыли на 60% за 6 месяцев.</li>
              <li>Организация более 5 коммерческих мероприятий для взрослых.</li>
            </ul>
          </>
        ),
      },
      {
        company: "Tuk.md",
        link: "https://tuk.md",
        badges: ["Подкастинг", "Продюсирование", "Защита проекта", "DaVinci Resolve", "Гранты"],
        title: "Продюсер YouTube-шоу",
        start: "2024",
        end: "2024",
        description: (
          <>
            <p>Проект на 6 месяцев по продюсированию YouTube-шоу по медиаграмотности.</p>
            <ul>
              <li>Написал проект и выиграл финансирование на создание шоу — $30 000.</li>
              <li>Внедрил автоматизацию PR (короткие видео) и рабочих процессов.</li>
              <li>Выпустил 16 серий на YouTube. Прошёл курсы по видеомонтажу и подкастингу, выпустил 3 личных серии.</li>
            </ul>
          </>
        ),
      },
      {
        company: "Магазин кальянов",
        link: "",
        badges: ["Фин. модель", "Продажи", "Сеть партнёрств", "1С", "МойСклад"],
        title: "Co-founder, управляющий магазина",
        start: "2021",
        end: "2023",
        description: (
          <>
            <p>Открыл небольшой бизнес — офлайн и онлайн-магазин кальянов и табака. Общая выручка более 1,2 млн руб.</p>
            <ul>
              <li>Настройка и ведение товароучётных систем — подключение ЭДО и «Честный знак», контроль кассовой дисциплины.</li>
              <li>Офлайн-продажи, обучение сотрудников. Руководство командой.</li>
              <li>Разработка стратегии продвижения в Instagram и Telegram.</li>
              <li>Управление онлайн-магазином на маркетплейсах — дизайн карточек товаров, исследование рынка, отчёты, ABC и XYZ-анализ, визуализация данных.</li>
            </ul>
          </>
        ),
      },
    ],
    education: [
      {
        school: "Высшая школа экономики, Санкт-Петербург",
        degree: "Бакалавр, Социология и Социальная информатика",
        start: "2019",
        end: "2023",
      },
    ],
    languages: [
      { name: "Русский", level: "родной" },
      { name: "Английский", level: "B2 (Upper-Intermediate)" },
    ],
    courses: [
      "Курсы по видеомонтажу (DaVinci Resolve)",
      "Курсы по подкастингу и продюсированию",
      "ISO стандарт — бизнес-процессы",
    ],
    skills: [
      "Python",
      "Figma",
      "Trello",
      "Jira",
      "HubSpot",
      "Tableau",
      "Excel & Google Sheets (продвинутый)",
      "Качественные и количественные исследования",
      "Аналитика и метрики",
      "Коммуникация",
      "Бизнес-процессы (ISO)",
    ],
    projects: [
      {
        title: "Monito",
        techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
        description:
          "Browser-расширение для дебага веб-приложений: скриншоты, запись экрана, генерация E2E-тестов и баг-репортов.",
        link: {
          label: "monito.dev",
          href: "https://monito.dev/",
        },
      },
      {
        title: "Consultly",
        techStack: ["TypeScript", "Next.js", "GraphQL", "WebRTC", "Tailwind"],
        description:
          "Платформа для онлайн-консультаций с видео-встречами в реальном времени и расписанием.",
        link: {
          label: "consultly.com",
          href: "https://consultly.com/",
        },
      },
      {
        title: "Minimalist CV",
        techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
        description:
          "Open-source минималистичный шаблон резюме с фокусом на читаемости. 9k+ звёзд на GitHub.",
        link: {
          label: "Minimalist CV",
          href: "https://github.com/BartoszJarocki/cv",
        },
      },
    ],
    relocation: "Готов к релокации",
    positioning: {
      text: "Продажи как продукт: системные процессы, прозрачные метрики, быстрые итерации. Силён в нетворкинге и конвертации стратегии в деньги.",
      tags: ["BizDev", "Sales", "Partnerships", "YouTube", "Web3", "Networking"],
    },
  },

  en: {
    name: "Kirill Cholak",
    initials: "KC",
    location: "Saint Petersburg, UTC+3",
    locationLink: "https://www.google.com/maps/place/Saint-Petersburg",
    about: "BizDev · Sales · YouTube Production",
    role: "BIZDEV • SALES • YOUTUBE PRODUCTION",
    headline: "Sales, partnerships and YouTube production",
    highlights: [
      "6+ years experience",
      "$3M annual revenue",
      "500+ meetings",
      "80+ partnerships",
      "Russia + CIS",
    ],
    summary: (
      <>
        <p>
          <b>Build sales teams. Turn YouTube projects profitable.</b>
        </p>
        <p>
          I close sponsorship deals, build long-term partnerships and launch shows around advertisers. Active networking at industry events (Blockchain Life, TradeID, 0xConnect, Crypto Summit). Working contacts with Tier-1 projects and a developed network of KOLs and agencies.
        </p>
        <p>
          Deep expertise in YouTube growth and monetisation. BizDev — benchmarking, market analysis, marketing materials. Sales and negotiation (500+ meetings), risk assessment, paperwork, cooperation financial models.
        </p>
      </>
    ),
    avatarUrl:
      "https://avatars.githubusercontent.com/u/98087190?s=400&u=0fd5cc113146cf9090cabbd21952ac6c64d8df7d&v=4",
    personalWebsiteUrl: "https://kirill-cameover.github.io/blog/",
    contact: {
      email: "kiril.ciolac@gmail.com",
      tel: "+79500031429",
      social: [
        {
          name: "Telegram",
          url: "https://t.me/kirillciolac",
          icon: "telegram",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/kirill-ciolac-a356521bb/",
          icon: "linkedin",
        },
        {
          name: "GitHub",
          url: "https://github.com/kirill-cameover",
          icon: "github",
        },
      ],
    },
    competencies: [
      {
        title: "Management & Growth",
        items: [
          "Go-to-Market accounting for regulation and media landscape",
          "Building and managing sales teams",
          "Partner marketing: CPA / RevShare / Hybrid",
          "Audience growth and YouTube monetisation",
        ],
      },
      {
        title: "Sales & Partnerships",
        items: [
          "Selling media products and ad integrations",
          "B2B negotiations and closing high-ticket deals",
          "Crafting commercial proposals",
          "Long-term partnerships",
          "Networking and events",
          "Community monetisation",
        ],
      },
      {
        title: "Media & Production",
        items: [
          "Producing YouTube podcasts and shows",
          "Shoot planning and content production",
          "Content-Ops: creative production, localisation, ToV",
          "Production team management",
        ],
      },
    ],
    work: [
      {
        company: "Headliners",
        link: "https://www.youtube.com/@AnufrievNikita",
        badges: ["B2B Sales", "Proposals", "Financial Models", "Analytics", "Figma", "Conferences"],
        title: "BizDev, Sales Manager",
        start: "2024",
        end: null,
        description: (
          <>
            <p>Leading sales and acquiring large clients for marketing support.</p>
            <ul>
              <li>Owning B2B clients across the full sales cycle: from proposal to close. Revenue up 25%.</li>
              <li>Built the MediaKit. Closed 50+ partnerships. Online channels and offline events. Conferences.</li>
              <li>Introduced results monitoring for clients and process improvements.</li>
              <li>Sales analytics and metrics. Implemented CRM. Cut deal cycle by 30%.</li>
              <li>Prepared decks and ran 300+ client meetings.</li>
              <li>Grew the network of Tier-1 contacts in the Web3 industry.</li>
            </ul>
          </>
        ),
      },
      {
        company: "Kedem.md",
        link: "https://kedem.md",
        badges: ["Team Management", "Sales", "Scaling"],
        title: "Head of Commercial",
        start: "2024",
        end: "2024",
        description: (
          <>
            <p>Led the commercial department of a Jewish cultural centre. Built and ran learning groups for kids and adults.</p>
            <ul>
              <li>Launched 8 kids learning groups: English, chess, dance, and more.</li>
              <li>Built onboarding for teachers, digitised attendance and bonus tracking.</li>
              <li>Implemented a sales system across online and offline channels. Profit up 60% in 6 months.</li>
              <li>Organised 5+ commercial events for adults.</li>
            </ul>
          </>
        ),
      },
      {
        company: "Tuk.md",
        link: "https://tuk.md",
        badges: ["Podcasting", "Producing", "Grant Writing", "DaVinci Resolve", "Grants"],
        title: "YouTube Show Producer",
        start: "2024",
        end: "2024",
        description: (
          <>
            <p>6-month project producing a YouTube show on media literacy.</p>
            <ul>
              <li>Wrote the proposal and won $30,000 in grant funding.</li>
              <li>Introduced PR automation (short-form videos) and process workflows.</li>
              <li>Released 16 episodes on YouTube. Completed video editing and podcasting courses, released 3 personal episodes.</li>
            </ul>
          </>
        ),
      },
      {
        company: "Hookah Shop",
        link: "",
        badges: ["Financial Model", "Sales", "Partner Network", "1C", "MoySklad"],
        title: "Co-founder, Store Manager",
        start: "2021",
        end: "2023",
        description: (
          <>
            <p>Opened a small offline and online hookah and tobacco shop. Total revenue over 1.2M RUB.</p>
            <ul>
              <li>Inventory systems setup — EDI and «Honest Sign» integration, cashier discipline control.</li>
              <li>Offline sales, staff training, team management.</li>
              <li>Promotion strategy for Instagram and Telegram.</li>
              <li>Marketplace online store management — listing design, market research, reports, ABC and XYZ analysis, data visualisation.</li>
            </ul>
          </>
        ),
      },
    ],
    education: [
      {
        school: "HSE University, Saint Petersburg",
        degree: "Bachelor's, Sociology and Social Informatics",
        start: "2019",
        end: "2023",
      },
    ],
    languages: [
      { name: "Russian", level: "Native" },
      { name: "English", level: "B2 (Upper-Intermediate)" },
    ],
    courses: [
      "Video editing (DaVinci Resolve)",
      "Podcasting and producing",
      "ISO standard — business processes",
    ],
    skills: [
      "Python",
      "Figma",
      "Trello",
      "Jira",
      "HubSpot",
      "Tableau",
      "Excel & Google Sheets (advanced)",
      "Qualitative & quantitative research",
      "Analytics & metrics",
      "Communication",
      "Business processes (ISO)",
    ],
    projects: [
      {
        title: "Monito",
        techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
        description:
          "Browser extension for debugging web apps: screenshots, screen recording, E2E test generation and bug reports.",
        link: {
          label: "monito.dev",
          href: "https://monito.dev/",
        },
      },
      {
        title: "Consultly",
        techStack: ["TypeScript", "Next.js", "GraphQL", "WebRTC", "Tailwind"],
        description:
          "Platform for online consultations with real-time video meetings and scheduling.",
        link: {
          label: "consultly.com",
          href: "https://consultly.com/",
        },
      },
      {
        title: "Minimalist CV",
        techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
        description:
          "Open source minimalist resume template focused on readability. 9k+ stars on GitHub.",
        link: {
          label: "Minimalist CV",
          href: "https://github.com/BartoszJarocki/cv",
        },
      },
    ],
    relocation: "Open to relocation",
    positioning: {
      text: "Sales as a product: systemic processes, transparent metrics, fast iterations. Strong at networking and turning strategy into money.",
      tags: ["BizDev", "Sales", "Partnerships", "YouTube", "Web3", "Networking"],
    },
  },
};
