"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { RESUME_DATA_I18N } from "./resume-data-i18n";
import type { ResumeData } from "@/lib/types";

export function useResumeData(): ResumeData {
  const { locale } = useLanguage();
  return RESUME_DATA_I18N[locale];
}

