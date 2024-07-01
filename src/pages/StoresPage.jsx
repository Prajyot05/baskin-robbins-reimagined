import React from 'react'
import StoreSwiper from '../components/Swiper'
import { useScale } from '../context/ScaleContext'

function StoresPage() {
  const {handleMouseEnter, handlerMouseLeave} = useScale();
  return (
    <div className='stores-page flex flex-col items-center bg-pink-500 h-full'>
        <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handlerMouseLeave} className='text-[6rem] text-white font-extrabold text-center'>Our Stores</h1>
        <div className=" pt-14 w-full store-swiper">
          <StoreSwiper />
        </div>
    </div>
  )
}

export default StoresPage