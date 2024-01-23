import React from 'react';
import { Button } from '../Button/Button';
import { Textarea } from '../Textarea/Textarea';
import { LinkClose } from '../LinkClose/LinkClose';

export const FormColumn = ({ onClickLinkClose, onClickButton, onChangeValue, textareaValue }) => {

  return (
    <section className="mb-10 sm:mb-0 sm:mx-10 p-3 w-full sm:w-80 bg-[#f1f2f4] text-gray-800 rounded-xl shadow-xl flex-shrink-0">
      <form action="">
        <Textarea
          padding="px-3 py-2"
          rows="1"
          placeholder="Zadej jméno sloupce..."
          border="border-[2px] border-[#5881fd]"
          onChangeValue={onChangeValue}
          textareaValue={textareaValue}
        />
        <div className="flex flex-row items-center gap-1">
          <Button text="Přidat sloupec" onClickButton={onClickButton} />
          <LinkClose onClickLinkClose={onClickLinkClose} />
        </div>
      </form>
    </section>
  )
}
