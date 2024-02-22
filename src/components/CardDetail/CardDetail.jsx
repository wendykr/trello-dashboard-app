import React, { useState, useEffect, useRef } from 'react';
import { toast, Slide } from 'react-toastify';
import { ButtonClose } from '../ButtonClose/ButtonClose';
import { Textarea } from '../Textarea/Textarea';

export const CardDetail = ({
    detailCard,
    setIsShowDetailItem,
    onUpdateTitleValue,
    onUpdateDescriptionValue
  }) => {
  
  const { title, headline, src, description } = detailCard;
  const [detailValueCard, setDetailValueCard] = useState({
    titleValue: title,
    descriptionValue: description
  });
  const { titleValue, descriptionValue } = detailValueCard;

  const [isClickEditHeading, setIsClickEditHeading] = useState(false);
  const [isClickEditDescription, setIsClickEditDescription] = useState(false);
  const refTitleValue = useRef(null);
  const refDescriptionValue = useRef(null);

  useEffect(() => {
    (isClickEditHeading && refTitleValue.current) && refTitleValue.current.select();
    (isClickEditDescription && refDescriptionValue.current) && refDescriptionValue.current.focus();
  }, [isClickEditHeading, isClickEditDescription]);

  const onChangeValueTitle = (event) => {
    setDetailValueCard((prevDetailValueCard) => ({ ...prevDetailValueCard, titleValue: event.target.value }));
  }

  const onChangeDescriptionValue = (event) => {
    setDetailValueCard((prevDetailValueCard) => ({ ...prevDetailValueCard, descriptionValue: event.target.value }));
  }

  const onClickEditHeading = () => {
    setIsClickEditHeading(true);
  }

  const onBlurHandlerHeading = () => {
    if (titleValue) {
      setIsClickEditHeading(false);
    } else {
      toast.error('Název karty nesmí být prázdný!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        onClose: () => {
          refTitleValue.current.focus();
        }
      });
      setIsShowDetailItem(true);
    }
  };

  const onClickEditDescription = () => {
    setIsClickEditDescription(true);
  }

  const onClickButtonClose = () => {
    if (titleValue) {
      onUpdateDescriptionValue(descriptionValue);
      onUpdateTitleValue(titleValue);
      setIsShowDetailItem(false);
    }
  }

  const onBlurHandlerDescription = () => {
    setIsClickEditDescription(false);
  };

  return (
    <div className="w-[60%] h-[80%] bg-[#f1f2f4] text-[#172b4d] rounded-[8px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100]">
      {src && <figure><img className="sm:max-h-36 max-h-52 w-full rounded-t-[8px]" src={src} alt="***" /></figure>}
      <div className="p-10">
        <div className="mx-[-10px] flex flex-row justify-between gap-2">
          {isClickEditHeading ? (
            <Textarea
              height="h-[40px]"
              padding="px-2 py-1"
              font="text-xl"
              border="border-[2px] border-[#5881fd]"
              bold="font-semibold"
              textareaValue={titleValue}
              onChangeValue={onChangeValueTitle}
              onBlurHandler={onBlurHandlerHeading}
              refValue={refTitleValue}
            />
          ) : (
            <h2 onClick={onClickEditHeading} className="px-[10px] w-full h-10 text-xl font-semibold flex items-center">{titleValue}</h2>
          )}
          <ButtonClose onClickButtonClose={onClickButtonClose} />
        </div>
        <p>Ve sloupci <span className="underline">{headline}</span></p>
        <div className="mt-6">
          <h3 className="mb-4 font-semibold">Popis</h3>
          {isClickEditDescription ? (
            <Textarea
              padding="px-4 py-2"
              textareaValue={descriptionValue}
              onChangeValue={onChangeDescriptionValue}
              onBlurHandler={onBlurHandlerDescription}
              refValue={refDescriptionValue}
            />
          ) : (
            descriptionValue ? (
              <div onClick={onClickEditDescription} className="cursor-pointer">{descriptionValue}</div>
            ) : (
              <div onClick={onClickEditDescription} className="px-3 py-2 min-h-14 bg-[#e5e6ea] hover:bg-[#d1d4db] text-[14px] font-semibold rounded-[3px] cursor-pointer">
                {!descriptionValue ? 'Detailnější popis...' : descriptionValue}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}