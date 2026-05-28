"use client";

import { useResumeData } from "@/data/useResumeData";
import { useTranslations } from "@/i18n/useTranslations";

/**
 * Опыт работы в виде вертикального таймлайна.
 * Лайм-точки слева, линия между ними, плоский лейаут (без карточек).
 */
export function WorkExperience() {
  const data = useResumeData();
  const t = useTranslations();

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="container scroll-mt-24 py-16 md:py-20"
    >
      <h2
        id="experience-heading"
        className="mb-10 text-2xl font-medium tracking-tight text-foreground md:mb-12 md:text-3xl"
      >
        {t.sections.work}
      </h2>

      <ol className="relative ml-2 space-y-10 border-l border-border/60 pl-8 md:ml-3 md:pl-10">
        {data.work.map((job) => (
          <li key={`${job.company}-${job.start}`} className="relative">
            {/* Точка на линии */}
            <span
              aria-hidden="true"
              className="absolute -left-[37px] top-1.5 size-3 rounded-full bg-primary ring-4 ring-background md:-left-[45px]"
            />

            {/* Заголовок: должность — компания */}
            <header className="mb-1.5">
              <h3 className="text-[15px] font-medium text-foreground md:text-base">
                <span>{job.title}</span>
                <span className="text-muted-foreground"> — </span>
                {job.link ? (
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {job.company}
                  </a>
                ) : (
                  <span className="text-muted-foreground">{job.company}</span>
                )}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground/80 md:text-sm">
                {job.start} — {job.end ?? t.common.present}
              </p>
            </header>

            {/* Описание */}
            <div
              className="
                mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground
                [&_p]:mb-2
                [&_ul]:list-none [&_ul]:space-y-1.5 [&_ul]:pl-0
                [&_li]:relative [&_li]:pl-4
                [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[10px]
                [&_li]:before:size-1 [&_li]:before:rounded-full [&_li]:before:bg-muted-foreground/60
              "
            >
              {job.description}
            </div>

            {/* Бейджи технологий */}
            {job.badges.length > 0 && (
              <ul
                aria-label="Tools and technologies"
                className="mt-3 flex flex-wrap gap-1.5"
              >
                {job.badges.map((b) => (
                  <li
                    key={b}
                    className="rounded-full border border-border/60 bg-card/50 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
