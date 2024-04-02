import React from 'react';
import { ButtonClose } from '../ButtonClose/ButtonClose';
import { labelsDatabase } from '../../constants/labelsDatabase';
import { LabelItem } from '../LabelItem/LabelItem';

export const FormLabels = ({ setIsShowFormLabels }) => {
  return (
    <div className="absolute top-40 left-20 p-4 w-[350px] h-auto bg-white rounded-[8px] shadow-[0px_0px_6px_1px_#00000024]">
      <div className="flex justify-center">
        <h2 className="px-[10px] w-full h-10 text-base text-[#44546f] font-semibold flex justify-center items-center">Štítky</h2><ButtonClose onClickButtonClose={() => setIsShowFormLabels(false)} />
      </div>
      <div className="my-4 flex flex-col gap-2">
        {
          labelsDatabase.map((label, index) => <LabelItem color={label.color} title={label.title} key={index} />)
        }
      </div>
      <button
        className="px-3 py-1.5 w-full hover:bg-[#e5e6ea] text-[16px] text-[#44546f] font-bold rounded-[3px]"
        >Vytvořit nový štítek
      </button>
    </div>
  )
}