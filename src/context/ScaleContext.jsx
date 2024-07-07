import React, { createContext, useState, useContext } from 'react';

const ScaleContext = createContext();

export const ScaleProvider = ({ children }) => {
  const [scale, setScale] = useState(1);

  const handleMouseEnter = () => setScale(7);
  const handleMouseLeave = () => setScale(1);

  return (
    <ScaleContext.Provider value={{ scale, handleMouseEnter, handleMouseLeave }}>
      {children}
    </ScaleContext.Provider>
  );
};

export const useScale = () => useContext(ScaleContext);