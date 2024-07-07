import React from 'react';
import { useScale } from '../context/ScaleContext';

function VideoPage() {

  const {handleMouseEnter, handleMouseLeave} = useScale();

  return (
    <div className="milkshake-page overflow-x-hidden relative min-h-screen">
      <div className="background-video-container absolute inset-0 overflow-hidden">
        <video className="background-video object-cover min-h-[120%] -mt-10 min-w-full" src="/assets/baskin-robbins-video.mp4" autoPlay muted loop></video>
        <div className="overlay absolute inset-0 bg-black opacity-[0.7]"></div>
      </div>
      <div className="content z-10 flex flex-col items-center h-full">
        <div className="heading flex flex-col justify-center">
          <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="text-white pt-10 text-2xl lg:text-7xl tracking-tight font-bold">What Makes <span className='text-pink-500'>Us Special ?</span></h1>
          <img className='scale-[0.5]' src="/assets/ice-cream-line.png" alt="" />
        </div>
        <div className="specialities flex gap-20 md:gap-28 lg:gap-40 py-24 px-0 md:px-32 lg:px-48 justify-center flex-wrap">
          <div className="special-image hover:bg-white hover:bg-opacity-15 transition-all duration-300 md:px-10 py-2 rounded-[20px] flex flex-col justify-center items-center">
            <img className='w-[5rem] md:w-[7rem] lg:w-[9rem]' src="/assets/Special1.avif" alt="" />
            <h4 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='w-[5rem] md:w-[7rem] lg:w-[9rem] text-center'>100% vegetarian</h4>
          </div>
          <div className="special-image hover:bg-white hover:bg-opacity-15 transition-all duration-300 md:px-10 py-4 rounded-[20px] flex flex-col justify-center items-center">
            <img className='w-[5rem] md:w-[7rem] lg:w-[9rem]' src="/assets/Special2.avif" alt="" />
            <h4 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='w-[5rem] md:w-[7rem] lg:w-[9rem] text-center'>Made with cow milk</h4>
          </div>
          <div className="special-image hover:bg-white hover:bg-opacity-15 transition-all duration-300 md:px-10 py-4 rounded-[20px] flex flex-col justify-center items-center">
            <img className='w-[5rem] md:w-[7rem] lg:w-[9rem]' src="/assets/Special3.avif" alt="" />
            <h4 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='w-[5rem] md:w-[7rem] lg:w-[9rem] text-center'>Over 31 premium, international flavours and toppings</h4>
          </div>
          <div className="special-image hover:bg-white hover:bg-opacity-15 transition-all duration-300 md:px-10 py-4 rounded-[20px] flex flex-col justify-center items-center">
            <img className='w-[5rem] md:w-[7rem] lg:w-[9rem]' src="/assets/Special4.avif" alt="" />
            <h4 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='w-[5rem] md:w-[7rem] lg:w-[9rem] text-center'>Rich ingredients. Premium quality.</h4>
          </div>
          <div className="special-image hover:bg-white hover:bg-opacity-15 transition-all duration-300 md:px-10 py-4 rounded-[20px] flex flex-col justify-center items-center">
            <img className='w-[5rem] md:w-[7rem] lg:w-[9rem]' src="/assets/Special5.avif" alt="" />
            <h4 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='w-[5rem] md:w-[7rem] lg:w-[9rem] text-center'>Outstanding product innovations</h4>
          </div>
          <div className="special-image hover:bg-white hover:bg-opacity-15 transition-all duration-300 md:px-10 py-4 rounded-[20px] flex flex-col justify-center items-center">
            <img className='w-[5rem] md:w-[7rem] lg:w-[9rem]' src="/assets/Special6.avif" alt="" />
            <h4 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='w-[5rem] md:w-[7rem] lg:w-[9rem] text-center'>Largest ice cream retail chain</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPage;