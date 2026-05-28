"use client";

import {
  GitHubIcon,
  LinkedInIcon,
  TelegramIcon,
} from "@/components/icons";
import { XIcon } from "@/components/icons/x-icon";
import { useResumeData } from "@/data/useResumeData";
import { useTranslations } from "@/i18n/useTranslations";
import type { IconType } from "@/lib/types";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";

const ICON_MAP: Record<IconType, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  globe: GlobeIcon,
  mail: MailIcon,
  phone: PhoneIcon,
  telegram: TelegramIcon,
};

/**
 * Контакты:
 * Левая карточка — таблица с город / телефон / email + кнопки соц-сетей.
 * Правая карточка — Позиционирование + теги.
 */
export function Contact() {
  const data = useResumeData();
  const t = useTranslations();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="container scroll-mt-24 py-16 md:py-20"
    >
      <h2
        id="contact-heading"
        className="mb-8 text-2xl font-medium tracking-tight text-foreground md:mb-10 md:text-3xl"
      >
        {t.sections.contact}
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Левая карточка: контактная информация */}
        <div className="rounded-2xl border border-border/60 bg-card p-6">
          <dl className="grid grid-cols-[110px_1fr] gap-x-4 gap-y-4 text-sm">
            <dt className="text-muted-foreground">{t.common.city}</dt>
            <dd>
              <a
                href={data.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-colors hover:text-primary"
              >
                {data.location}
              </a>
            </dd>

            {data.relocation && (
              <>
                <dt className="text-muted-foreground">{t.common.relocation}</dt>
                <dd className="text-foreground">{data.relocation}</dd>
              </>
            )}

            {data.contact.tel && (
              <>
                <dt className="text-muted-foreground">{t.common.phone}</dt>
                <dd>
                  <a
                    href={`tel:${data.contact.tel}`}
                    className="text-foreground transition-colors hover:text-primary"
                  >
                    {data.contact.tel}
                  </a>
                </dd>
              </>
            )}

            {data.contact.email && (
              <>
                <dt className="text-muted-foreground">{t.common.email}</dt>
                <dd>
                  <a
                    href={`mailto:${data.contact.email}`}
                    className="break-all text-primary transition-colors hover:underline"
                  >
                    {data.contact.email}
                  </a>
                </dd>
              </>
            )}
          </dl>

          {data.contact.social.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {data.contact.social.map((s) => {
                const Icon = ICON_MAP[s.icon];
                return (
                  <a
                    key={s.url}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center gap-2 rounded-full border border-border bg-transparent px-4 text-sm font-medium text-foreground transition-colors hover:bg-card"
                  >
                    {Icon && <Icon className="size-3.5" aria-hidden="true" />}
                    {s.name}
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Правая карточка: Позиционирование */}
        {data.positioning && (
          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h3 className="mb-3 text-base font-medium text-foreground">
              {t.sections.positioning}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {data.positioning.text}
            </p>
            {data.positioning.tags.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {data.positioning.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border/60 bg-card/50 px-3 py-1 text-[11px] text-foreground/80"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
