import Link from 'next/link'
import React from 'react'
import { League_Spartan } from "next/font/google";
const league = League_Spartan({
  weight: ["400"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});


const Work = ({ titulo, descripcion, enlace }) => {
  return (


    <div className='border-[#00afff] border-4 rounded-2xl shadow-md bg-[#101010] flex flex-col justify-center p-6 h-64 w-80 mb-16'>
      <h1 className='text-[#00afff] text-3xl mb-4 font-bold'> {titulo}</h1>

      <div className={league.className}>
        <p className='text-white mb-4 font-bold'>
          <span className="text-[#00afff] font-extrabold text-lg">&lt;</span>
          {descripcion}
          <span className="text-[#00afff] font-extrabold text-lg">/&gt;</span>
        </p>
        <Link href={enlace}>

          <button className='bg-[#00afff] text-white px-5 py-0.5 rounded-full hover:bg-transparent hover:border-[#00afff] hover:border-2 font-bold'>Ver más </button>
        </Link>
      </div>
    </div>



  )
}

export default Work
