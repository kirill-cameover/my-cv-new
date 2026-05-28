"use client";

import { useResumeData } from "@/data/useResumeData";
import { useTranslations } from "@/i18n/useTranslations";

/**
 * Сайд-проекты — карточки в 3 колонки на десктопе.
 * Сохранены из исходного шаблона по запросу пользователя.
 */
export function Projects() {
  const data = useResumeData();
  const t = useTranslations();

  if (!data.projects || data.projects.length === 0) return null;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="container scroll-mt-24 py-12 md:py-16"
    >
      <h2
        id="projects-heading"
        className="mb-8 text-2xl font-medium tracking-tight text-foreground md:mb-10 md:text-3xl"
      >
        {t.sections.projects}
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.projects.map((project) => (
          <article
            key={project.title}
            className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-6"
          >
            <h3 className="mb-2 text-base font-medium text-foreground">
              {project.link ? (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  {project.title}
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-primary"
                  />
                </a>
              ) : (
                project.title
              )}
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            {project.techStack.length > 0 && (
              <ul
                aria-label="Technologies used"
                className="mt-auto flex flex-wrap gap-1.5 pt-4"
              >
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border/60 bg-card/50 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
