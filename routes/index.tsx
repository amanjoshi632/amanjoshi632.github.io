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
 * Homepage - Single page portfolio
 * All sections rendered in order with anchor navigation
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
