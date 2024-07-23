import React from "react";
import ComputerScreen from "./ComputerScreen";

const Projects = () => {
  return (
    <section className="py-[12vh] px-10 md:px-36">
      <div className="container lg:flex   max-w-[1160px] mx-auto ">
        <ComputerScreen computerBgImage="bg-[url('/static/images/private.png')] bg-center"/>
        <div className="lg:ms-[130px] mt-4 lg:mt-0">
          <h3 className="text-2xl font-bold">Projeto dashboard intranet</h3>
          <p className="mt-5">
            Desenvolvi um dashboard interno para a empresa utilizando Next.js,
            TailwindCSS e SWR. Essa aplicação proporciona uma interface
            intuitiva e responsiva, facilitando o gerenciamento de dados e
            otimização de processos internos. O uso de tecnologias de ponta como
            Next.js para o front-end, TailwindCSS para estilização e SWR para
            gerenciamento eficiente de dados garante um desempenho superior e
            uma experiência de usuário aprimorada, aumentando a produtividade e
            a eficiência operacional da empresa.
          </p>
        </div>
      </div>

      <div className="container  lg:flex lg:flex-row-reverse   max-w-[1160px] mx-auto mt-20 lg:mt-40">
        <ComputerScreen computerBgImage="bg-[url('/static/images/domain.png')] bg-cover"/>
        <div className="lg:me-[130px] mt-4 lg:mt-0">
          <h3 className="text-2xl font-bold">Projeto pesquisa de domínios</h3>
          <p className="mt-5">
            Um dos meus primeiros projetos na empresa foi a criação de uma
            página de pesquisa de domínios, desenvolvida com React.js e
            utilizando dependências avançadas como React Query. Esta solução
            permitiu uma busca rápida e eficiente de domínios, melhorando
            significativamente a experiência do usuário e agilizando os
            processos internos. O uso de React.js e React Query garantiu um
            desempenho otimizado e uma interface dinâmica, contribuindo para a
            satisfação dos clientes e a eficiência operacional da empresa.
          </p>
        </div>
      </div>

      <div className="container  lg:flex   max-w-[1160px] mx-auto mt-20 lg:mt-40">
        <ComputerScreen computerBgImage="bg-[url('/static/images/pokedex.png')] bg-cover"/>
        <div className="lg:ms-[130px] mt-4 lg:mt-0">
          <h3 className="text-2xl font-bold">Pokédex</h3>
          <p className="mt-5">
            A criação de uma Pokédex foi um dos meus primeiros projetos de
            estudo, desenvolvido com React e complementado por dependências
            avançadas como Bootstrap, React Query e Redux. Este projeto
            demonstrou minha capacidade de integrar diferentes tecnologias para
            construir uma aplicação rica e interativa.
          </p>
        </div>
      </div>

      <div className="container  lg:flex lg:flex-row-reverse   max-w-[1160px] mx-auto mt-20 lg:mt-40">
        <ComputerScreen computerBgImage="bg-[url('/static/images/chat.png')] bg-cover"/>
        <div className="lg:me-[130px] mt-4 lg:mt-0">
          <h3 className="text-2xl font-bold">Template Next.js Chat App</h3>
          <p className="mt-5">
            Desenvolvi um template em Next.js baseado em uma aplicação de chat,
            utilizando as mais recentes técnicas de design e implementação de
            SEO. Este projeto não só demonstra minha habilidade em criar
            interfaces modernas e responsivas, mas também minha competência em
            otimizar a visibilidade e desempenho da aplicação nos mecanismos de
            busca. A integração das melhores práticas de SEO assegura uma
            experiência de usuário superior e maximiza o alcance orgânico da
            aplicação, destacando meu conhecimento técnico e minha capacidade de
            aplicar estratégias eficazes de otimização.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
