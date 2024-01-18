import React from 'react';
import { Button } from '../Button/Button';
import { Textarea } from '../Textarea/Textarea';
import { LinkClose } from '../LinkClose/LinkClose';

export const FormColumn = () => {
  return (
    <section className="hidden mb-10 sm:mb-0 sm:mx-10 p-3 w-full sm:w-80 bg-[#f1f2f4] text-gray-800 rounded-xl shadow-xl flex-shrink-0">
      <form action="">
        <Textarea rows="1" placeholder="Zadej jméno sloupce..." />
        <div className="flex flex-row items-center gap-1">
          <Button text="Přidat sloupec" />
          <LinkClose />
        </div>
      </form>
    </section>
  )
}
