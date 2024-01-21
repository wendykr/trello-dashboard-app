import React from 'react';
import { Button } from '../Button/Button';
import { Textarea } from '../Textarea/Textarea';
import { LinkClose } from '../LinkClose/LinkClose';

export const Form = ({ onClickButton, onClickLinkClose }) => {
  return (
    <form action="" className="m-2">
      <Textarea rows="3" placeholder="Zadej název pro tuto kartu..." shadow="shadow-[0_1px_0px_rgba(9,30,66,0.3)]" />
      <div className="flex flex-row items-center gap-1">
        <Button text="Přidat kartu" onClickButton={onClickButton} />
        <LinkClose onClickLinkClose={onClickLinkClose} />
      </div>
    </form>
  )
}
