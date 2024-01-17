import React from 'react';

export const Textarea = () => {
  return (
    <textarea
    className="w-full p-3 border-[2px] border-[#eaebee] focus:border-[#ced0d7] rounded-lg outline-none"
    rows="3"
    placeholder="Zadej název pro tuto kartu..."
  ></textarea>
  )
}
