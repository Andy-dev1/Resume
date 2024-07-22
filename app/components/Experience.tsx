import React from "react";

const Experience = () => {
  return (
    <section className="py-[6vh]  px-10 lg:px-36 " id="experience">
      <div className="  container max-w-[1160px] mx-auto">
        <div className="lg:flex ">
          <div className="lg:h-[710px]  lg:w-[24%]">
            <div className="w-[100%] h-[60%] lg:border-4 lg:border-black ps-[34px] py-[19px]">
              <h4 className="font-bold text-2xl mb-5">Educação</h4>
              <div className="mb-4">
                <p className="font-bold leading-none">Análise de Sistemas</p>
                <p className="font-light leading-none text-sm">
                  FAETERJ-RIO 2019-2023
                </p>
              </div>
              <div className="mb-4">
                <p className="font-bold leading-none">Matemática</p>
                <p className="font-light leading-none text-sm">
                  UERJ 2019-2019
                </p>
              </div>
              <div className="mb-4">
                <p className="font-bold leading-none">C. da Computação</p>
                <p className="font-light leading-none text-sm">
                  UniCarioca 2017-2017
                </p>
              </div>
            </div>
            <div className="hidden lg:block w-[100%] bg-blue-400 h-[40%] border-b-4 border-black border-x-4"></div>
          </div>
          <div className="w-full lg:h-[710px] lg:w-[76%]">
            <div className="pe-28 lg:w-[100%] h-[80%] lg:border-y-4 lg:border-r-4 border-black ps-[34px] py-[19px]">
              <h4 className="w-full font-bold text-2xl mb-5">Experiência</h4>
              <div className="mb-4">
                <p className="font-bold leading-none">
                  Hostnet-Internet (Dez/2022 - Presente){" "}
                </p>
                <p className="font-light leading-none text-sm">
                  Front-End Developer
                </p>
                <p className="lg:ms-7 mt-1 text-base w-full">
                  Atualmente, sou responsável pela reestruturação completa do
                  front-end da aplicação da intranet, migrando suas
                  funcionalidades legadas de PHP para Next.js. Utilizo
                  dependências avançadas de gerenciamento de estado como SWR,
                  estilizações eficientes com TailwindCSS e tipagem segura com
                  TypeScript. Meu trabalho garante um produto final com alta
                  otimização de componentes e segurança aprimorada, resultando
                  em uma experiência de usuário superior e desempenho robusto.
                </p>
              </div>
              <div className="mb-4">
                <p className="font-light text-sm">
                  Suporte Técnico (Ago/2021 - Dez/2022)
                </p>
                <p className="lg:ms-7 mt-1 text-base">
                  Fui responsável pela manutenção e aprimoramento de código
                  legado em PHP para clientes hospedados, além de desenvolver
                  sites e módulos customizados utilizando Beaver Builder e
                  Elementor. Realizei correções de bugs em plugins, instalação
                  de novos plugins e otimização de sites em WordPress,
                  garantindo desempenho superior e satisfação dos clientes.
                  Conduzi migrações de e-mails com Imapsync e prestei suporte
                  técnico abrangente, oferecendo soluções rápidas e eficazes
                  para dúvidas e problemas, assegurando um atendimento de
                  excelência e fidelização dos clientes.
                </p>
              </div>
            </div>
            <div className="hidden lg:block  h-[20%] w-[100%] border-b-4 border-r-4 border-black">
                <h1 className="font-black text-[147px] leading-none text-stroke-3 text-[#DDDCDA] ">PROGRESS</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
