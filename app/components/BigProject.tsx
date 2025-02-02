"use client"
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const BigProject = () => {
  const t = useTranslations("BigProject");
  return (
    <section className="py-[12vh] px-10 md:px-36" id="projects">
      <div className="container  lg:max-w-[60%]  mx-auto  ">
        <h2 className="text-4xl font-black text-center">{t('headerline')}</h2>
        <div className=" mx-auto mt-10 ">
          <div className="flex gap-2 items-center w-full h-[40px] border-4 border-black mx-auto">
            <div className="ms-2 w-4 h-4 rounded-full bg-black"></div>
            <div className="w-4 h-4 rounded-full bg-black"></div>
            <div className="w-4 h-4 rounded-full bg-black"></div>
          </div>
          <div className="w-full h-[20vh]  md:h-[40vh] xl:h-[60vh] border-x-4 border-b-4 border-black mx-auto bg-[url('/static/images/sisu.png')] bg-cover z-10"></div>
        </div>
        
        <div className="max-w-[962px] mx-auto mt-24">
          <h3 className="text-2xl font-bold">{t('title')}</h3>
          <p className="mt-5" dangerouslySetInnerHTML={{ __html: t.raw("text") }} />
           
          
        </div>
      </div>
    </section>
  );
};

export default BigProject;
