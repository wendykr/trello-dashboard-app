import React from 'react';

export const Label = ({ color, title, onClickLabel, isClicked }) => {
  return (
    <span
      style={{ backgroundColor: `#${color}` }}
      className={isClicked ? 'min-w-10 h-auto mr-2 px-3 py-0.5 rounded-[4px] text-[10px] text-center' : 'w-10 h-2 mr-2 rounded-full text-[10px] text-center'}
      onClick={onClickLabel}
    >
      {isClicked ? title : ''}
    </span>
  );
};