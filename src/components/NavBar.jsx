import React from 'react'

function NavBar() {
  return (
    <nav className="flex w-full justify-between items-center py-[1vw] px-[2vw] h-[13vh] shadow-[0_3px_10px_#A68661] bg-black bg-opacity-10">
        <div className="nav-left cursor-pointer">
          <a href='/'><img className="w-[30vw]" src="./assets/logo.webp" alt="" /></a>
        </div>
        <div className="nav-right flex items-center gap-[4vw]">
          <h4 className="text-black text-xl transition ease-in duration-300 cursor-pointer hover:scale-110 hover:text-[#FFFEFE]">Home</h4>
          <h4 className="text-black text-xl transition ease-in duration-300 cursor-pointer hover:scale-110 hover:text-[#FFFEFE]">Shop</h4>
          <h4 className="text-black text-xl transition ease-in duration-300 cursor-pointer hover:scale-110 hover:text-[#FFFEFE]">Our Stores</h4>
          <h4 className="text-black text-xl transition ease-in duration-300 cursor-pointer hover:scale-110 hover:text-[#FFFEFE]">About us</h4>
          <img className="hidden w-[3vw]" src="./assets/menuIcon.png" alt="" />
        </div>
    </nav>
  )
}

export default NavBar