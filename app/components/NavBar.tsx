"use client"
import { useTranslations } from "next-intl";
import Menu from "./Menu";
import LocaleSwitcher from "./LocaleSwitcher";

const NavBar = () => {
  const t= useTranslations('Header')

  return (
    <header>
      <nav className="px-10 md:px-36 border-b-4 border-black flex items-center justify-between py-4">
        <div>
          <h1 className="font-black text-4xl">AL</h1>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-x-10 font-semibold text-base items-center">
            <li>
              <a className="group  transition duration-300" href="#projects">
                {t('projects')}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </a>
            </li>
            <li>
              <a className="group  transition duration-300" href="#skills">
                {t('skills')}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </a>
            </li>
            <li>
              <a className="group  transition duration-300" href="#experience">
                {t('experience')}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </a>
            </li>
            <li>
              <a
                className="border-2 border-black py-2 px-8 hover:bg-black hover:text-white"
                href="#contact"
              >
                {t('contact')}
              </a>
            </li>
            <LocaleSwitcher/>
          </ul>
        </div>
        
        <Menu/>
      </nav>
    </header>
  );
};

export default NavBar;
