import type { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { generateResumeStructuredData } from "@/lib/structured-data";
import { ResumeContent } from "./components/ResumeContent";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} — ${RESUME_DATA.about}`,
  description: RESUME_DATA.about,
  openGraph: {
    title: `${RESUME_DATA.name} — ${RESUME_DATA.about}`,
    description: RESUME_DATA.about,
    type: "profile",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESUME_DATA.name} — ${RESUME_DATA.about}`,
    description: RESUME_DATA.about,
  },
};

export default function ResumePage() {
  const structuredData = generateResumeStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Safe for JSON-LD structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="sr-only">
        <h1>{RESUME_DATA.name} — Resume</h1>
      </div>
      <ResumeContent />
    </>
  );
}
