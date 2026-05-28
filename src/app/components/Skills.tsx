"use client";

import { useResumeData } from "@/data/useResumeData";
import { useTranslations } from "@/i18n/useTranslations";

/**
 * Skills — отдельная секция (в референсе её нет, но мы оставили по запросу).
 * Стиль: чипсы с лёгкой рамкой на тёмном фоне.
 */
export function Skills() {
  const data = useResumeData();
  const t = useTranslations();

  if (!data.skills || data.skills.length === 0) return null;

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="container scroll-mt-24 py-12 md:py-16"
    >
      <h2
        id="skills-heading"
        className="mb-6 text-2xl font-medium tracking-tight text-foreground md:mb-8 md:text-3xl"
      >
        {t.sections.skills}
      </h2>

      <ul
        aria-label="Skills"
        className="flex flex-wrap gap-2"
      >
        {data.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-border/60 bg-card/50 px-3.5 py-1.5 text-sm text-foreground/85"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
