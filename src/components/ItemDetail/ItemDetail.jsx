import React from 'react';
import { LinkClose } from '../LinkClose/LinkClose';

export const ItemDetail = ({ title, headline, src, onClickLinkClose,  }) => {
  return (
    <div
      className="w-[60%] h-[80%] bg-[#f1f2f4] text-[#172b4d] rounded-[8px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100]">
        { src && <figure><img className="sm:max-h-36 max-h-52 w-full rounded-t-[8px]" src={src} alt="***" /></figure> }
        <div className="p-10">
          <div className="flex flex-row justify-between"> 
            <h2 className="text-xl font-semibold">{ title }</h2><LinkClose onClickLinkClose={onClickLinkClose} />
          </div>
          <p>Ve sloupci <span className="underline">{headline}</span></p>
          <div className="mt-6">Popis</div>
        </div>

    </div>
  )
}