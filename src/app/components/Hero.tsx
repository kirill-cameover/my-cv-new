"use client";

import { Avatar } from "@/components/avatar";
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
 * Hero в стиле cmogrigorev.ru:
 * левая колонка — тэг роли, H1, описание, чипсы-метрики, кнопки соц-CTA
 * правая колонка — крупное фото с rounded углами
 */
export function Hero() {
  const data = useResumeData();
  const t = useTranslations();

  const primarySocial = data.contact.social.find((s) => s.icon === "telegram") ?? data.contact.social[0];
  const secondarySocial = data.contact.social.find((s) => s !== primarySocial);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="container scroll-mt-24 pt-12 pb-16 md:pt-20 md:pb-24"
    >
      <h2 id="about-heading" className="sr-only">
        {t.sections.about}
      </h2>

      <div className="grid items-center gap-10 md:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* Текстовая колонка */}
        <div className="order-2 md:order-1">
          {data.role && (
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.14em] text-primary">
              {data.role}
            </p>
          )}

          <h1 className="text-balance text-[clamp(2.2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-foreground">
            {data.headline}
          </h1>

          <div className="mt-6 max-w-xl space-y-3 text-pretty text-[15px] leading-relaxed text-muted-foreground [&_b]:font-medium [&_b]:text-foreground">
            {data.summary}
          </div>

          {data.highlights && data.highlights.length > 0 && (
            <ul
              aria-label="Key highlights"
              className="mt-6 flex flex-wrap gap-2"
            >
              {data.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-full border border-border bg-card/40 px-3 py-1.5 text-xs text-foreground/85"
                >
                  {h}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            {primarySocial && (
              <a
                href={primarySocial.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {primarySocial.name}
              </a>
            )}
            {secondarySocial && (
              <a
                href={secondarySocial.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-transparent px-5 text-sm font-medium text-foreground transition-colors hover:bg-card"
              >
                {secondarySocial.name}
              </a>
            )}
            {data.resumePdfUrl && (
              <a
                href={data.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-transparent px-5 text-sm font-medium text-foreground transition-colors hover:bg-card"
              >
                {t.common.downloadPdf}
              </a>
            )}
          </div>
        </div>

        {/* Фото */}
        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-card">
            <Avatar
              className="size-full rounded-2xl"
              src={data.avatarUrl}
              alt={`${data.name} — фото`}
              fallback={data.initials}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
