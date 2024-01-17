import React from 'react'

export const Tag = ({ category }) => {
  return (
    <a href="#" className="px-1 py-0.5 bg-gray-500 opacity-75 hover:opacity-100 text-xs text-white rounded">{ category }</a>
  )
}
