import React, { useState } from 'react';

export const Textarea = ({ rows, placeholder, height, padding, shadow, border, bold, onChangeValue, textareaValue }) => {

  return (
    <textarea
      className={`w-full ${height} ${padding} ${shadow} rounded-lg outline-none ${border} ${bold}`}
      rows={rows}
      placeholder={placeholder}
      onChange={onChangeValue}
      value={textareaValue}
    ></textarea>
  )
}