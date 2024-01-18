import React from 'react';
import { Button } from '../Button/Button';
import { Textarea } from '../Textarea/Textarea';
import { LinkClose } from '../LinkClose/LinkClose';

export const Form = () => {
  return (
    <form action="">
      <Textarea rows="3" placeholder="Zadej název pro tuto kartu..." />
      <div className="flex flex-row items-center gap-1">
        <Button text="Přidat kartu" />
        <LinkClose />
      </div>
    </form>
  )
}
