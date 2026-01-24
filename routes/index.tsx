import { Handlers, PageProps } from "$fresh/server.ts";
import { loadContent, Content } from "@/lib/content.ts";
import { Header } from "@/components/Header.tsx";
import { Footer } from "@/components/Footer.tsx";
import { Hero } from "@/components/sections/Hero.tsx";
import { About } from "@/components/sections/About.tsx";
import { Skills } from "@/components/sections/Skills.tsx";
import { Experience } from "@/components/sections/Experience.tsx";
import { Projects } from "@/components/sections/Projects.tsx";
import { Certifications } from "@/components/sections/Certifications.tsx";
import { Education } from "@/components/sections/Education.tsx";
import { Contact } from "@/components/sections/Contact.tsx";

/**
 * Handler to load CMS content at request time
 */
export const handler: Handlers<Content> = {
  async GET(_req, ctx) {
    const content = await loadContent();
    return ctx.render(content);
  },
};

/**
 * Homepage - Single page portfolio
 * All sections rendered in order with anchor navigation
 * Content loaded from /content/*.json files
 */
export default function Home({ data: content }: PageProps<Content>) {
  return (
    <>
      <Header name={content.site.name} />
      <main>
        <Hero site={content.site} />
        <About about={content.about} />
        <Skills skills={content.skills} />
        <Experience experience={content.experience} />
        <Projects projects={content.projects} />
        <Certifications certifications={content.certifications} />
        <Education education={content.education} />
        <Contact contact={content.contact} />
      </main>
      <Footer name={content.site.name} contact={content.contact} />
    </>
  );
}
