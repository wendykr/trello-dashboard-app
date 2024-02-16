import React, { useState, useEffect, useRef, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CardsList } from '../CardsList/CardsList';
import { ButtonAddCard } from '../ButtonAddCard/ButtonAddCard';
import { Form } from '../Form/Form';
import { ButtonCopy } from '../ButtonCopy/ButtonCopy';
import { ButtonMore } from '../ButtonMore/ButtonMore';
import { Textarea } from '../Textarea/Textarea';
import { useDrop } from 'react-dnd';

export const Column = ({ title, id, rows, setRows, onClickCopy, onClickDetail, isShowDetailItem, onUpdateTitle }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "li",
    drop: (item) => addItemToCard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }));

  const [isClickButtonAddCard, setIsClickButtonAddCard] = useState(false);
  const [isClickButtonClose, setIsClickButtonClose] = useState(true);
  const [textareaValue, setTextareaValue] = useState('');
  const [titleValue, setTitleValue] = useState(title);
  const [isClickEditHeading, setIsClickEditHeading] = useState(false);
  const refValue = useRef(null);
  // const refRows = useRef(rows);

  const titleValueUpperCase = titleValue.toUpperCase();

  // const [filteredRows, setFilteredRows] = useState([]);
  // useEffect(() => {
  //   const filteredRows = rows.filter(card => card.status === title);
  //   setFilteredRows(filteredRows);
  //   refRows.current = rows;
  // }, [rows, title]);

  // const filteredRows = rows.filter(card => card.status === title);

  // const filteredRows = useMemo(() => {
  //   return rows.filter(card => card.status === title);
  // }, [rows, title]);

  const filteredRows = useMemo(() => {
    const filtered = rows.filter(card => card.status === title);
    // refRows.current = rows;
    return filtered;
  }, [rows, title]);

  useEffect(() => {
    if (isClickEditHeading && refValue.current) {
      refValue.current.select();
    }
  }, [isClickEditHeading, refValue]);

  useEffect(() => {
    if (isClickButtonAddCard && refValue.current) {
      refValue.current.focus();
    }
  }, [isClickButtonAddCard, refValue]);

  const onClickButtonAddCard = () => {
    setIsClickButtonAddCard(true);
    setIsClickButtonClose(false);
  }

  const onClickButtonClose = () => {
    setIsClickButtonClose(true);
    setIsClickButtonAddCard(false);
    setTextareaValue('');
  }

  const onClickButton = (event) => {
    event.preventDefault();
    if (textareaValue) {
      const newRow = {
        id: uuidv4(),
        title: textareaValue,
        status: title
      };

      const updatedRows = [...rows, newRow];
      setRows(updatedRows);
      // refRows.current = updatedRows;

      localStorage.setItem("cards", JSON.stringify(updatedRows));

      setTextareaValue('');
      toast.success('Přidaná nová karta.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      onClickButtonClose();
    } else {
      // add red outlet for textarea
      refValue.current.focus();
      toast.error('Zadej název karty!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  }

  const onChangeValueTitle = (event) => {
    event.preventDefault();
    setTitleValue(event.target.value);
  }

  const onChangeValueTextarea = (event) => {
    event.preventDefault();
    setTextareaValue(event.target.value);
  }

  const onClickEditHeading = () => {
    setIsClickEditHeading(true);
  }

  const onBlurHandler = () => {
    setIsClickEditHeading(false);
    onUpdateTitle(titleValue);
  };

  const handleClickCopy = () => {
    onClickCopy(id);
  }

  // const addItemToCard = (id) => {
  //   const draggedCard = refRows.current.find(card => card.id === id);
  //   draggedCard.status = title;

  //   const updatedColumns = [draggedCard, ...refRows.current.filter(card => card.id !== id)];

  //   setRows(updatedColumns);
  //   refRows.current = updatedColumns;
  //   localStorage.setItem("cards", JSON.stringify(updatedColumns));
  // };

  const addItemToCard = (id) => {
    const updatedRows = (prevRows) => {
      const draggedCard = prevRows.find(card => card.id === id);
      draggedCard.status = title;
  
      const updatedColumns = [draggedCard, ...prevRows.filter(card => card.id !== id)];
      localStorage.setItem("cards", JSON.stringify(updatedColumns));
      return updatedColumns;

    }
    setRows(updatedRows);
  };

  return (
    <section ref={drop}
      className={`flex flex-col max-h-full mb-10 sm:mb-0 sm:mx-10 p-3 w-full sm:w-80 ${isOver ? 'bg-[#d4d7de]' : 'bg-[#f1f2f4]'} text-gray-800 rounded-xl shadow-xl flex-shrink-0 gap-0.5`}>
      <div className="mx-1 flex flex-row justify-between items-center gap-1">
        { isClickEditHeading ?
          <form><Textarea
            height="h-8"
            padding="px-1.5 py-0.5"
            border="border-[2px] border-[#5881fd]"
            bold="font-bold"
            textareaValue={titleValue}
            onChangeValue={onChangeValueTitle}
            onBlurHandler={onBlurHandler}
            refValue={refValue}
          /></form> :
          <h3
            className="pl-2 py-[6px] text-[#172b4d] font-bold text-transform:uppercase leading-none outline-none cursor-pointer flex-grow"
            onClick={onClickEditHeading}
            >{titleValueUpperCase}
          </h3>
        }
        <ButtonMore />
      </div>

      <div className="h-full overflow-x-hidden overflow-y-auto">
        <CardsList
          cards={filteredRows}
          onClickDetail={onClickDetail}
          isShowDetailItem={isShowDetailItem}
          titleValue={titleValueUpperCase}
        />

        {
          isClickButtonAddCard && <Form onClickButtonClose={onClickButtonClose} onClickButton={onClickButton} onChangeValue={onChangeValueTextarea} textareaValue={textareaValue} refValue={refValue} onBlurHandler={onBlurHandler}/>
        }
      </div>

      {
        !isClickButtonAddCard &&
          <div className="flex flex-row mx-1">
            <ButtonAddCard onClickAddCard={onClickButtonAddCard} />
            <ButtonCopy handleClickCopy={handleClickCopy} />
          </div>
      }

    </section>
  )
}
