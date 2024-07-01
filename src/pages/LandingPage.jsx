import React, { useRef } from 'react'
import InfoCard from '../components/InfoCard'
import Hero from '../components/Hero'

function LandingPage() {
  return (
    <div className='landing-page flex min-h-screen'>
        {/* <div class="background-container flex">
          <div class="rectangle-1 h-full w-[5%] rounded-tr-3xl rounded-br-3xl bg-[#fcd3e1]"></div>
          <div class="rectangle-2 h-full w-[45%] bg-white"></div>
          <div class="rectangle-3 h-full w-[50%] rounded-tl-3xl rounded-bl-3xl bg-[#fcd3e1]"></div>
        </div>
        <div className="landing-page min-h-screen w-full">
          <Page1 changeBackground={changeBackground} activeButton={activeButton} pageRightText={pageRightText} rotation={rotation} hide={hide} shake={shake}/>
        </div> */}
        <Hero />
        <InfoCard/>
    </div>
  )
}

export default LandingPage