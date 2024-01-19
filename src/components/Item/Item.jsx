import React from 'react';
import { Label } from '../Label/Label';
import { Tag } from '../Tag/Tag';
import { PopupList } from '../PopupList/PopupList';
import { LinkEdit } from '../LinkEdit/LinkEdit';

export const Item = ({ text, src }) => {
  return (
    <li className="relative z-20 mx-2 my-2 bg-white text-[#1d284c] leading-snug cursor-pointer hover:outline hover:outline-2 hover:outline-[#5881fd] rounded-lg shadow-[0_1px_0px_rgba(9,30,66,0.3)]">
      {
        src && <figure className="flex items-center"><img className="max-h-52 sm:max-h-36 rounded-t-lg" src={src} alt="Vite Header" /></figure>
      }
      <div className="p-2">
        <aside className="mt-0.5 mb-1.5 flex">
          <Label color="red-400" />
          <Label color="yellow-400" />
          <Label color="green-400" />
        </aside>
        <p contenteditable="" className="outline-none">
          { text }
        </p>
        <aside className="mb-0.5 mt-1.5 flex gap-1.5">
          <Tag category="design" />
          <Tag category="code" />
        </aside>
      </div>
      <PopupList />
      <LinkEdit />
    </li>
  )
}
