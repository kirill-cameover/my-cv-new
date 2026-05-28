"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { defaultLocale, type Locale } from "./types";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const STORAGE_KEY = "cv-locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Получаем язык из localStorage или используем язык браузера
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && (stored === "ru" || stored === "en")) {
      setLocaleState(stored);
    } else {
      // Определяем язык браузера
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "ru" || browserLang === "en") {
        setLocaleState(browserLang as Locale);
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, newLocale);
      // Обновляем атрибут lang у html элемента
      document.documentElement.lang = newLocale;
    }
  };

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale;
    }
  }, [locale, mounted]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

