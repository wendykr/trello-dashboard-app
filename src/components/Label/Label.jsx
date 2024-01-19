import React from 'react'

export const Label = ({ color }) => {

  return (
    <span style={{ backgroundColor: `#${color}` }} className="w-10 h-2 mr-2 rounded-full"></span>
  )
}
