"use client";
import React from "react";
import ComputerScreen from "./ComputerScreen";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("Projects");
  return (
    <section className="py-[12vh] px-10 md:px-36">
      <div className="container lg:flex   max-w-[1160px] mx-auto ">
        <ComputerScreen computerBgImage="bg-[url('/static/images/private.png')] bg-center" />
        <div className="lg:ms-[130px] mt-4 lg:mt-0">
          <h3 className="text-2xl font-bold">{t("firstTitle")}</h3>
          <p className="mt-5">{t("firstText")}</p>
        </div>
      </div>

      <div className="container  lg:flex lg:flex-row-reverse   max-w-[1160px] mx-auto mt-20 lg:mt-40">
        <ComputerScreen computerBgImage="bg-[url('/static/images/domain.png')] bg-cover" />
        <div className="lg:me-[130px] mt-4 lg:mt-0">
          <h3 className="text-2xl font-bold">{t("secondTitle")}</h3>
          <p className="mt-5">{t("secondText")}</p>
        </div>
      </div>

      <div className="container  lg:flex   max-w-[1160px] mx-auto mt-20 lg:mt-40">
        <ComputerScreen computerBgImage="bg-[url('/static/images/pokedex.png')] bg-cover" />
        <div className="lg:ms-[130px] mt-4 lg:mt-0">
          <h3 className="text-2xl font-bold">{t("thirdTitle")}</h3>
          <p className="mt-5">{t("thirdText")}</p>
        </div>
      </div>

      <div className="container  lg:flex lg:flex-row-reverse   max-w-[1160px] mx-auto mt-20 lg:mt-40">
        <ComputerScreen computerBgImage="bg-[url('/static/images/chat.png')] bg-cover" />
        <div className="lg:me-[130px] mt-4 lg:mt-0">
          <h3 className="text-2xl font-bold">{t("fourthTitle")}</h3>
          <p className="mt-5">
          {t("fourthText")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
