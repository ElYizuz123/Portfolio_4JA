"use client";
import React from "react";
import { useState } from "react";

function page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center items-center h-screen  bg-gray-500">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#00AFFF] text-white px-4 py-2 rounded-md"
      >
        Saber más
      </button>

      {/* {isOpen && ( */}
      <div className="bg-[#040c19] p-6 rounded-lg shadow-lg z-10 h-[500px] w-[650px]">
        <p className="flex justify-center text-4xl font-semibold mb-4 text-white">
          ¿Quienes<span className="text-[#00AFFF] ml-2">somos?</span>
        </p>

        <p className="mt-10 text-2xl font-semibold text-white flex flex-wrap justify-center items-center">
          <span className="text-[#00AFFF]">{"<"}</span>
          <span>Hola! Somos estudiantes activos de</span>
          <span className="text-[#00AFFF] ml-2">Sistemas Computacionales,</span>
          <span className="ml-2">nos presentamos</span>
          <span className="text-[#00AFFF]">{"/>"}</span>
        </p>
        <div className="grid grid-cols-2 gap-5 ">
          {/* JOVANY */}
          <div className="ml-8 flex items-center gap-3 mt-10">
            <div className=" h-20 w-20 rounded-full overflow-hidden">
              <img
                src={"jovany.jpg"}
                alt="jovany"
                className="h-full w-full object-cover transition-transform 
            duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
              />
            </div>

            <div className="-mt-2">
              <p className="text-white">
                <span className="text-[#00AFFF] font-semibold">J</span>
                ovany Alexander
              </p>
              <p className="text-white">Equihua Cervantes</p>

              <div className=" flex items-center gap-2 mt-2 ml-4">
                <a href="https://www.linkedin.com/in/jovany-equihua-cervantes-8a983a132/">
                  <img
                    src={"linkedin.png"}
                    alt="linkedin"
                    className="h-5 w-5 transition-transform 
                duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                  />
                </a>

                <a href="https://github.com/JovanyEquihua">
                  <img
                    src={"github.png"}
                    alt="github"
                    className="h-5 w-5 transition-transform 
                duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                  />
                </a>

                <a href="https://github.com/JovanyEquihua">
                  <img
                    src={"correo.png"}
                    alt="correo"
                    className="h-5 w-5 transition-transform 
                duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                  />
                </a>

                <a href="https://github.com/JovanyEquihua">
                  <img
                    src={"cv.png"}
                    alt="cv"
                    className="h-5 w-5 transition-transform 
                duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* ALEJANDRO */}
          <div className="ml-5 flex items-center gap-3 mt-10">
            <div className=" h-20 w-20 rounded-full overflow-hidden">
              <img
                src={"alejandro.jpg"}
                alt="alejandro"
                className="h-full w-full object-cover transition-transform 
            duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
              />
            </div>

            <div className="-mt-2">
              <p className="text-white text-center">
                <span className="text-[#00AFFF] font-semibold ">A</span>
                lejandro
              </p>
              <p className="text-white">Gutiérrez Barrera</p>

              <div className=" flex items-center gap-2 mt-2 ml-4">
                <a href="https://www.linkedin.com/in/alejandro-guti%C3%A9rrez-barrera-05377a254/">
                  <img
                    src={"linkedin.png"}
                    alt="linkedin"
                    className="h-5 w-5 transition-transform 
                duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                  />
                </a>

                <a href="https://github.com/Guty90">
                  <img
                    src={"github.png"}
                    alt="githu"
                    className="h-5 w-5 transition-transform 
                duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                  />
                </a>

                <a href="">
                  <img
                    src={"correo.png"}
                    alt="correo"
                    className="h-5 w-5 transition-transform 
                duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                  />
                </a>

                <a href="">
                  <img
                    src={"cv.png"}
                    alt="cv"
                    className="h-5 w-5 transition-transform 
                duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* JESUS */}
          <div className="ml-8 flex items-center gap-3 mt-10">
            <div className=" h-20 w-20 rounded-full overflow-hidden">
              <img
                src={"jesus.jpg"}
                alt="jesus"
                className="h-full w-full object-cover transition-transform 
            duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
              />
            </div>

            <div className="-mt-2">
              <p className="text-white ">
                <span className="text-[#00AFFF] font-semibold ">J</span>
                osé de Jesús
              </p>
              <p className="text-white text-center">Zárate García</p>

              <div className=" flex items-center gap-2 mt-2 ml-1">
                <a href="https://www.linkedin.com/in/jos%C3%A9-de-jes%C3%BAs-z%C3%A1rate-garc%C3%ADa-79414a253/">
                  <img
                    src={"linkedin.png"}
                    alt="linkedin"
                    className="h-5 w-5 transition-transform 
                duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                  />
                </a>

                <a href="https://github.com/ElYizuz123">
                  <img
                    src={"github.png"}
                    alt="githu"
                    className="h-5 w-5 transition-transform 
                duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                  />
                </a>

                <a href="">
                  <img
                    src={"correo.png"}
                    alt="correo"
                    className="h-5 w-5 transition-transform 
                duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                  />
                </a>

                <a href="">
                  <img
                    src={"cv.png"}
                    alt="cv"
                    className="h-5 w-5 transition-transform 
                duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* AGUI */}
          <div className="ml-5 flex items-center gap-3 mt-10">
            <div className=" h-20 w-20 rounded-full overflow-hidden">
              <img
                src={"agui.jpg"}
                alt="agui"
                className="h-full w-full object-cover transition-transform 
            duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
              />
            </div>

            <div className="-mt-2">
              <p className="text-white text-center">
                <span className="text-[#00AFFF] font-semibold ">A</span>
                gui Judith
              </p>
              <p className="text-white">Martínez Gutiérrez</p>

              <div className=" flex items-center gap-2 mt-2 ml-2">
                <a href="https://www.linkedin.com/in/agui-judith-mart%C3%ADnez-guti%C3%A9rrez-a2b999309/">
                  <img
                    src={"linkedin.png"}
                    alt="linkedin"
                    className="h-5 w-5 transition-transform 
                duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                  />
                </a>

                <a href="https://github.com/JudithMart">
                  <img
                    src={"github.png"}
                    alt="githu"
                    className="h-5 w-5 transition-transform 
                duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                  />
                </a>

                <a href="">
                  <img
                    src={"correo.png"}
                    alt="correo"
                    className="h-5 w-5 transition-transform 
                duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                  />
                </a>

                <a href="">
                  <img
                    src={"cv.png"}
                    alt="cv"
                    className="h-5 w-5 transition-transform 
                duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <button
            onClick={() => setIsOpen(false)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Close Popup
          </button> */}
      </div>
      {/* )} */}
    </div>
  );
}

export default page;
