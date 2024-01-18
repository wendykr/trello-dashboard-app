import React from 'react';

export const PopupLink = ({ icon, link }) => {
  return (
    <li className="flex">
      <a href="#"
        className="px-3 py-2 bg-black bg-opacity-60 hover:bg-opacity-100 rounded-[3px] flex flex-row gap-2 items-center">{ icon }{ link }</a>
    </li>
  )
}
