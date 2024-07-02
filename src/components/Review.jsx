import React from 'react'
import Flag from './Flag'
import Flag2 from './Flag2'
import { useScale } from '../context/ScaleContext';

function Review({pfp, name, description}) {
  const { handleMouseEnter, handleMouseLeave } = useScale();
  return (
    <div className='review w-[17rem] px-5 pt-2 pb-5 bg-[#eae8e8] rounded-2xl'>
        <div className="review-top flex w-full justify-between items-center">
          <div className="reviewer flex gap-2 items-center">
            <img className='w-[3rem]' src="../assets/ice-cream-1.png" alt="" />
            <h4 className='text-2xl'>Name{name}</h4>
          </div>
          {/* <img src="../assets/three-dots-vertical.svg" alt="" /> */}
          {/* <Flag /> */}
          <Flag2 />
        </div>
        <div className="review-message">
          {description}
          <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='pt-2 text-xs'>Just tried Chocolate Ribbon Ice Cream — Creamy, rich, and absolutely delicious! Perfect for chocolate cravings!</p>
        </div>
    </div>
  )
}

export default Review