"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'

const Technologies = ({technologies, technologiesImg}) => {


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
      }
      
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
            <div className='flex flex-wrap gap-5 ml-2'>
                {technologiesImg &&
                    technologiesImg.map((technologie, id) => (<Image 
                        className='object-scale-down h-10 transition hover:-translate-y-1 hover:scale-110 duration-300'
                        key={id} 
                        src={"/technologies/"+technologie}
                        alt = {"Technologie"+id}
                        width={40}
                        height={40}
                        />))
                
                }
            </div>
            
        </div>
  )
}

export default Technologies