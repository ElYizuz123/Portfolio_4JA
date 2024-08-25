import Image from 'next/image'
import React from 'react'

const Technologies = ({technologies, technologiesImg}) => {
  return (
    <div className='mt-7 border-l-2 border-[#00AFFF] w-[90%]'>
            <h1 className='text-2xl text-[#00AFFF] font-bold pl-2'>TECNOLOGÍAS</h1>
            <p className='pl-2 mt-1 mb-1'>
                <span className='text-[#00AFFF] font-bold'>{"<"}</span>
                <span className='text-white font-bold'>{technologies}</span>
                <span className='text-[#00AFFF] font-bold'>{"/>"}</span>
            </p>
            <div className='flex flex-wrap gap-5 ml-2'>
                {technologiesImg &&
                    technologiesImg.map((technologie, id) => (<Image 
                        className='object-scale-down h-10'
                        key={id} 
                        src={"/technologies/"+technologie}
                        width={40}
                        height={40}
                        />))
                
                }
            </div>
        </div>
  )
}

export default Technologies