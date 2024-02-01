import React from 'react';

export const Textarea = ({ rows, placeholder, height, padding, shadow, border, bold, font, onChangeValue, onBlurHandler, textareaValue, refValue }) => {

  return (
    <textarea
      className={`w-full ${height} ${padding} ${shadow} rounded-lg outline-none ${border} ${bold} ${font}`}
      rows={rows}
      placeholder={placeholder}
      onChange={onChangeValue}
      onBlur={onBlurHandler}
      value={textareaValue}
      ref={refValue}
    ></textarea>
  )
}