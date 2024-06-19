import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import './page1.css';

const Page1 = () => {
  const plateRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [prevAngle, setPrevAngle] = useState(0);

  const handleButtonClick = (angle) => {
    const newRotation = -angle;
    setRotation(newRotation);
    gsap.to(plateRef.current, { 
      rotation: newRotation, 
      duration: 1 
    });

    rotateIndividualPlates(newRotation - prevAngle);
    setPrevAngle(newRotation);
  };

  const rotateIndividualPlates = (deltaAngle) => {
    const singlePlates = document.querySelectorAll('.single-plate');
    singlePlates.forEach((plate) => {
      const currentRotation = gsap.getProperty(plate, "rotation") || 0;
      const newRotation = currentRotation + deltaAngle;
      gsap.to(plate, {
        rotation: newRotation,
        duration: 1,
      });
    });
  };

  return (
    <div className="smoothies-container relative">
      
      <div className="plate" ref={plateRef}>
        <img className='h-full w-full absolute z-1' src="/src/assets/bg1.png" alt=""/> 
        <div className='absolute h-40 w-40 top-0 left-0 rounded-full overflow-hidden single-plate'>
          <img className='h-full w-full' src="/src/assets/ice2.png" alt=""/>
        </div>
        <div className='absolute h-40 w-40 top-0 right-0 rounded-full overflow-hidden single-plate'>
          <img className='h-full w-full' src="/src/assets/ice3.png" alt=""/>
        </div>
        <div className='absolute h-40 w-40 bottom-0 right-0 rounded-full overflow-hidden single-plate'>
          <img className='h-full w-full' src="/src/assets/ice4.png" alt=""/>
        </div>
        <div className='absolute h-40 w-40 bottom-0 left-0 rounded-full overflow-hidden single-plate'>
          <img className='h-full w-full' src="/src/assets/ice5.png" alt=""/>
        </div>
      </div>
      <div className="buttons">
        <button className='flex px-3 py-2 border-2' onClick={() => handleButtonClick(0)}>Plate 1</button>
        <button className='flex px-3 py-2 border-2' onClick={() => handleButtonClick(90)}>Plate 2</button>
        <button className='flex px-3 py-2 border-2' onClick={() => handleButtonClick(180)}>Plate 3</button>
        <button className='flex px-3 py-2 border-2' onClick={() => handleButtonClick(270)}>Plate 4</button>
      </div>
    </div>
  );
};

export default Page1;
