import React, { useState } from 'react'

function Page1() {
  const leftImages = ["ice-cream-1.png", "ice-cream-2.png", "ice-cream-3.png", "ice-cream-2.png"]
  const [clickedIndex, setClickedIndex] = useState(0);

  const onClickHandler = (index) => {
    setClickedIndex(index);
  }

  return (
    <div className='page1 relative h-[87vh]'>
      <div className="title pt-20 pl-48">
        <h1 className='text-[9rem] text-pink-700'>Strawberry</h1>
        <h2 className='text-[6rem]'>Curizmo</h2>
      </div>
      <div className="description pl-48 pt-10 italic text-[1.2rem] w-[50%]">
        <p>Cool Down This Summer with Robin Baskin's Delightfully Refreshing Ice Cream Treats! Delightfully blah blah blah Refreshing Ice Cream Treats! Blah blah blah!!</p>
      </div>
      <div className="page1-hoverables flex pl-48 gap-[1vw] pt-20">
        {
          leftImages.map((image, index) => (
            <img key={index} src={`../../assets/${image}`} className={`w-[7vw] h-[7vw] ${clickedIndex === index && 'p-2 bg-[#fa7fb4]'} rounded-full shadow-lg shadow-slate-500`} onClick={() => onClickHandler(index)} alt="" />
          ))
        }
      </div>
      <div className="rotation-container absolute bottom-0 right-0">
        <img src="../../assets/plate.png" className='w-[70vh]' alt="" />
      </div>
    </div>
  )
}

export default Page1