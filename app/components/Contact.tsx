import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <section className="py-[6vh]  px-10 lg:px-36 ">
      <div className="  container max-w-[1160px] mx-auto">
        <h2 className="text-4xl font-black text-center">FALE COMIGO</h2>
        <div className="mt-24 flex justify-between">
          <div>
            <div>
              <h4 className="text-2xl  font-bold">
                {" "}
                Vamos fazer algo incrível juntos!
              </h4>
              <p>
                Sinta-se livre para falar comigo, estarei sempre à disposição.
              </p>
            </div>
            <div className="mt-4 flex flex-col">
              <a href="" className="flex items-center gap-2">
                <MdEmail className="text-2xl" />
                contato@contato.com.br
              </a>
              <a href="" className="flex items-center gap-2">
                <FaLinkedin className="text-2xl" />{" "}
                https://www.linkedin.com/in/andreslemos/
              </a>
            </div>
          </div>
          <div>
            <form action="#" method="post" className="flex flex-col">
              <div>
                <input
                  name="name"
                  type="text"
                  className="w-[268px] h-[41px] border-black border-2 px-3"
                  placeholder="Seu Nome"
                />
                <input
                  name="email"
                  type="email"
                  className="ms-[29px] w-[268px] h-[41px] border-black border-2 px-3"
                  placeholder="Seu Email"
                />
              </div>

              <input
                name="subject"
                type="text"
                className="mt-4 w-[565px]  h-[41px] border-black border-2 px-3"
                placeholder="Assunto"
              />
              <textarea
                name="message"
                id=""
                className="mt-4 w-[565px] py-[10px] border-black border-2 px-3"
                placeholder="Mensagem"
                rows={10}
              ></textarea>
              <input type="submit" className="cursor-pointer mt-4 w-[565px] py-[10px] border-black border-4 px-3 font-semibold hover:bg-black hover:text-white" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
