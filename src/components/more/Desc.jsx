"use client"
import React from 'react'

const Desc = ({description, link}) => {

    const handleButtonClick = () => {
        window.open(link, '_blank');
    };

  return (
    <div className='mt-5 border-l-2 border-[#00AFFF] w-[90%]'>
            <h1 className='text-2xl text-[#00AFFF] font-bold pl-2'>DESCRIPCIÓN</h1>
            <p className='pl-2 mt-1 mb-1'>
                <span className='text-[#00AFFF] font-bold'>{"<"}</span>
                <span className='text-white font-bold'>{description}</span>
                <span className='text-[#00AFFF] font-bold'>{"/>"}</span>
            </p>
            <button className='text-white font-bold bg-[#00AFFF] ml-2 w-24 mt-2 p-1 rounded-lg hover:font-black' onClick={handleButtonClick}>Ir al sitio</button>
    </div>
  )
}

export default Desc