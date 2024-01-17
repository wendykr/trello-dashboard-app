import React from 'react';
import { Label } from '../Label/Label';

export const Item = ({ text, src }) => {
  return (
    <li className="my-2 bg-white hover:border-[#5881fd] text-[#1d284c] leading-snug cursor-pointer border-[2px] border-[#eaebee] rounded-lg">
      {
        src && <figure className="flex items-center"><img className="max-h-52 sm:max-h-36 rounded-t-lg" src={src} alt="Vite Header" /></figure>
      }
      <div className="p-2">
        <aside className="mt-0.5 mb-1.5 flex">
          <Label color="yellow" />
          <Label color="blue" />
        </aside>
        <p>
          { text }
        </p>
      </div>
    </li>
  )
}
