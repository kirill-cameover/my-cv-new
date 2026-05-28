"use client";

import { useResumeData } from "@/data/useResumeData";

export function Footer() {
  const data = useResumeData();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container py-6 text-center text-xs text-muted-foreground">
        © {year} {data.name}. {data.contact.email}
      </div>
    </footer>
  );
}
