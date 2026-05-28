"use client";

import { useResumeData } from "@/data/useResumeData";
import { useTranslations } from "@/i18n/useTranslations";

/**
 * Объединённый блок: Образование (+ Курсы) слева, Языки справа.
 * Структура повторяет референс cmogrigorev.ru.
 */
export function EducationBlock() {
  const data = useResumeData();
  const t = useTranslations();

  if (!data.education || data.education.length === 0) return null;

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="container scroll-mt-24 py-12 md:py-16"
    >
      <h2 id="education-heading" className="sr-only">
        {t.sections.education}
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Левая карточка: Образование + Курсы */}
        <div className="rounded-2xl border border-border/60 bg-card p-6">
          <h3 className="mb-4 text-base font-medium text-foreground">
            {t.sections.education}
          </h3>
          <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
            {data.education.map((edu) => (
              <li key={edu.school} className="flex gap-2.5">
                <span
                  aria-hidden="true"
                  className="mt-[8px] inline-block size-1.5 shrink-0 rounded-full bg-primary"
                />
                <span>
                  {edu.degree} — {edu.school} ({edu.start}–{edu.end})
                </span>
              </li>
            ))}
          </ul>

          {data.courses && data.courses.length > 0 && (
            <>
              <h3 className="mt-6 mb-4 text-base font-medium text-foreground">
                {t.sections.courses}
              </h3>
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                {data.courses.map((course) => (
                  <li key={course} className="flex gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-[8px] inline-block size-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Правая карточка: Языки */}
        {data.languages && data.languages.length > 0 && (
          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h3 className="mb-4 text-base font-medium text-foreground">
              {t.sections.languages}
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              {data.languages.map((lang) => (
                <li key={lang.name} className="flex gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-[8px] inline-block size-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span>
                    <span className="text-foreground">{lang.name}</span> — {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
