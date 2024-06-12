import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Page1 from './components/Page1';

function App() {
  const [backgroundImage, setBackgroundImage] = useState('main-1.png');
  const [activeButton, setActiveButton] = useState('darkbrown');
  const [pageRightText, setPageRightText] = useState("right-1.png");

  const changeBackground = (btncolor, bgimage, text) => {
    setBackgroundImage(bgimage);
    setActiveButton(btncolor);
    setPageRightText(text);
  };

  return (
    <>
    <div className="main min-h-screen w-full" style={{backgroundImage: `url('../assets/${backgroundImage}')` }}>
      <NavBar />
      <Page1 changeBackground={changeBackground} activeButton={activeButton} pageRightText={pageRightText}/>
    </div>
    </>
  );
}

export default App
