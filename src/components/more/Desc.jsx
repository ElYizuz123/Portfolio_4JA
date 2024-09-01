"use client"


const Desc = ({description, link}) => {
    const handleButtonClick = () => {
        window.open(link, '_blank');
    };

  return (
    <div className='mt-5 border-l-2 border-[#00AFFF] w-[90%] text-white'>
            <h1 className='text-2xl text-[#00AFFF] font-bold pl-2'>DESCRIPCIÓN</h1>
            <p className='pl-2 mt-1 mb-1'>
                <span className='text-[#00AFFF] font-bold'>{"<"}</span>
                <span className='text-white font-bold'>{description}</span>
                <span className='text-[#00AFFF] font-bold'>{"/>"}</span>
            </p>
            <button className='transition text-white font-bold bg-[#00AFFF] ml-2 w-24 mt-2 p-1 rounded-lg hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300' onClick={handleButtonClick}>Ir al sitio</button>
    </div>
  )
}

export default Desc