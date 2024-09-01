import Desc from '@/components/more/Desc'
import Galery from '@/components/more/Galery'
import Technologies from '@/components/more/Technologies'
import React from 'react'


const Page = ({title, description, link, technologies, technologiesImg, galeryImg}) => { 
    //Información preliminar de ejemplo
    title="PWAMMM"
    description="Como parte de un proyecto y concurso escolar, desarrollaramos un sitio web sin fines de lucro para la Asociación de Mujeres Mezcaleras de Michoacán, con información sobre la asociación y una tienda en línea para la venta de sus productos. Nuestro proyecto no se implementó en línea pero obtuvo el segundo lugar."
    technologies="Nuestro proyecto fue desarrollado con NextJS, TailwindCSS para frontend, Javascript para backend y PrismaORM para la gestión de datos"
    technologiesImg = [
        "nextjs.png",
        "tailwindcss.png",
        "javascript.png",
        "prisma.png"
    ]
    galeryImg = [
        {"img":"gato1.jpg","desc":"Formulario personal"},
        {"img":"gato2.jpg","desc":"Nosotras"},
        {"img":"gato3.PNG","desc":"Tienda"},
        {"img":"gato4.jpg","desc":"Formulario personal"},
        {"img":"gato5.jpg","desc":"Nosotras"},
        {"img":"gato6.jpg","desc":"Tienda"},
    ]
    link="https://www.google.com"

  return (
    <div className='bg-gradient-to-b from-[#040c19] to-[#000000] h-full flex flex-col items-center min-h-screen'>
        <div className='w-fit flex flex-col items-center'>
            <h1 className='text-5xl text-white font-black pt-5 text-center'>{title}</h1>
            <hr className='border-t-2 border-white mt-1 w-[85%]'></hr>
        </div>
        <Desc description={description} link={link}/>
        <Technologies technologies={technologies} technologiesImg={technologiesImg}/>
        <Galery galeryImg={galeryImg}/>
    </div>
  )
}

export default Page