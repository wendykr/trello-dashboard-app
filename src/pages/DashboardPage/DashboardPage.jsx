import React, { useState, useEffect, useRef } from 'react';
import { listsData } from '../../constants/lists';
import { tasksData } from '../../constants/tasks';
import { v4 as uuidv4 } from 'uuid';
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { List } from '../../components/List/List';
import { NewColumn } from '../../components/NewColumn/NewColumn';
import { FormColumn } from '../../components/FormColumn/FormColumn';
import { TaskDetail } from '../../components/TaskDetail/TaskDetail';
import { useDetail } from '../../context/DetailContext';

export const DashboardPage = () => {

  const [isClickButtonClose, setIsClickButtonClose] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');
  const [columns, setColumns] = useState(listsData);
  const refValueColumn = useRef(null);

  const {
    isShowDetailItem, setIsShowDetailItem,
    detailHeadline, detailTitle, setDetailTitle, detailSrc, detailDescription
  } = useDetail();

  useEffect(() => {
    if (isClickButtonClose && refValueColumn.current) {
      refValueColumn.current.focus();
    }
  }, [isClickButtonClose, refValueColumn]);

  const onClickButtonClose = () => {
    setIsClickButtonClose(false);
    setIsShowDetailItem(false);
  }

  const onClickNewColumn = () => {
    setIsClickButtonClose(true);
  }

  const onClickButton = (event) => {
    event.preventDefault();
    if (textareaValue) {
      const newColumn = {
        id: uuidv4(),
        name: textareaValue,
      };

      setColumns(prevColumns => [...prevColumns, newColumn]);

      setTextareaValue('');
      toast.success('Přidaný nový sloupec.', {
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
      refValueColumn.current.focus();
      toast.error('Zadej jméno sloupce!', {
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

  const onChangeValue = (event) => {
    event.preventDefault();
    setTextareaValue(event.target.value);
  }

  const onBlurHandler = () => {
    setIsClickButtonClose(false);
  };

  const onClickCopy = (clickedTaskId) => {
    console.log('click');

    const clickedColumn = columns.find(oneTask => oneTask.id === clickedTaskId);

    if (clickedColumn) {
      const copiedColumn = {
        ...clickedColumn,
        id: uuidv4(),
      };

      setColumns([...columns, copiedColumn]);
      toast.success('Sloupec byl duplikován.', {
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
            <List
              title={oneTask.name}
              cards={tasksData}
              key={oneTask.id}
              id={oneTask.id}
              onClickCopy={onClickCopy}
              detailTitle={detailTitle}
            />
          ))
        }
        <div>
          {
            isClickButtonClose ?
              <FormColumn
                onClickButtonClose={onClickButtonClose}
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
      {isShowDetailItem && <TaskDetail title={detailTitle} headline={detailHeadline} src={detailSrc} description={detailDescription} onClickButtonClose={onClickButtonClose} onUpdateTitleValue={onUpdateTitleValue} /> }
    </main>
  )
}