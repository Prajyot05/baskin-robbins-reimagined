import React from 'react'

function Page1({changeBackground, activeButton, pageRightText, rotation, hide}) {

  return (
    <div className="page1 overflow-hidden flex h-[90vh] p-[1vw_2vw]">
        <div className="page1-left w-[70%]">
          <img className="board w-[28vw] mt-[-1vw]" src="./assets/summer 1.png" alt=""/>

          <h4 className="font-inter font-light pt-[2vh] text-[1.5rem] italic">
            Cool Down This Summer with Robin Baskin's <br />
            Delightfully Refreshing Ice Cream Treats!
          </h4>

          <div className="page1-items flex mt-[5vh]">
            <img onClick={() => changeBackground('darkbrown', 'main-1.png', 'right-text-1.png', 0, 1)} className={`w-[10vw] h-[10vw] bg-[#FFFEFE] p-[1vw] rounded-full shadow-[0_3px_10px_#A68661] ${activeButton === 'darkbrown' && 'darkbrown'}`} src="./assets/right-image-1.png" alt="" />
            <img onClick={() => changeBackground('faintgreen', 'main-2.png', 'right-text-2.png', 90, 2)} className={`down w-[10vw] h-[10vw] bg-[#FFFEFE] p-[1vw] rounded-full shadow-[0_3px_10px_#A68661] translate-y-[10vh] ${activeButton === 'faintgreen' && 'faintgreen'}`} src="./assets/right-image-2.png" alt="" />
            <img onClick={() => changeBackground('darkpurple', 'main-3.png', 'right-text-3.png', 180, 3)} className={`w-[10vw] h-[10vw] bg-[#FFFEFE] p-[1vw] rounded-full shadow-[0_3px_10px_#A68661] ${activeButton === 'darkpurple' && 'darkpurple'}`} src="./assets/right-image-3.png" alt="" />
            <img onClick={() => changeBackground('darkgreen', 'main-4.png', 'right-text-4.png', 270, 4)} className={`down w-[10vw] h-[10vw] bg-[#FFFEFE] p-[1vw] rounded-full shadow-[0_3px_10px_#A68661] translate-y-[10vh] ${activeButton === 'darkgreen' && 'darkgreen'}`} src="./assets/right-image-4.png" alt="" />
          </div>
        </div>
        <div className="page1-right relative w-[50%] mt-10">
          <img className="page1-right-text w-[30vw] absolute ml-40 -mt-5" src={`./assets/${pageRightText}`} alt="" />
          <div className="circle-container rotate-[${rotation}deg] w-[100vh] h-[100vh] rounded-full relative left-[90%] top-[60%] transform -translate-x-1/2 -translate-y-1/2" style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}>
            <img src="../assets/right-image-3.png" alt="" className={`absolute ${hide !== 3 && 'hidden'} mt-48 ml-20 top-0 left-1/2 rotate-180`} />
            <img src="../assets/right-image-2.png" alt="" className={`absolute ${hide !== 2 && 'hidden'} -bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90`} />
            <img src="../assets/right-image-1.png" alt="" className={`absolute ${hide !== 1 && 'hidden'} w-[80%] mt-28 ml-14 top-0 left-0 transform -translate-x-1/2`} />
            <img src="../assets/right-image-4.png" alt="" className={`absolute ${hide !== 4 && 'hidden'} top-0 right-0 transform -translate-x-1/3 -translate-y-1/2 rotate-90`} />
          </div>
        </div>
    </div>
  )
}

export default Page1