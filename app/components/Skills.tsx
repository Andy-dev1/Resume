import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { BiLogoPhp } from "react-icons/bi";
import { DiJqueryLogo } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";

const Skills = () => {
  return (
    <section className="py-[6vh] bg-black bg-opacity-5 px-10 lg:px-36 border-y-4 border-black" id="skills">
      <div className="flex flex-col  justify-center items-center container max-w-[1160px] mx-auto">
        <h3 className="text-4xl font-black text-center">Skills</h3>
        <div className=" lg:flex mt-14 w-full lg:justify-between">
          <div className="mx-auto xl:mx-0 w-[198px] h-[61px] border-4 border-black flex items-center mb-2 lg:mb-0">
            <div className="w-[53px] h-[53px] bg-black flex justify-center items-center ">
              <RiReactjsLine className="text-white text-4xl -translate-x-[1px]" />
            </div>
            <div className="flex-grow flex justify-center">
              <h4 className="font-semibold text-xl text-center">NEXT.JS</h4>
            </div>
          </div>

          <div className="mx-auto xl:mx-0 w-[198px] h-[61px] border-4 border-black flex items-center mb-2 lg:mb-0">
            <div className="w-[53px] h-[53px] bg-black flex justify-center items-center ">
              <RiReactjsLine className="text-white text-4xl -translate-x-[1px]" />
            </div>
            <div className="flex-grow flex justify-center">
              <h4 className="font-semibold text-xl text-center">REACT.JS</h4>
            </div>
          </div>

          <div className="mx-auto xl:mx-0 w-[198px] h-[61px] border-4 border-black flex items-center mb-2 lg:mb-0">
            <div className="w-[53px] h-[53px] bg-black flex justify-center items-center ">
              <IoLogoJavascript className="text-white text-3xl -translate-x-[1px]" />
            </div>
            <div className="flex-grow flex justify-center">
              <h4 className="font-semibold text-xl text-center">JAVASCRIPT</h4>
            </div>
          </div>

          <div className="mx-auto xl:mx-0 w-[198px] h-[61px] border-4 border-black flex items-center mb-2 lg:mb-0">
            <div className="w-[53px] h-[53px] bg-black flex justify-center items-center ">
              <TbBrandTypescript className="text-white text-4xl -translate-x-[1px]" />
            </div>
            <div className="flex-grow flex justify-center">
              <h4 className="font-semibold text-xl text-center">TYPESCRIPT</h4>
            </div>
          </div>

          <div className="mx-auto xl:mx-0 w-[198px] h-[61px] border-4 border-black flex items-center mb-2 lg:mb-0">
            <div className="w-[53px] h-[53px] bg-black flex justify-center items-center ">
              <BiLogoPhp className="text-white text-5xl -translate-x-[1px]" />
            </div>
            <div className="flex-grow flex justify-center">
              <h4 className="font-semibold text-xl text-center">PHP</h4>
            </div>
          </div>
        </div>

        <div className=" lg:flex xl:mt-4 w-full justify-between">
          <div className="mx-auto xl:mx-0 w-[198px] h-[61px] border-4 border-black flex items-center mb-2 lg:mb-0">
            <div className="w-[53px] h-[53px] bg-black flex justify-center items-center ">
              <DiJqueryLogo className="text-white text-4xl -translate-x-[1px]" />
            </div>
            <div className="flex-grow flex justify-center">
              <h4 className="font-semibold text-xl text-center">JQUERY</h4>
            </div>
          </div>

          <div className="mx-auto xl:mx-0 w-[198px] h-[61px] border-4 border-black flex items-center mb-2 lg:mb-0">
            <div className="w-[53px] h-[53px] bg-black flex justify-center items-center ">
              <AiOutlineHtml5 className="text-white text-4xl -translate-x-[1px]" />
            </div>
            <div className="flex-grow flex justify-center">
              <h4 className="font-semibold text-xl text-center">HTML5</h4>
            </div>
          </div>

          <div className="mx-auto xl:mx-0 w-[198px] h-[61px] border-4 border-black flex items-center mb-2 lg:mb-0">
            <div className="w-[53px] h-[53px] bg-black flex justify-center items-center ">
              <FaCss3 className="text-white text-3xl -translate-x-[1px]" />
            </div>
            <div className="flex-grow flex justify-center">
              <h4 className="font-semibold text-xl text-center">CSS3</h4>
            </div>
          </div>

          <div className="mx-auto xl:mx-0 w-[198px] h-[61px] border-4 border-black flex items-center mb-2 lg:mb-0">
            <div className="w-[53px] h-[53px] bg-black flex justify-center items-center ">
              <FaWordpressSimple className="text-white text-4xl -translate-x-[1px]" />
            </div>
            <div className="flex-grow flex justify-center">
              <h4 className="font-semibold text-xl text-center">WORDPRESS</h4>
            </div>
          </div>

          <div className="mx-auto xl:mx-0 w-[198px] h-[61px] border-4 border-black flex items-center mb-2 lg:mb-0">
            <div className="w-[53px] h-[53px] bg-black flex justify-center items-center ">
              <MdAutoGraph className="text-white text-5xl -translate-x-[1px]" />
            </div>
            <div className="flex-grow flex justify-center">
              <h4 className="font-semibold text-xl text-center">SEO</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
