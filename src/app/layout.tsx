import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";

import "./globals.css";
import type React from "react";
import { ErrorBoundary } from "@/components/error-boundary";
import { RESUME_DATA } from "@/data/resume-data";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://cv-kirill-cholak.vercel.app"),
  title: {
    default: `${RESUME_DATA.name} — ${RESUME_DATA.about}`,
    template: `%s | ${RESUME_DATA.name}`,
  },
  description: RESUME_DATA.about,
  keywords: [
    "resume",
    "cv",
    "portfolio",
    RESUME_DATA.name,
    "sales",
    "business development",
    "web3",
    "crypto",
    "youtube production",
    "media",
    "partnerships",
  ],
  authors: [{ name: RESUME_DATA.name }],
  creator: RESUME_DATA.name,
  publisher: RESUME_DATA.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: RESUME_DATA.personalWebsiteUrl,
    siteName: `${RESUME_DATA.name} — CV`,
    title: `${RESUME_DATA.name} — ${RESUME_DATA.about}`,
    description: RESUME_DATA.about,
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESUME_DATA.name} — ${RESUME_DATA.about}`,
    description: RESUME_DATA.about,
  },
  alternates: {
    canonical: RESUME_DATA.personalWebsiteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#0D1117",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ErrorBoundary>
          <LanguageProvider>{children}</LanguageProvider>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  );
}
