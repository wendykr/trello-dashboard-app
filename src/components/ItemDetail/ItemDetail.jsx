import React from 'react';

export const ItemDetail = ({ text }) => {
  return (
    <div
      className="w-full h-full bg-black round absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100]">{ text }</div>
  )
}