import React from 'react';
import { useLabel } from '../../context/LabelContext';

export const Label = ({ color, title, showDetail }) => {

  const { isClickLabel, onClickLabel } = useLabel();

  return (
    <div
      style={{ backgroundColor: `#${color}` }}
      className={(isClickLabel || showDetail) ? 'min-w-10 h-auto mr-2 px-3 py-0.5 rounded-[4px] text-[10px] text-center' : 'w-10 h-2 mr-2 rounded-full text-[10px] text-center'}
      onClick={onClickLabel}
    >
      {(isClickLabel || showDetail) ? title : ''}
    </div>
  );
};