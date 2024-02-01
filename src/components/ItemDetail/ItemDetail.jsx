import React, { useState, useEffect, useRef } from 'react';
import { LinkClose } from '../LinkClose/LinkClose';
import { Textarea } from '../Textarea/Textarea';

export const ItemDetail = ({ title, headline, src, onClickLinkClose }) => {
  const [titleValue, setTitleValue] = useState(title);
  const [isClickEditHeading, setIsClickEditHeading] = useState(false);
  const refValue = useRef(null);

  useEffect(() => {
    if (isClickEditHeading && refValue.current) {
      refValue.current.select();
    }
  }, [isClickEditHeading, refValue]);

  const onChangeValueTitle = (event) => {
    event.preventDefault();
    setTitleValue(event.target.value);
  }

  const onClickEditHeading = () => {
    setIsClickEditHeading(true);
  }

  const onBlurHandler = () => {
    setIsClickEditHeading(false);
  };

  return (
    <div
      className="w-[60%] h-[80%] bg-[#f1f2f4] text-[#172b4d] rounded-[8px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100]">
        { src && <figure><img className="sm:max-h-36 max-h-52 w-full rounded-t-[8px]" src={src} alt="***" /></figure> }
        <div className="p-10">
          <div className="mx-[-10px] flex flex-row justify-between">
            {
              isClickEditHeading ?
                <Textarea
                  height="h-[40px]"
                  padding="px-2 py-1"
                  font="text-xl"
                  border="border-[2px] border-[#5881fd]"
                  bold="font-semibold"
                  textareaValue={titleValue}
                  onChangeValue={onChangeValueTitle}
                  onBlurHandler={onBlurHandler}
                  refValue={refValue}
                /> :
                <h2 onClick={onClickEditHeading} className="px-[10px] w-full h-10 text-xl font-semibold flex items-center">{ titleValue }</h2>
            }
            <LinkClose onClickLinkClose={onClickLinkClose} />
          </div>
          <p>Ve sloupci <span className="underline">{headline}</span></p>
          <div className="mt-6">Popis</div>
        </div>

    </div>
  )
}