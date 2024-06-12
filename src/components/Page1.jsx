import React from 'react'

function Page1({changeBackground, activeButton, pageRightText}) {

  return (
    <div className="page1 flex h-[80vh] p-[1vw_2vw]">
        <div className="page1-left w-[70%]">
          <img className="board w-[28vw] mt-[-1vw]" src="./assets/summer 1.png" alt=""/>

          <h4 className="font-inter font-light pt-[2vh] text-[1.5rem] italic">
            Cool Down This Summer with Robin Baskin's <br />
            Delightfully Refreshing Ice Cream Treats!
          </h4>

          <div className="page1-items flex mt-[5vh]">
            <img onClick={() => changeBackground('darkbrown', 'main-1.png', 'right-1.png')} className={`w-[10vw] h-[10vw] bg-[#FFFEFE] p-[1vw] rounded-full shadow-[0_3px_10px_#A68661] ${activeButton === 'darkbrown' && 'darkbrown'}`} src="./assets/NutellaSlab_414x 1.png" alt="" />
            <img onClick={() => changeBackground('faintgreen', 'main-2.png', 'right-2.png')} className={`down w-[10vw] h-[10vw] bg-[#FFFEFE] p-[1vw] rounded-full shadow-[0_3px_10px_#A68661] translate-y-[10vh] ${activeButton === 'faintgreen' && 'faintgreen'}`} src="./assets/BrownBiscuitBoba_414x 1.png" alt="" />
            <img onClick={() => changeBackground('darkpurple', 'main-3.png', 'right-3.png')} className={`w-[10vw] h-[10vw] bg-[#FFFEFE] p-[1vw] rounded-full shadow-[0_3px_10px_#A68661] ${activeButton === 'darkpurple' && 'darkpurple'}`} src="./assets/1mermaid-1-938x1024-removebg-preview 2.png" alt="" />
            <img onClick={() => changeBackground('darkgreen', 'main-4.png', 'right-4.png')} className={`down w-[10vw] h-[10vw] bg-[#FFFEFE] p-[1vw] rounded-full shadow-[0_3px_10px_#A68661] translate-y-[10vh] ${activeButton === 'darkgreen' && 'darkgreen'}`} src="./assets/LollipopSundae-CC_414x 2.png" alt="" />
          </div>
        </div>
        <div className="page1-right relative w-[50%] mt-10">
          <img className="page1-right-text w-[30vw] ml-40 -mt-5" src={`./assets/${pageRightText}`} alt="" />
          <img className="page1-right-image absolute w-[30vw] transform scale-[1.3]" src="./assets/bigcake.png" alt="" />
          {/* <div className="circle-container absolute" style={{ transform: `rotate(${rotationDegree}deg)` }}>
            {page1RightImages.map((image, index) => (
              <img key={index} className={`page1-right-image w-[30vw] scale-150`} style={{ transform: `rotate(${index * 90}deg) translate(15vw) rotate(${-index * 90}deg)` }} src={`./assets/${image}`} alt="" />
            ))}
          </div> */}
        </div>
    </div>
  )
}

export default Page1