import React from 'react'
import { useScale } from '../context/ScaleContext';

function StoreCard({image, city, address}) {

  const { handleMouseEnter, handleMouseLeave } = useScale();

  return (
    <div className="store-card-container h-[38rem] bg-transparent">
        <div className='store-card w-[30rem] h-[35rem] overflow-hidden bg-slate-200 shadow-2xl rounded-xl'>
            <img className='transform scale-105' src={`../../assets/br_${image}.png`} alt="" />
            <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='text-3xl text-center pt-10 pb-5 uppercase'>{city}</h1>
            <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='px-20 pb-5 text-md text-center'>{address}</p>
            <div className="store-btn-container w-full flex justify-center">
              <button className='bg-pink-500 hover:bg-pink-400 transition-all ease-in-out duration-300 px-10 py-2 text-white font-bold rounded-[30px]'>Let's Go</button>
            </div>
        </div>
    </div>
  )
}

export default StoreCard