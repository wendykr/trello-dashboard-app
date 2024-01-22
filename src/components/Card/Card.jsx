import React, { useState } from 'react';
import { Checklist } from '../Checklist/Checklist';
import { AddCard } from '../AddCard/AddCard';
import { Form } from '../Form/Form';
import { LinkCopy } from '../LinkCopy/LinkCopy';
import { LinkMore } from '../LinkMore/LinkMore';

export const Card = ({ title, cards, isClickLabel, onClickLabel }) => {

  const [isClickAddCard, setIsClickAddCard] = useState(false);
  const [isClickLinkClose, setIsClickLinkClose] = useState(true);
  const [textareaValue, setTextareaValue] = useState('');

  const onClickAddCard = () => {
    setIsClickAddCard(true);
    setIsClickLinkClose(false);
  }

  const onClickLinkClose = () => {
    setIsClickLinkClose(true);
    setIsClickAddCard(false);
  }

  const onClickButton = (event) => {
    event.preventDefault();
    if (textareaValue) {
      setTextareaValue('');
      onClickLinkClose();
    } else {
      // add red outlet for textarea
    }
  }

  const onChangeValue = (event) => {
    event.preventDefault();
    setTextareaValue(event.target.value);
  }

  return (
    <section className="flex flex-col max-h-full mb-10 sm:mb-0 sm:mx-10 p-3 w-full sm:w-80 bg-[#f1f2f4] text-gray-800 rounded-xl shadow-xl flex-shrink-0 gap-0.5">
      <div className="flex flex-row justify-between items-center">
        <h3 className="pl-3 py-[6px] text-[#172b4d] font-bold text-transform:uppercase leading-none outline-none">{title}</h3>
        <LinkMore />
      </div>

      <div className="h-full overflow-x-hidden overflow-y-auto">
        <Checklist
          cards={cards}
          isClickLabel={isClickLabel}
          onClickLabel={onClickLabel}
        />

        {
          isClickAddCard && <Form onClickLinkClose={onClickLinkClose} onClickButton={onClickButton} onChangeValue={onChangeValue} textareaValue={textareaValue} />
        }
      </div>

      {
        !isClickAddCard &&
          <div className="flex flex-row">
            <AddCard onClickAddCard={onClickAddCard} />
            <LinkCopy />
          </div>
      }

    </section>
  )
}