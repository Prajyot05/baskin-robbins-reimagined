import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Cursor from './components/Cursor';
import { ScaleProvider } from './context/ScaleContext';
import AboutPage from './pages/AboutPage';
import LandingPage from './pages/LandingPage';
import StoresPage from './pages/StoresPage';
import Footer from './components/Footer';

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
      <ScaleProvider>
        <Cursor />
        <NavBar />
        <LandingPage />
        <AboutPage />
        <StoresPage />
        <Footer />
      </ScaleProvider>
    </div>
    </>
  );
}

export default App
