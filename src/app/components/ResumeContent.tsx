"use client";

import { Competencies } from "./Competencies";
import { Contact } from "./Contact";
import { EducationBlock } from "./EducationBlock";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Nav } from "./Nav";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { WorkExperience } from "./WorkExperience";

/**
 * Главная сборка резюме.
 * Порядок секций соответствует референсу cmogrigorev.ru:
 * Nav → Hero → Competencies → Experience → Education+Languages → Skills → Projects → Contact → Footer
 */
export function ResumeContent() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Competencies />
        <WorkExperience />
        <EducationBlock />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
