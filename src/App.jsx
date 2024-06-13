import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Page1 from './components/Page1';

function App() {
  const [backgroundImage, setBackgroundImage] = useState('main-1.png');
  const [activeButton, setActiveButton] = useState('darkbrown');
  const [pageRightText, setPageRightText] = useState("right-text-1.png");
  const [rotation, setRotation] = useState(0);
  const [hide, setHide] = useState(1);

  const changeBackground = (btncolor, bgimage, text, rotation, hide) => {
    setBackgroundImage(bgimage);
    setActiveButton(btncolor);
    setPageRightText(text);
    setRotation(rotation);
    setHide(hide);
  };

  return (
    <>
    <div className="main min-h-screen w-full" style={{backgroundImage: `url('../assets/${backgroundImage}')` }}>
      <NavBar />
      <Page1 changeBackground={changeBackground} activeButton={activeButton} pageRightText={pageRightText} rotation={rotation} hide={hide}/>
    </div>
    </>
  );
}

export default App
