import type { StaticImageData } from "next/image";

export type ResumeIcon = React.ComponentType<React.SVGProps<SVGSVGElement>> | StaticImageData;

export type IconType = "github" | "linkedin" | "x" | "globe" | "mail" | "phone" | "telegram";

export interface ResumeData {
  /** Полное имя */
  name: string;
  /** Инициалы для лого */
  initials: string;
  /** Город / часовой пояс */
  location: string;
  /** Google Maps ссылка */
  locationLink: string;
  /** Короткая подпись под именем в nav (например: "BizDev · Sales · Producer") */
  about: string;
  /** Тэг над H1 (например: "BIZDEV • SALES • YOUTUBE PRODUCTION") */
  role: string;
  /** Большой заголовок H1 в hero */
  headline: string;
  /** Метрики-чипсы под описанием в hero */
  highlights?: string[];
  /** Описание в hero (раньше — раздел "О себе") */
  summary: string | React.ReactNode;
  /** Аватар */
  avatarUrl: string;
  /** Личный сайт / блог */
  personalWebsiteUrl: string;
  /** Контакты */
  contact: {
    email: string;
    tel: string;
    social: Array<{
      name: string;
      url: string;
      icon: IconType;
    }>;
  };
  /** Ссылка на PDF-резюме (если есть) */
  resumePdfUrl?: string;
  /** Сильные стороны и компетенции — 3 колонки */
  competencies?: Array<{
    title: string;
    items: string[];
  }>;
  /** Опыт работы (timeline) */
  work: Array<{
    company: string;
    link: string;
    badges: string[];
    title: string;
    start: string;
    end: string | null;
    description: string | React.ReactNode;
  }>;
  /** Образование */
  education: Array<{
    school: string;
    degree: string;
    start: string;
    end: string;
  }>;
  /** Языки */
  languages?: Array<{
    name: string;
    level: string;
  }>;
  /** Курсы и сертификаты */
  courses?: string[];
  /** Skills (Python, Figma, HubSpot…) — отдельная секция */
  skills: string[];
  /** Сайд-проекты */
  projects: Array<{
    title: string;
    techStack: string[];
    description: string;
    link?: {
      label: string;
      href: string;
    };
  }>;
  /** Готовность к переезду */
  relocation?: string;
  /** Позиционирование (текст + теги) */
  positioning?: {
    text: string;
    tags: string[];
  };
}
