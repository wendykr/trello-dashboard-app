import React from 'react'

export const Item = ({ text }) => {
  return (
    <li className="my-2 p-2 bg-white hover:border-[#5881fd] text-[#1d284c] leading-snug cursor-pointer border-[2px] border-[#eaebee] rounded-lg">{ text }</li>
  )
}
