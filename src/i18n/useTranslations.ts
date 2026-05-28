"use client";

import { useLanguage } from "./LanguageProvider";
import { translations } from "./translations";

export function useTranslations() {
  const { locale } = useLanguage();
  return translations[locale];
}

