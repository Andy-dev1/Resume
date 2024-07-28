"use client"
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import FormContact from "./FormContact";
import { useTranslations } from "next-intl";
const Contact = () => {
  const t = useTranslations("Contact");
  return (
    <section className="py-[6vh]  px-10 lg:px-36" id="contact">
      <div className="  container max-w-[1160px] mx-auto">
        <h2 className="text-4xl font-black text-center">{t("contactMe")}</h2>
        <div className="mt-24 lg:flex justify-between">
          <div>
            <div>
              <h4 className="text-2xl  font-bold">
                {t("contactTitle")}
              </h4>
              <p>
                {t("contactSubtitle")}
              </p>
            </div>
            <div className="mt-4 flex flex-col">
              <a href="mailto:contact@andrelemos.site" className="flex items-center gap-2 text-sm">
                <MdEmail className=" sm:text-2xl hidden sm:block" />
                contact@andrelemos.site
              </a>
              <a href="https://www.linkedin.com/in/andreslemos/" target="_blank" className="flex text-sm  items-center gap-2">
                <FaLinkedin className=" sm:text-2xl hidden sm:block" />{" "}
                https://www.linkedin.com/in/andreslemos/
              </a>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <FormContact/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
