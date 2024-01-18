import React from 'react';

export const Button = ( { text }) => {
  return (
    <button className="px-3 py-1.5 bg-[#0c66e4] hover:bg-[#0055cc] text-white font-bold rounded-[3px]">
    {text}
    </button>
  )
}
