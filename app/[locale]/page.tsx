import Hero from "../components/Hero";
import BigProject from "../components/BigProject";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useTranslations } from "next-intl";

export default function Home() {
  return (
    <main>
      <Hero />
      <BigProject />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
