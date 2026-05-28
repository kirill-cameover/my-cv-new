"use client";

import { useResumeData } from "@/data/useResumeData";
import { useTranslations } from "@/i18n/useTranslations";

/**
 * Сильные стороны и компетенции:
 * 3 карточки в ряд (1 колонка на mobile, 2 на md, 3 на lg).
 * Тёмный фон, лайм-буллет, заголовок 500 weight.
 */
export function Competencies() {
  const data = useResumeData();
  const t = useTranslations();

  if (!data.competencies || data.competencies.length === 0) return null;

  return (
    <section
      id="competencies"
      aria-labelledby="competencies-heading"
      className="container scroll-mt-24 py-16 md:py-20"
    >
      <h2
        id="competencies-heading"
        className="mb-8 text-2xl font-medium tracking-tight text-foreground md:mb-10 md:text-3xl"
      >
        {t.sections.competencies}
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.competencies.map((c) => (
          <article
            key={c.title}
            className="rounded-2xl border border-border/60 bg-card p-6"
          >
            <h3 className="mb-4 text-base font-medium text-foreground">{c.title}</h3>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              {c.items.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-[8px] inline-block size-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
