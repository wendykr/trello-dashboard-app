import React, { useState, useEffect, useRef } from 'react';
import { tasksData } from '../../constants/tasks';
import { Card } from '../../components/Card/Card';
import { NewColumn } from '../../components/NewColumn/NewColumn';
import { FormColumn } from '../../components/FormColumn/FormColumn';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail';
import { useDetail } from '../../context/DetailContext';

export const DashboardPage = () => {

  const [isClickLinkClose, setIsClickLinkClose] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');
  const [columns, setColumns] = useState(tasksData);
  const refValueColumn = useRef(null);

  const {
    isShowDetailItem, setIsShowDetailItem,
    detailHeadline, detailTitle, setDetailTitle, detailSrc
  } = useDetail();

  useEffect(() => {
    if (isClickLinkClose && refValueColumn.current) {
      refValueColumn.current.focus();
    }
  }, [isClickLinkClose, refValueColumn]);

  const onClickLinkClose = () => {
    setIsClickLinkClose(false);
    setIsShowDetailItem(false);
  }

  const onClickNewColumn = () => {
    setIsClickLinkClose(true);
  }

  const onClickButton = (event) => {
    event.preventDefault();
    if (textareaValue) {
      const newColumn = {
        id: Date.now(),
        title: textareaValue,
        cards: [
        ]
      };

      setColumns(prevColumns => [...prevColumns, newColumn]);

      setTextareaValue('');
      onClickLinkClose();
    } else {
      // add red outlet for textarea
      refValueColumn.current.focus();
    }
  }

  const onChangeValue = (event) => {
    event.preventDefault();
    setTextareaValue(event.target.value);
  }

  const onBlurHandler = () => {
    setIsClickLinkClose(false);
  };

  const onClickCopy = (clickedTaskId) => {

    const clickedColumn = columns.find(oneTask => oneTask.id === clickedTaskId);

    if (clickedColumn) {
      const copiedColumn = {
        ...clickedColumn,
        id: Date.now(),
      };

      setColumns([...columns, copiedColumn]);
    }
  };

  const onUpdateTitleValue = (newTitle) => {
    setDetailTitle(newTitle);
  };

  return (
    <main className="flex bg-gradient-to-br from-[#228cd5] via-[#228cd5] to-[#37B4C3]">
      <div className="w-screen h-screen px-10 sm:px-4 py-10 overflow-x-auto sm:flex items-start ">
        <div id="overlay" className={`${isShowDetailItem ? '' : 'hidden'} fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-10`}></div>
        {
          columns.map(oneTask => (
            <Card
              title={oneTask.title}
              cards={oneTask.cards}
              key={oneTask.id}
              id={oneTask.id}
              onClickCopy={onClickCopy}
              detailTitle={detailTitle}
            />
          ))
        }
        <div>
          {
            isClickLinkClose ?
              <FormColumn
                onClickLinkClose={onClickLinkClose}
                onClickButton={onClickButton}
                onChangeValue={onChangeValue}
                textareaValue={textareaValue}
                refValue={refValueColumn}
                onBlurHandler={onBlurHandler}
              />
              :
              <NewColumn onClickNewColumn={onClickNewColumn} />
          }
        </div>
      </div>
      {isShowDetailItem && <ItemDetail title={detailTitle} headline={detailHeadline} src={detailSrc} onClickLinkClose={onClickLinkClose} onUpdateTitleValue={onUpdateTitleValue} /> }
    </main>
  )
}