import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [clickedIndex, setClickedIndex] = useState(0);

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  return (
    <nav className="flex w-full justify-between items-center py-1 px-10 min-h-[13vh]">
      <div className="nav-left w-1/2 cursor-pointer">
        <a href='/' className='flex w-[60vw] md:block'><img className="logo -ml-5 sm:ml-0 w-[25rem]" src="./assets/logo.webp" alt="" /></a>
      </div>
      <div className="nav-right flex items-center gap-[1vw] ml-48">
        <Sidebar />
      </div>
    </nav>
  );
};

export default Navbar;