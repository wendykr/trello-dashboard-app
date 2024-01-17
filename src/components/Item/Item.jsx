import React from 'react'

export const Item = ({ text }) => {
  return (
    <li className="my-2 p-3 bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-400 rounded">{ text }</li>
  )
}
