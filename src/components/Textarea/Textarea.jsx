import React from 'react';

export const Textarea = ( { rows, placeholder, shadow, border } ) => {
  return (
    <textarea
      className={`w-full p-3 ${shadow} rounded-lg outline-none ${border}`}
      rows={rows}
      placeholder={placeholder}
    ></textarea>
  )
}
