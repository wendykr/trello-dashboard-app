import React, { createContext, useContext, useState } from 'react';

export const LabelContext = createContext();

export const LabelProvider = ({ children }) => {
  const [isClickLabel, setIsClickLabel] = useState(false);

  const onClickLabel = (event) => {
    event.stopPropagation();
    setIsClickLabel(prevState => !prevState);
  };

  return (
    <LabelContext.Provider value={{
      isClickLabel, setIsClickLabel,
      onClickLabel,
    }}>
      {children}
    </LabelContext.Provider>
  );
};

export const useLabel = () => useContext(LabelContext);