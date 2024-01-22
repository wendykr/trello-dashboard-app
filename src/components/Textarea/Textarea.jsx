import React from 'react';

export const Textarea = ({ rows, placeholder, shadow, border, onChangeValue }) => {

  return (
    <textarea
      className={`w-full p-3 ${shadow} rounded-lg outline-none ${border}`}
      rows={rows}
      placeholder={placeholder}
      onChange={onChangeValue}
    ></textarea>
  )
}
