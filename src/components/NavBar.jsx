import React, { useState } from 'react';

const Navbar = () => {
  const [clickedIndex, setClickedIndex] = useState(0);

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  return (
    <nav className="flex w-full justify-between items-center py-1 px-32 h-[13vh]">
      <div className="nav-left cursor-pointer">
        <a href='/'><img className="logo w-[25vw] ml-[5vw]" src="./assets/logo.webp" alt="" /></a>
      </div>
      <div className="nav-right flex items-center gap-[1vw] ml-10">
        {['Home', 'Shop', 'Our Stores', 'About us'].map((text, index) => (
          <h4
            key={index}
            className={`text-black text-xl px-[2rem] py-[0.2rem] rounded-[50px] transition ease-in duration-300 cursor-pointer ${clickedIndex !== index && 'hover:scale-110 hover:text-[#FFFEFE]'} ${clickedIndex === index ? 'nav-clicked' : ''}`}
            onClick={() => handleClick(index)}
          >
            {text}
          </h4>
        ))}
        <img className="hidden w-[3vw]" src="./assets/menuIcon.png" alt="" />
      </div>
      <img src="../assets/delivery.png" className='delivery-img w-14 bg-slate-100 hover:scale-[1.15] cursor-pointer shadow-xl -mr-24 p-2 rounded-full' alt="" />
    </nav>
  );
};

export default Navbar;