import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Page1 from './components/Page1';

function App() {
  const [backgroundImage, setBackgroundImage] = useState('main-1-full.png');
  const [activeButton, setActiveButton] = useState('darkbrown');
  const [pageRightText, setPageRightText] = useState("right-text-1.png");
  const [rotation, setRotation] = useState(0);
  const [hide, setHide] = useState(1);
  const [shake, setShake] = useState(false);

  const changeBackground = (btncolor, bgimage, text, rotation, hide) => {
    setBackgroundImage(bgimage);
    setActiveButton(btncolor);
    setPageRightText(text);
    setRotation(rotation);
    setHide(hide);

    setShake(true);
    setTimeout(() => {
      setShake(false);
    }, 1000);
  };

  return (
    <>
    <div className='main'>
      <div class="background-container flex">
        <div class="rectangle-1 h-full w-[5%] rounded-tr-3xl rounded-br-3xl bg-[#fcd3e1]"></div>
        <div class="rectangle-2 h-full w-[45%] bg-white"></div>
        <div class="rectangle-3 h-full w-[50%] rounded-tl-3xl rounded-bl-3xl bg-[#fcd3e1]"></div>
      </div>
      {/* <div className="landing-page min-h-screen w-full" style={{backgroundImage: `url('../assets/${backgroundImage}')` }}> */}
      <div className="landing-page min-h-screen w-full">
        <NavBar />
        <Page1 changeBackground={changeBackground} activeButton={activeButton} pageRightText={pageRightText} rotation={rotation} hide={hide} shake={shake}/>
      </div>
    </div>
    </>
  );
}

export default App
