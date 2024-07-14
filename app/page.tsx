import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import BigProject from "./components/BigProject";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <BigProject />
      <Projects />
      <Skills />
      
    </main>
  );
}
