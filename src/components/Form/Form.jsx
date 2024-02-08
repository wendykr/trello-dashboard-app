import React from 'react';
import { Button } from '../Button/Button';
import { Textarea } from '../Textarea/Textarea';
import { ButtonClose } from '../ButtonClose/ButtonClose';

export const Form = ({ onClickButton, onClickButtonClose, onChangeValue, onBlurHandler, textareaValue, refValue }) => {

  return (
    <form action="" className="mx-1 my-2">
      <Textarea
        padding="p-3"
        rows="3"
        placeholder="Zadej název pro tuto kartu..."
        shadow="shadow-[0_1px_0px_rgba(9,30,66,0.3)]"
        onChangeValue={onChangeValue}
        onBlurHandler={onBlurHandler}
        textareaValue={textareaValue}
        refValue={refValue}
      />
      <div className="flex flex-row items-center gap-1">
        <Button text="Přidat kartu" onClickButton={onClickButton} />
        <ButtonClose onClickButtonClose={onClickButtonClose} />
      </div>
    </form>
  )
}