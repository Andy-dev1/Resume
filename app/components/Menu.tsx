"use client"
import { useState } from "react";

export default function Menu() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between  py-8 lg:hidden">
      
      <nav>
        <section className="MOBILE-MENU flex ">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            {/* <ul className="flex gap-x-10 font-semibold text-base items-center">
            <li>
              <a className="group  transition duration-300" href="#projects">
                Projetos
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </a>
            </li>
            <li>
              <a className="group  transition duration-300" href="#skills">
                Skills{" "}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </a>
            </li>
            <li>
              <a className="group  transition duration-300" href="#experience">
                Experiência
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </a>
            </li>
            <li>
              <a
                className="border-2 border-black py-2 px-8 hover:bg-black hover:text-white"
                href="#contact"
              >
                Contato
              </a>
            </li>
          </ul> */}
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#projects"  onClick={() => setIsNavOpen((prev) => !prev)}>Projetos</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#skills"  onClick={() => setIsNavOpen((prev) => !prev)}>Skills</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#experience"  onClick={() => setIsNavOpen((prev) => !prev)}>Experiência</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#contact"  onClick={() => setIsNavOpen((prev) => !prev)}>Contato</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
