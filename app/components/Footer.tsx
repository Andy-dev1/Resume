import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] py-[4vh] lg:py-[12vh] px-10 md:px-36  ">
      {/* First footer */}
      <div className="container lg:flex justify-between max-w-[1160px] mx-auto">
        <div>
          <h1 className=" text-[#EAE9E7] text-[40px] leading-10 font-black">
            ANDRE
            <br />
            LEMOS
          </h1>
        </div>
        <div>
          <div className="mt-4 flex flex-col">
            <a href="" className="flex items-center gap-2 text-[#EAE9E7]">
              <MdEmail className="text-2xl" />
              contato@contato.com.br
            </a>
            <a href="" className="flex items-center gap-2 text-[#EAE9E7]">
              <FaLinkedin className="text-2xl" />{" "}
              https://www.linkedin.com/in/andreslemos/
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
