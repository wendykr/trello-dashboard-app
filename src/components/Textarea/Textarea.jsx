import React, { useState } from 'react';

export const Textarea = ({ rows, placeholder, shadow, border, onChangeValue, textareaValue }) => {

  return (
    <textarea
      className={`w-full p-3 ${shadow} rounded-lg outline-none ${border}`}
      rows={rows}
      placeholder={placeholder}
      onChange={onChangeValue}
      value={textareaValue}
    ></textarea>
  )
}