import React from 'react';
import { LinkClose } from '../LinkClose/LinkClose';

export const ItemDetail = ({ title, onClickLinkClose }) => {
  return (
    <div
      className="p-10 w-[60%] h-[80%] bg-[#f1f2f4] rounded-[8px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100]">
        <div className="flex flex-row justify-between"> 
          <h2 className="text-xl">{ title }</h2><LinkClose onClickLinkClose={onClickLinkClose} />
        </div>
        <div className="">Detail Item</div>

    </div>
  )
}