import React from 'react';

export const AddCard = ({ onClickAddCard }) => {

  return (
    <button
      href="#"
      className="px-2 py-1 w-full text-[#44546f] hover:bg-[#d1d4db] font-medium rounded-lg flex flex-row items-center gap-1
      "
      onClick={onClickAddCard}>
      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg> Přidat kartu
    </button>
  )
}