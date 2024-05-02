import React, { useState } from 'react';

export const LabelItem = ({ id, title, color, isCheckedLabel, onChangeLabel }) => {
  const [isCheckedValue, setIsCheckedValue] = useState(isCheckedLabel);

  const handleChange = () => {
    setIsCheckedValue(prev => !prev);
    onChangeLabel(id);
  }

  return (
    <div className="flex flex-row gap-2 items-center">
      <input
        className="w-5 h-5 cursor-pointer"
        type="checkbox"
        checked={isCheckedValue}
        onChange={handleChange}
      />
      <span
        style={{ backgroundColor: `#${color}` }}
        className={`px-3 w-full h-[32px] bg-[#${color}] rounded-[2px] text-[14px] cursor-pointer flex flex-row items-center`}
      >{title}</span>
      <button className="p-1.5 hover:bg-[#e5e6ea] text-[#44546f] rounded-[3px] flex justify-center items-center" title="Upravit">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
        </svg>
      </button>
    </div>
  )
}