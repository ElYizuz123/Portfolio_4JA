"use client"
import React from 'react';
import { League_Spartan } from "next/font/google";
import Work from '../Work/Work';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const league = League_Spartan({
  weight: ["400"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};
const gridSquareVariants = {
  hidden: { opacity: 0, y: 50 }, // Comienza un poco más abajo y con opacidad 0.
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Anima hacia la opacidad 1 y su posición original en y.
};


//La idea es que conforme tengamos mas trbajos aqui se agreguen y facilitar un poco mas
const trabajos = [
  { titulo: "PWAMMM", descripcion: "Plataforma web con punto de venta para la Asociación de Mujeres Mezcaleras de Michoacán", enlace: "/pwammm" },
  { titulo: "PWAMMM", descripcion: "Plataforma web con punto de venta para la Asociación de Mujeres Mezcaleras de Michoacán", enlace: "/pwammm" },
  { titulo: "PWAMMM", descripcion: "Plataforma web con punto de venta para la Asociación de Mujeres Mezcaleras de Michoacán", enlace: "/pwammm" },
  { titulo: "PWAMMM", descripcion: "Plataforma web con punto de venta para la Asociación de Mujeres Mezcaleras de Michoacán", enlace: "/pwammm" },
  { titulo: "PWAMMM", descripcion: "Plataforma web con punto de venta para la Asociación de Mujeres Mezcaleras de Michoacán", enlace: "/pwammm" },
  { titulo: "PWAMMM", descripcion: "Plataforma web con punto de venta para la Asociación de Mujeres Mezcaleras de Michoacán", enlace: "/pwammm" },

];

const Principal = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // El contenedor debe estar al 10% en el viewport para iniciar la animación
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);
  return (

    <div className='bg-[#040C19] p-2'>
      <div className={league.className}>
        <h1 className='text-white text-center text-7xl mb-16 font-bold'>Work</h1>
      </div>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
      >
        {trabajos.map((work, index) => (
          <motion.div key={index} variants={gridSquareVariants}>
            <Work key={index} titulo={work.titulo} descripcion={work.descripcion} enlace={work.enlace} />
          </motion.div>

        ))}
      </motion.div>
    </div>




  )
}

export default Principal
