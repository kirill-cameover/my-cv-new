"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { locales, type Locale } from "@/i18n/types";
import { cn } from "@/lib/utils";

const localeLabels: Record<Locale, string> = {
  ru: "RU",
  en: "EN",
};

/**
 * Компактный переключатель языка в стиле нав.
 * Отрисовывает два пилюль-табчика RU/EN рядом.
 */
export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center gap-0.5 rounded-full border border-border bg-card/50 p-0.5"
    >
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={cn(
            "h-7 rounded-full px-2.5 text-[11px] font-medium transition-colors",
            locale === l
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {localeLabels[l]}
        </button>
      ))}
    </div>
  );
}
