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
          <h3 className="text-2xl font-bold">Projeto de automação sisu</h3>
          <p className="mt-5">
            Desenvolvi uma aplicação desktop utilizando o framework Wails.js,
            com React.js no front-end e Golang no back-end, além do
            armazenamento de dados com SQLite. <br />
            <br />
            Esta aplicação é projetada para gerenciar e distribuir alunos
            aprovados pelo processo seletivo SISU, bem como criar chamadas para
            os alunos selecionados. <br />
            <br />O uso dessas tecnologias permitiu a criação de uma solução
            eficiente, segura e de alto desempenho, aprimorando
            significativamente o processo de gestão e seleção de alunos,
            substituindo totalmente a utilização do excel pela faculdade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BigProject;
