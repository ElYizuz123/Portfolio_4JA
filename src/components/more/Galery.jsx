import Image from 'next/image'
import React from 'react'

const Galery = ({galeryImg}) => {
  return (
    <div className='mt-7 border-l-2 border-[#00AFFF] w-[90%] mb-5'>
            <h1 className='text-2xl text-[#00AFFF] font-bold pl-2'>GALERÍA</h1>
            <div className='flex flex-wrap gap-10 mt-5 ml-2'>
                {galeryImg &&
                    galeryImg.map((imagen, id) => (<div key={id} className='object-cover w-52'>
                        <Image src={"/galeria/"+imagen.img} height={1000} width={1000} className='rounded-xl'/>
                        <p className='text-center font-bold'>
                          <span className='text-[#00AFFF]'>{"<"}</span>
                          <span className='text-white'>{imagen.desc}</span>
                          <span className='text-[#00AFFF]'>{"/>"}</span>
                        </p>
                    </div>)
                )}
            </div>
    </div>
  )
}

export default Galery