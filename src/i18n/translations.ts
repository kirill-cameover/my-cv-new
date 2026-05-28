import type { Locale } from "./types";

export interface Translations {
  nav: {
    about: string;
    competencies: string;
    experience: string;
    contact: string;
    cta: string;
  };
  sections: {
    about: string;
    competencies: string;
    work: string;
    education: string;
    languages: string;
    courses: string;
    skills: string;
    projects: string;
    contact: string;
    positioning: string;
  };
  common: {
    present: string;
    location: string;
    email: string;
    phone: string;
    personalWebsite: string;
    telegram: string;
    linkedin: string;
    github: string;
    downloadPdf: string;
    city: string;
    relocation: string;
  };
}

export const translations: Record<Locale, Translations> = {
  ru: {
    nav: {
      about: "Обо мне",
      competencies: "Компетенции",
      experience: "Опыт",
      contact: "Контакты",
      cta: "Связаться",
    },
    sections: {
      about: "Обо мне",
      competencies: "Сильные стороны и компетенции",
      work: "Опыт",
      education: "Образование",
      languages: "Языки",
      courses: "Курсы и сертификаты",
      skills: "Навыки и инструменты",
      projects: "Проекты",
      contact: "Контакты",
      positioning: "Позиционирование",
    },
    common: {
      present: "н.в.",
      location: "Город",
      email: "Email",
      phone: "Телефон",
      personalWebsite: "Сайт",
      telegram: "Telegram",
      linkedin: "LinkedIn",
      github: "GitHub",
      downloadPdf: "Скачать резюме (PDF)",
      city: "Город",
      relocation: "Готовность",
    },
  },
  en: {
    nav: {
      about: "About",
      competencies: "Competencies",
      experience: "Experience",
      contact: "Contact",
      cta: "Get in touch",
    },
    sections: {
      about: "About",
      competencies: "Strengths and competencies",
      work: "Experience",
      education: "Education",
      languages: "Languages",
      courses: "Courses & certificates",
      skills: "Skills and tools",
      projects: "Projects",
      contact: "Contact",
      positioning: "Positioning",
    },
    common: {
      present: "Present",
      location: "City",
      email: "Email",
      phone: "Phone",
      personalWebsite: "Website",
      telegram: "Telegram",
      linkedin: "LinkedIn",
      github: "GitHub",
      downloadPdf: "Download CV (PDF)",
      city: "City",
      relocation: "Open to",
    },
  },
};
