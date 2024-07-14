import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import BigProject from "./components/BigProject";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero/>
      <BigProject/>
      <section>
        <h1>teste</h1>
      </section>
    </main>
  );
}
