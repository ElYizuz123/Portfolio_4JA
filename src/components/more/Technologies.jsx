"use client"
import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from "framer-motion";

const Technologies = ({technologies, technologiesImg}) => {

  const controls = useAnimation();
  const [isTime, setIsTime] = useState(false)

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
      hidden: { scale:0, rotate:180 }, // Comienza un poco más abajo y con opacidad 0.
      show: { rotate: 360, scale: 1 }, // Anima hacia la opacidad 1 y su posición original en y.
    };


    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
  
      const type = async (word, id) =>{
        let j=0
        let i=0
        let finish = true
        while(finish)
        {
          document.getElementById(id).textContent = word.substring(0, j+1)
          j++
          if(j==word.length)[
            finish = false
          ]
          await delay(15)
        }
        const up = !isTime
        setIsTime(up)
      }

      useEffect(() =>{
        if(isTime){
          controls.start("show");
        }
      }, [controls, isTime])
      
      useEffect(() => {
        type(technologies, "technologies")
        
      }, [technologies])
  
  return (
    <div className='mt-7 border-l-2 border-[#00AFFF] w-[90%]'>
            <h1 className='text-2xl text-[#00AFFF] font-bold pl-2'>TECNOLOGÍAS</h1>
            <p className='pl-2 mt-1 mb-1'>
                <span className='text-[#00AFFF] font-bold'>{"<"}</span>
                <span id="technologies" className='text-white font-bold'></span>
                <span className='text-[#00AFFF] font-bold'>{"/>"}</span>
            </p>
            <motion.div className='flex flex-wrap gap-5 ml-2' animate={controls} variants={containerVariants} initial="hidden">
                {technologiesImg &&
                    technologiesImg.map((technologie, id) => (
                      <motion.div 
                        key={id}
                        variants={gridSquareVariants}>
                        <motion.img 
                          className='object-scale-down h-10 transition hover:-translate-y-1 hover:scale-110 duration-300'
                          src={"/technologies/"+technologie}
                          alt = {"Technologie"+id}
                          width={40}
                          height={40}
                        />
                      </motion.div>
                      
                      ))
                
                }
            </motion.div>
            
        </div>
  )
}

export default Technologies