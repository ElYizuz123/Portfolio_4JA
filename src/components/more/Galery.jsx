import Image from 'next/image'
import React from 'react'

const Galery = ({galeryImg}) => {
  return (
    <div className='mt-7 border-l-2 border-[#00AFFF] w-[90%] mb-5'>
            <h1 className='text-2xl text-[#00AFFF] font-bold pl-2'>GALERÍA</h1>
            <div className='flex flex-wrap gap-10 mt-5'>
                {galeryImg &&
                    galeryImg.map((imagen, id) => (<div key={id} className='object-cover w-52'>
                        <Image src={"/galeria/"+galeryImg} height={1000} width={1000}/>
                    </div>)
                )}
            </div>
    </div>
  )
}

export default Galery