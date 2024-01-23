import React, { useState, useEffect, useRef } from 'react';
import { Checklist } from '../Checklist/Checklist';
import { AddCard } from '../AddCard/AddCard';
import { Form } from '../Form/Form';
import { LinkCopy } from '../LinkCopy/LinkCopy';
import { LinkMore } from '../LinkMore/LinkMore';
import { Textarea } from '../Textarea/Textarea';

export const Card = ({ title, cards, isClickLabel, onClickLabel }) => {

  const [isClickAddCard, setIsClickAddCard] = useState(false);
  const [isClickLinkClose, setIsClickLinkClose] = useState(true);
  const [textareaValue, setTextareaValue] = useState('');
  const [rows, setRows] = useState(cards);
  const [isClickEditHeading, setIsClickEditHeading] = useState(false);
  const refValue = useRef(null);

  useEffect(() => {
    if (isClickEditHeading && refValue.current) {
      refValue.current.focus();
    }
  }, [isClickEditHeading, refValue]);

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
      const newRow = {
        id: Date.now(),
        title: textareaValue
      };

      setRows(prevRows => [...prevRows, newRow]);

      setTextareaValue('');
      onClickLinkClose();
    } else {
      // add red outlet for textarea
    }
  }

  const onChangeValue = (event) => {
    console.log(event.target.value);
    event.preventDefault();
    setTextareaValue(event.target.value);
  }

  const onClickEditHeading = () => {
    setIsClickEditHeading(true);
  }

  const onBlurHandler = () => {
    setIsClickEditHeading(false);
  };

  return (
    <section className="flex flex-col max-h-full mb-10 sm:mb-0 sm:mx-10 p-3 w-full sm:w-80 bg-[#f1f2f4] text-gray-800 rounded-xl shadow-xl flex-shrink-0 gap-0.5">
      <div className="mx-1 flex flex-row justify-between items-center gap-1">
        { isClickEditHeading ?
          <Textarea height="h-8" padding="px-1.5 py-0.5" border="border-[2px] border-[#5881fd]" bold="font-bold" textareaValue={title} onChangeValue={onChangeValue} onBlurHandler={onBlurHandler} refValue={refValue} /> :
          <h3
            className="pl-2 py-[6px] text-[#172b4d] font-bold text-transform:uppercase leading-none outline-none cursor-pointer flex-grow"
            onClick={onClickEditHeading} 
            >{title}
          </h3>}

        <LinkMore />
      </div>

      <div className="h-full overflow-x-hidden overflow-y-auto">
        <Checklist
          cards={rows}
          isClickLabel={isClickLabel}
          onClickLabel={onClickLabel}
        />

        {
          isClickAddCard && <Form onClickLinkClose={onClickLinkClose} onClickButton={onClickButton} onChangeValue={onChangeValue} textareaValue={textareaValue} />
        }
      </div>

      {
        !isClickAddCard &&
          <div className="flex flex-row mx-1">
            <AddCard onClickAddCard={onClickAddCard} />
            <LinkCopy />
          </div>
      }

    </section>
  )
}