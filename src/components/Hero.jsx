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
      <div className="Top-container h-screen w-screen overflow-hidden">
        {activeImage !== null && (
          <>
            <div
              className={`absolute overflow-hidden md:-top-[65rem] md:-left-[24rem] -top-[65rem] -left-[28.8rem] h-[85rem] w-[85rem] ${
                exiting ? "exit-animation" : "enter-animation"
              }`}
            >
              <div className="Slider relative h-full w-full overflow-x-hidden overflow-hidden"></div>

              <div className="absolute right-[6rem] top-[6rem] z-[99]">
                <img
                  key={activeImage}
                  src={images[activeImage].src}
                  alt={images[activeImage].label}
                  className={`mx-auto z-50 md:h-[19rem] h-[18rem]`}
                />
              </div>
            </div>
          </>
        )}

        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`HeroText md:absolute mt-12 md:mt-0 md:top-[12rem] relative md:left-[30rem] z-50 text-[#494444] ${
            textExiting ? "text-exit-animation" : "text-enter-animation"
          }`}
        >
          <h1 className="font-Kanit font-extralight text-[3rem] md:text-[4rem] text-center">
            {images[activeImage].label.split(" ")[0]}
          </h1>
          <h1 className="font-Kanit font-extrabold text-[3rem] md:text-[4rem] -mt-5 md:-mt-10 text-center tracking-tighter">
            {images[activeImage].label.split(" ")[1]}
          </h1>
        </div>
      </div>
      <div className="LowButtons z-50 absolute md:bottom-0 -bottom-16 md:mb-12 md:ml-40 mb-24 ml-0 flex items-center md:gap-4">
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="text-2xl md:mr-4 mr-2 font-bold px-3 py-1 md:px-4 md:py-2 rounded-lg bg-[#F3E2D3] hover:bg-[#EFCDAB] transition-all" onClick={handlePrevClick}>
          &lt;
        </button>
        {images.map((image, index) => (
          <button
            key={index}
            className={`btn flex flex-col items-center w-fit md:h-30 md:w-26 ease-in ${
              activeImage === index
                ? "md:shadow-[12px_25px_30px_rgba(0,0,0,0.3)] scale-125 md:border-[.05rem] bg-white"
                : "hov"
            }`}
            onClick={() => handleButtonClick(index)}
          >
            <img className="lg:h-[5rem] h-[2.3rem]" src={image.src} alt={image.label} />
            <div className="lg:text-xs text-[.6rem] mt-2">{image.label.split(" ")[0]}</div>
          </button>
        ))}
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="text-2xl md:ml-4 ml-3 font-bold px-3 py-1 md:px-4 md:py-2 rounded-lg bg-[#F3E2D3] hover:bg-[#EFCDAB] transition-all" onClick={handleNextClick}>
          &gt;
        </button>
      </div>
    </>
  );
};

export default Hero;