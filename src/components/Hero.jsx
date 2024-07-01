import { useState } from "react";
import "./hero.css";
import { useScale } from "../context/ScaleContext";

const images = [
  { src: "/assets/ice-cream-1.png", label: "Strawberry Dragonfruit" },
  { src: "/assets/ice-cream-2.png", label: "Chocolate Ribbon" },
  { src: "/assets/ice-cream-3.png", label: "Pistachio Almond" },
  { src: "/assets/ice-cream-4.png", label: "Cookie Monster" },
];

const Hero = () => {
  const {handleMouseEnter, handleMouseLeave} = useScale();
  const [activeImage, setActiveImage] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [textExiting, setTextExiting] = useState(false);

  const handleButtonClick = (index) => {
    if (index !== activeImage) {
      setExiting(true);
      setTextExiting(true);
      setTimeout(() => {
        setActiveImage(index);
        setExiting(false);
        setTimeout(() => {
          setTextExiting(false);
        }, 720);
      }, 500);
    }
  };

  const handlePrevClick = () => {
    const prevIndex = (activeImage - 1 + images.length) % images.length;
    handleButtonClick(prevIndex);
  };

  const handleNextClick = () => {
    const nextIndex = (activeImage + 1) % images.length;
    handleButtonClick(nextIndex);
  };

  return (
    <>
      <div className="Top-container h-screen">
        {activeImage !== null && (
          <>
            <div
              className={`absolute overflow-x-hidden -top-[60rem] -left-[24rem] h-[85rem] w-[85rem] ${
                exiting ? "exit-animation" : "enter-animation"
              }`}
            >
              <div className="Slider relative h-full w-full"></div>

              <div className="absolute right-[4rem] top-[6rem] z-[99]">
                <img
                  key={activeImage}
                  src={images[activeImage].src}
                  alt={images[activeImage].label}
                  className={`mx-auto z-50 h-[23.5rem]`}
                />
              </div>
            </div>
          </>
        )}

        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`HeroText absolute top-[15rem] left-[29rem] z-50 text-[#494444] ${
            textExiting ? "text-exit-animation" : "text-enter-animation"
          }`}
        >
          <h1 className="font-Kanit font-extralight text-[5.5rem]">
            {images[activeImage].label.split(" ")[0]}
          </h1>
          <h1 className="font-Kanit font-extrabold text-[5.5rem] -mt-10 tracking-tighter">
            {images[activeImage].label.split(" ")[1]}
          </h1>
        </div>
      </div>
      <div className="LowButtons z-50 absolute bottom-5 mb-12 ml-40 flex items-center gap-4">
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="text-2xl mr-4 font-bold px-4 py-2 rounded-lg bg-[#F3E2D3] hover:bg-[#EFCDAB] transition-all" onClick={handlePrevClick}>
          &lt;
        </button>
        {images.map((image, index) => (
          <button
            key={index}
            className={`btn flex flex-col items-center h-32 w-26 ease-in ${
              activeImage === index
                ? "shadow-[12px_25px_30px_rgba(0,0,0,0.3)] scale-125"
                : "hov"
            }`}
            onClick={() => handleButtonClick(index)}
          >
            <img className="h-[5.5rem]" src={image.src} alt={image.label} />
            <div className="text-xs mt-2">{image.label.split(" ")[0]}</div>
          </button>
        ))}
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="text-2xl ml-4 font-bold px-4 py-2 rounded-lg bg-[#F3E2D3] hover:bg-[#EFCDAB] transition-all" onClick={handleNextClick}>
          &gt;
        </button>
      </div>
    </>
  );
};

export default Hero;