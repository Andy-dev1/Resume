import React from "react";

const NavBar = () => {
  return (
    <header>
      <nav className="px-10 md:px-36 border-b-4 border-black flex items-center justify-between py-4">
        <div>
          <h1 className="font-black text-4xl">AL</h1>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-x-10 font-semibold text-base items-center">
            <li>
              <a className="group  transition duration-300" href="">
                Projetos
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </a>
            </li>
            <li>
              <a className="group  transition duration-300" href="">
                Skills{" "}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </a>
            </li>
            <li>
              <a className="group  transition duration-300" href="">
                Experiência
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </a>
            </li>
            <li>
              <a
                className="border-2 border-black py-2 px-8 hover:bg-black hover:text-white"
                href=""
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
