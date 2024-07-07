import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Cursor from './components/Cursor';
import { ScaleProvider } from './context/ScaleContext';
import AboutPage from './pages/AboutPage';
import LandingPage from './pages/LandingPage';
import StoresPage from './pages/StoresPage';
import Footer from './components/Footer';
import VideoPage from './pages/VideoPage';
import Opening from './components/Opening';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function App() {
  // const [backgroundImage, setBackgroundImage] = useState('main-1-full.png');
  // const [activeButton, setActiveButton] = useState('darkbrown');
  // const [pageRightText, setPageRightText] = useState("right-text-1.png");
  // const [rotation, setRotation] = useState(0);
  // const [hide, setHide] = useState(1);
  // const [shake, setShake] = useState(false);

  // const changeBackground = (btncolor, bgimage, text, rotation, hide) => {
  //   setBackgroundImage(bgimage);
  //   setActiveButton(btncolor);
  //   setPageRightText(text);
  //   setRotation(rotation);
  //   setHide(hide);

  //   setShake(true);
  //   setTimeout(() => {
  //     setShake(false);
  //   }, 1000);
  // };

  const [opening, setOpening] = useState(true);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".opening-logo img", {
      y: -100,
      opacity: 0,
      duration: 2,
      ease: "bounce.out",
      stagger: {
        each: 0.1,
        from: "start"
      }
    })
    .from(".subtitle h4", {
      opacity: 0,
      y: 50,
      textShadow: "0px",
      duration: 2
    }, "-=1.5")
    .to(".opening-page", {
      y: -1000,
      duration: 1,
      ease: "power4.in",
      display: "none",
    }, "+=0.75")
    .eventCallback("onComplete", () => {
      // gsap.from(".main-content", {
      //   opacity: 0,
      //   duration: 5,
      // }, "+=5");
      setOpening(false);

      gsap.to(".main-content", {
        opacity: 1,
        duration: 1,
        display: "block"
      })
    });
  });

  return (
    <>
    <div className='main'>
      <Opening />
      <div className="main-content opacity-0 hidden">
      {/* <div className="main-content"> */}
        <ScaleProvider>
          <Cursor />
          <NavBar/>
          <LandingPage />
          <AboutPage isOpening={opening}/>
          <VideoPage />
          <StoresPage />
          <Footer />
        </ScaleProvider>
      </div>
    </div>
    </>
  );
}

export default App
