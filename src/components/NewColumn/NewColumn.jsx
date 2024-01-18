import React from 'react'

export const NewColumn = () => {
  return (
    <button 
      className="mb-10 sm:mb-0 sm:mx-10 p-3 w-full sm:w-80 bg-[#ffffff3d] hover:bg-[#a6c5e229] text-white font-bold rounded-xl cursor-pointer flex justify-start items-center gap-1 flex-shrink-0">
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg> Přidej další sloupec
    </button>
  )
}
