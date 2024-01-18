import React from 'react';

export const Textarea = ( { rows, placeholder } ) => {
  return (
    <textarea
      className="w-full p-3 border-[2px] border-[#eaebee] focus:border-[#ced0d7] rounded-lg outline-none"
      rows={rows}
      placeholder={placeholder}
    ></textarea>
  )
}
