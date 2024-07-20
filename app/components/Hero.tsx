import Image from "next/image";
import React from "react";

const Hero = () => {
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
          <h2 className="lg:mt-20 mt-[6vh] font-bold text-xl lg:text-2xl leading-[106%]">
            Cansado de mais do mesmo? <br />
            Você está no lugar certo!
          </h2>
          <p className="lg:text-lg mt-5 ">
            Desenvolvo soluções leves e com
            <span className="font-extrabold"> alto grau</span> de{" "}
            <span className="font-extrabold">engajamento.</span> <br /> Entre em
            contato e descubra como posso ajudar você a alcançar <br /> seus
            objetivos e levar seu projeto ao{" "}
            <span className="font-extrabold">próximo nível.</span>
            <br /> Estou ansioso para colaborar com você!
          </p>

          <a
            className="font-semibold text-sm md:text-xl py-4 px-14 border-4 border-black mt-[4vh] lg:mt-12 inline-block hover:bg-black hover:text-white"
            href="#"
          >
            Entrar em contato
          </a>
        </div>
        {/* Second section */}
        <div>
          <Image
            alt="My image"
            width={"396"}
            height={"568"}
            src="/static/images/picture.png"
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
