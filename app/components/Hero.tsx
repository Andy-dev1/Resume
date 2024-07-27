"use client";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <section className="py-[4vh] lg:py-[12vh] px-10 md:px-36  ">
      {/* First section */}
      <div className="container flex justify-between max-w-[1160px] mx-auto">
        <div>
          <h1 className="text-7xl md:text-8xl font-black leading-[86%]">
            Andre <br />
            Lemos
          </h1>
          <p className="text-base leading-[86%] tracking-[0.8vw] lg:tracking-[7.8px] ms-2">
            FRONT-END DEVELOPER
          </p>
          <h2
            className="lg:mt-20 mt-[6vh] font-bold text-xl lg:text-2xl leading-[106%]"
            dangerouslySetInnerHTML={{ __html: t.raw("headline") }}
          />

          <p
            className="lg:text-lg mt-5 "
            dangerouslySetInnerHTML={{ __html: t.raw("herotext") }}
          />

          <a
            className="font-semibold text-sm md:text-xl py-4 px-14 border-4 border-black mt-[4vh] lg:mt-12 inline-block hover:bg-black hover:text-white"
            href="#contact"
          >
            {t("contact")}
          </a>
        </div>
        {/* Second section */}
        <div className="relative">
          <Image
            alt="My image"
            width={"396"}
            height={"568"}
            src="/static/images/picture.png"
            className="hidden lg:block relative z-10"
            draggable={false}
          />
          <Image
            alt="Wave shadow"
            width={"396"}
            height={"568"}
            src="/static/images/wave-shadow.png"
            className="hidden lg:block absolute top-10 left-10 z-0"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
