"use client"
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Experience = () => {
  const t = useTranslations("Experience");
  return (
    <section className="py-[6vh]  px-10 lg:px-36 " id="experience">
      <div className="  container max-w-[1160px] mx-auto">
        <div className="lg:flex ">
          <div className="xl:h-[710px]  lg:w-[24%]">
            <div className="w-[100%] h-[60%] lg:border-4 lg:border-black lg:ps-[34px] py-[19px]">
              <h4 className="font-bold text-2xl mb-5">{t("educationTitle")}</h4>
              <div className="mb-4">
                <p className="font-bold leading-none">{t("firstEducation")}</p>
                <p className="font-light leading-none text-sm">
                  FAETERJ-RIO 2019-2023
                </p>
              </div>
              <div className="mb-4">
                <p className="font-bold leading-none">{t("secondEducation")}</p>
                <p className="font-light leading-none text-sm">
                  UERJ 2019-2019
                </p>
              </div>
              <div className="mb-4">
                <p className="font-bold leading-none">{t("thirdEducation")}</p>
                <p className="font-light leading-none text-sm">
                  UniCarioca 2017-2017
                </p>
              </div>
            </div>
            <div className="hidden lg:block w-[100%]  h-[40%] border-b-4 border-black border-x-4">
              <Image draggable={false} className="xl:-translate-x-20 xl:-translate-y-20 scale-150" alt="soft skills" src='/static/images/soft.png' width={407} height={325}/>
            </div>
          </div>
          <div className="w-full xl:h-[710px] lg:w-[76%]">
            <div className="lg:pe-28 lg:w-[100%] xl:h-[80%] lg:border-y-4 lg:border-r-4 border-black lg:ps-[34px] py-[19px]">
              <h4 className="w-full font-bold text-2xl mb-5">{t("experienceTitle")}</h4>
              <div className="mb-4">
                <p className="font-bold leading-none">
                {t("firstExperienceTitle")}
                </p>
                <p className="font-light leading-none text-sm">
                  Front-End Developer
                </p>
                <p className="lg:ms-7 mt-1 text-base w-full">
                  {t("firstExperienceText")}
                </p>
              </div>
              <div className="mb-4">
                <p className="font-light text-sm">
                 {t("secondExperienceSubtext")}
                </p>
                <p className="lg:ms-7 mt-1 text-base">
                  {t("secondExperienceText")}
                </p>
              </div>
            </div>
            <div className="hidden lg:block  xl:h-[20%] w-[100%] border-b-4 border-r-4 border-black bg-[url('/static/images/progress.png')] bg-[length:881px_151px]">
                {/* <h1 className="font-black text-[92px] xl:text-[147px] leading-none text-stroke-3 text-[#DDDCDA] ">PROGRESS</h1> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
