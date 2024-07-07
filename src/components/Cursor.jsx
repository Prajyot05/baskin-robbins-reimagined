import React, { useState, useEffect, useRef } from 'react';
import { useScale } from '../context/ScaleContext';

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const updatePosition = () => {
    setDelayedPosition((prev) => ({
      x: prev.x + (position.x - prev.x) * 0.2,
      y: prev.y + (position.y - prev.y) * 0.2,
    }));
    requestRef.current = requestAnimationFrame(updatePosition);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updatePosition);

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [position]);

  const { scale } = useScale();

  const cursorStyle = {
    top: `${delayedPosition.y}px`,
    left: `${delayedPosition.x}px`,
    transform: `translate(-50%, -50%) scale(${scale})`,
    transition: 'transform ease 0.3s'
  };

  return (
    <div
      className="cursor-outline hidden md:block fixed rounded-full w-[10px] h-[10px] bg-[#F05196] opacity-70 z-[9999999] pointer-events-none mix-blend-difference"
      style={cursorStyle}
    ></div>
  );
}

export default Cursor;