"use client";
import React from "react";
import {FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useState } from "react";



// function MailtoLink({ email }) {
//   const [showOptions, setShowOptions] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     setShowOptions(false);
//   };

//   const getMailUrl = () => {
//     if (selectedOption === "gmail") {
//       return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
//     } else if (selectedOption === "outlook") {
//       return `https://outlook.live.com/owa/?path=/mail/action/compose&to=${email}`;
//     }
//     return "#";
//   };

//   return (
//     <div>
//       <button
//         className="mt-2 text-white hover:text-[#00aeffb4] transition-colors
//          duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
//         onClick={() => setShowOptions(true)}
//       >
//         <SiGmail size={20} />
//       </button>

//       {showOptions && (
//         <div
//           className="absolute bg-white shadow-xl rounded-xl
//         p-4 z-20 h-12 w-32"
//         >
//           <button
//             className="  py-1 rounded  "
//             onClick={() => handleOptionClick("gmail")}
//           >
//             <img
//               src={"gmail.png"}
//               alt="gmail"
//               className="h-6 w-6 object-cover transition-transform 
//             duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
//             />
//             {/* <p className="text-white">Gmail</p> */}
//           </button>
//           <p className="text-black">
//             ó
//           </p>
//           <button
//             className=" py-1 rounded "
//             onClick={() => handleOptionClick("outlook")}
//           >
//             <img
//               src={"outlook.png"}
//               alt="outlook"
//               className="h-6 w-6 object-cover transition-transform 
//             duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
//             />
//             {/* <p className="text-white">Outlook</p> */}
//           </button>
//           <button
//           className="translate-x-5 -translate-y-8"
//             onClick={() => setShowOptions(false)}
           
//           >
//             <FaTimes
//               className="text-red-700 hover:text-red-500 transition-colors duration-300"
//               size={15}
//             />
//           </button>
//         </div>
//       )}

//       {selectedOption && (
//         <a href={getMailUrl()} target="_blank" rel="noopener noreferrer">
//            {selectedOption === "gmail" ? "Gmail" : "Outlook"}
//         </a>
//       )}
//     </div>
//   );
// }



function page() {
  const [isOpen, setIsOpen] = useState(false);


      const pdfUrls = {
        jovany: "/pdf/Cv_Jovany.pdf",
        // alejandro: "/pdfs/alejandro.pdf",
        jesus: "/pdf/CV_Jesus.pdf",
        agui: "/pdf/CV_Agui.pdf",
      };

       const openPDF = (pdfUrl) => {
         window.open(pdfUrl, "_blank");
       };

  return (
    <div className="flex justify-center items-center h-screen  bg-gray-500">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#00AFFF] text-white px-4 py-2 rounded-md"
      >
        Saber más
      </button>

      {isOpen && (
        <div className="bg-[#040c19] p-6 rounded-lg shadow-lg z-10 h-[500px] w-[650px]">
          <p className="flex justify-center text-4xl font-semibold mb-4 text-white">
            ¿Quiénes<span className="text-[#00AFFF] ml-2">somos?</span>
          </p>

          <p className="mt-10 text-2xl font-semibold text-white flex flex-wrap justify-center items-center">
            <span className="text-[#00AFFF]">{"<"}</span>
            <span>Hola! Somos un equipo de estudiantes activos de</span>
            <span className="text-[#00AFFF] ml-2">
              Sistemas Computacionales,
            </span>
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
                  <span className="text-[#00AFFF] font-semibold text-xl">
                    J
                  </span>
                  ovany Alexander
                </p>
                <p className="text-white">Equihua Cervantes</p>

                <div className=" flex items-center gap-2 mt-2 ml-4">
                  <a href="https://www.linkedin.com/in/jovany-equihua-cervantes-8a983a132/">
                    <FaLinkedin
                      className="text-white hover:text-[#00aeffb4] transition-colors duration-300
                     ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                      size={20}
                    />
                  </a>

                  <a href="https://github.com/JovanyEquihua">
                    <FaGithub
                      className="text-white hover:text-[#00aeffb4] transition-colors duration-300
                     ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                      size={20}
                    />
                  </a>
                  {/* <MailtoLink email="jovany@example.com" /> */}
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jovanyequihua@hotmail.com">
                    <FaEnvelope
                      className="text-white hover:text-[#00aeffb4] transition-colors duration-300
                     ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                      size={22}
                    />
                  </a>

                  <a onClick={() => openPDF(pdfUrls.jovany)}>
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
                  <span className="text-[#00AFFF] font-semibold text-xl">
                    A
                  </span>
                  lejandro
                </p>
                <p className="text-white">Gutiérrez Barrera</p>

                <div className=" flex items-center gap-2 mt-2 ml-4">
                  <a href="https://www.linkedin.com/in/alejandro-guti%C3%A9rrez-barrera-05377a254/">
                    <FaLinkedin
                      className="text-white hover:text-[#00aeffb4] transition-colors duration-300
                     ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                      size={20}
                    />
                  </a>

                  <a href="https://github.com/Guty90">
                    <FaGithub
                      className="text-white hover:text-[#00aeffb4] transition-colors duration-300
                     ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                      size={20}
                    />
                  </a>

                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=alexyanguie5@gmail.com">
                    <FaEnvelope
                      className="text-white hover:text-[#00aeffb4] transition-colors duration-300
                     ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                      size={22}
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
                  src={"jesus.jpeg"}
                  alt="jesus"
                  className="h-full w-full object-cover transition-transform 
            duration-300 ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                />
              </div>

              <div className="-mt-2">
                <p className="text-white ">
                  <span className="text-[#00AFFF] font-semibold text-xl">
                    J
                  </span>
                  osé de Jesús
                </p>
                <p className="text-white text-center">Zárate García</p>

                <div className=" flex items-center gap-2 mt-2 ml-1">
                  <a href="https://www.linkedin.com/in/jos%C3%A9-de-jes%C3%BAs-z%C3%A1rate-garc%C3%ADa-79414a253/">
                    <FaLinkedin
                      className="text-white hover:text-[#00aeffb4] transition-colors duration-300
                     ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                      size={20}
                    />
                  </a>

                  <a href="https://github.com/ElYizuz123">
                    <FaGithub
                      className="text-white hover:text-[#00aeffb4] transition-colors duration-300
                     ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                      size={20}
                    />
                  </a>

                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jose.jesus.zarate.garcia@outlook.com">
                    <FaEnvelope
                      className="text-white hover:text-[#00aeffb4] transition-colors duration-300
                     ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                      size={22}
                    />
                  </a>

                  <a onClick={() => openPDF(pdfUrls.jesus)}>
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
                  <span className="text-[#00AFFF] font-semibold text-xl">
                    A
                  </span>
                  gui Judith
                </p>
                <p className="text-white">Martínez Gutiérrez</p>

                <div className=" flex items-center gap-2 mt-2 ml-2">
                  <a href="https://www.linkedin.com/in/agui-judith-mart%C3%ADnez-guti%C3%A9rrez-a2b999309/">
                    <FaLinkedin
                      className="text-white hover:text-[#00aeffb4] transition-colors duration-300
                     ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                      size={20}
                    />
                  </a>

                  <a href="https://github.com/JudithMart">
                    <FaGithub
                      className="text-white hover:text-[#00aeffb4] transition-colors duration-300
                     ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                      size={20}
                    />
                  </a>

                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aguimtz.2003@gmail.com">
                    <FaEnvelope
                      className="text-white hover:text-[#00aeffb4] transition-colors duration-300
                     ease-in-out hover:scale-110 hover:translate-y-[-2px]"
                      size={22}
                    />
                  </a>

                  <a onClick={() => openPDF(pdfUrls.agui)}>
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

          <div className="relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute bottom-96 right-0"
            >
              <FaTimes
                className="text-white hover:text-red-500 transition-colors duration-300"
                size={25}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
