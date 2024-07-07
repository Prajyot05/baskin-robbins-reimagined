import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useScale } from '../context/ScaleContext';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function AboutPage({isOpening}) {
    const { handleMouseEnter, handleMouseLeave } = useScale();
    const textRef = useRef(null);
    const pageRef = useRef(null);
    const flavors = [ "Burgundy Cherry", "Cherry Macaroon", "Chocolate", "Chocolate Almond", "Chocolate Chip", "Chocolate Fudge", "Chocolate Mint", "Chocolate Ribbon", "Coffee", "Coffee Candy", "Date Nut", "Eggnog", "French Vanilla", "Lemon Crisp", "Lemon Custard", "Maple Nut", "Peach", "Peppermint Stick", "Pineapple Sherbet", "Raspberry Sherbet", "Rocky Road", "Strawberry", "Vanilla", "Mint Chip", "Cookie Dough", "Butter Pecan", "Salted Caramel", "Pistachio", "Neapolitan", "Mango Sorbet", "Raspberry Ripple", "Cotton Candy", "Toffee Crunch"];

    const trademarkRef = useRef(null);

    useGSAP(() => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: pageRef.current,
            start: "top 20%",
            end: "bottom 50%",
            toggleActions: "play none none none"
        }
      });
      flavors.forEach((flavor) => {
        tl2.to(textRef.current, {
            duration: 0.1,
            textContent: flavor,
            ease: "power2.inOut",
        });
      });

      tl2.to(textRef.current, {
          duration: 0.1,
          fontSize: '5rem',
          onUpdate: () => { textRef.current.innerText = '31 Flavors!'; }
      });
    }, [isOpening]);

    useGSAP(() => {
        gsap.to(trademarkRef.current, {
            rotation: 360,
            duration: 30,
            repeat: -1,
            ease: "linear",
        });
    });
    

  return (
    <div ref={pageRef} className="about-page relative overflow-x-hidden min-h-screen bg-pink-500 p-10 flex">
      <div className='fast-animation-text font-extrabold text-[5rem] mt-5 text-white w-[85%]'>
        <h1>
          <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Celebrate</span> 
          <br /> 
          <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Every Moment</span> <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>with</span></h1>
        <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='animated-text text-[5rem] w-fit' ref={textRef}>{flavors[0]}</h1>
      </div>
      <div className="about-info w-[60%] font-semibold text-white text-lg p-10">
        <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >Baskin Robbins is a well-known international ice cream  chain with a significant presence in India. They offer a wide variety of ice cream flavors, ice cream cakes, sundaes, and beverages. Baskin Robbins in India operates through a franchise model and is popular for its diverse and innovative flavor options, often introducing unique flavors tailored to Indian tastes. The brand maintains its reputation for quality and variety, similar to its global operations.</p>
        <div className="trademark-div mt-20 relative flex justify-start items-center">
            <img className="w-[50%] relative z-10" src="../../assets/baskin-robbins-ice-cream.png" alt="Ice Cream" />
            <img ref={trademarkRef} className="absolute w-[50%]" src="../../assets/trademark.png" alt="Trademark" />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;