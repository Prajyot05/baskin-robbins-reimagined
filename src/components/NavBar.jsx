import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { useScale } from '../context/ScaleContext';

const Navbar = () => {
  const [clickedIndex, setClickedIndex] = useState(0);
  const {handleMouseEnter, handleMouseLeave} = useScale();

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  return (
    <nav className="navbar flex w-full justify-between items-center py-1 px-10 min-h-[13vh] absolute top-0">
      <div className="nav-left w-1/2 cursor-pointer z-[99]">
        <a href='/' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex w-[60vw] md:block'><img className="logo -ml-5 sm:ml-0 w-[22rem]" src="./assets/logo.webp" alt="" /></a>
      </div>
      <div className="nav-right flex items-center gap-[1vw] ml-48">
        <Sidebar />
      </div>
    </nav>
  );
};

export default Navbar;