"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { VscChromeClose } from "react-icons/vsc"
import Styles from "@/components/more/Styles.css"

const Galery = ({galeryImg}) => {
  
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  const getImg = (img) =>{
    setIsOpen(true)
    setSelectedImage(img)
    console.log(img)
  }

  return (
      <div className='mt-7 border-l-2 border-[#00AFFF] w-[90%] mb-5'>
            <div className={isOpen ? "model open" : "model"}>
                <Image src={selectedImage} width={1000} height={1000} alt="ImageMaxed"/>
                <VscChromeClose onClick={() => setIsOpen(false)} />
            </div>
            <h1 className='text-2xl text-[#00AFFF] font-bold pl-2'>GALERÍA</h1>
            <div className='flex flex-wrap gap-10 mt-5 ml-2'>
                {galeryImg &&
                    galeryImg.map((imagen, id) => (<div onClick={() => getImg("/galeria/"+imagen.img)} key={id} className='object-cover w-52'>
                        <Image alt = {"WorkImage"+id} src={"/galeria/"+imagen.img} height={1000} width={1000} className='rounded-xl hover:-translate-y-1 hover:scale-110 duration-300'/>
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