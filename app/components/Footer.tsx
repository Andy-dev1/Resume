import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] py-[4vh] lg:py-[12vh] px-10 md:px-36   bg-[url('/static/images/wavefooter.png')] bg-no-repeat bg-[length:100%_100%] xl:bg-[length:45%_100%]">
      {/* First footer */}
      <div className="container lg:flex justify-between max-w-[1160px] mx-auto">
        <div >
          <h1 className=" text-[#EAE9E7] text-[40px] leading-10 font-black ">
            ANDRE
            <br />
            LEMOS
            
          </h1>
        </div>
        <div>
          <div className="mt-4 flex flex-col">
            
            <a href="" className="flex items-center gap-2 text-sm text-[#EAE9E7]">
              <MdEmail className=" sm:text-2xl hidden sm:block" />
              contato@contato.com.br
            </a>
            <a href="" className="flex text-sm  items-center gap-2 text-[#EAE9E7]">
              <FaLinkedin className=" sm:text-2xl hidden sm:block" />{" "}
              https://www.linkedin.com/in/andreslemos/
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
