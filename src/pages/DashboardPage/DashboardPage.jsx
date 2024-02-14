import React, { useState, useEffect, useRef } from 'react';
import { columnsData } from '../../constants/columns';
import { cardsData } from '../../constants/cards';
import { v4 as uuidv4 } from 'uuid';
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Column } from '../../components/Column/Column';
import { ButtonAddColumn } from '../../components/ButtonAddColumn/ButtonAddColumn';
import { FormColumn } from '../../components/FormColumn/FormColumn';
import { CardDetail } from '../../components/CardDetail/CardDetail';
import { useDetail } from '../../context/DetailContext';

export const DashboardPage = () => {

  const [isClickButtonClose, setIsClickButtonClose] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');
  const [columns, setColumns] = useState(() => {
    const storedColumns = JSON.parse(localStorage.getItem("columns"));
    return storedColumns || columnsData;
  });
  const [rows, setRows] = useState(() => {
    const storedRows = JSON.parse(localStorage.getItem("cards"));
    return storedRows || cardsData;
  });
  const refValueColumn = useRef(null);

  const {
    isShowDetailItem, setIsShowDetailItem,
    detailHeadline, detailTitle, setDetailTitle, detailSrc, detailDescription
  } = useDetail();

  useEffect(() => {
    if (!localStorage.getItem("columns")) {
      localStorage.setItem("columns", JSON.stringify(columnsData));
    }

    if (!localStorage.getItem("cards")) {
      localStorage.setItem("cards", JSON.stringify(cardsData));
    }
  }, []);

  useEffect(() => {
    if (isClickButtonClose && refValueColumn.current) {
      refValueColumn.current.focus();
    }
  }, [isClickButtonClose, refValueColumn]);

  const onClickButtonClose = () => {
    setIsClickButtonClose(false);
    setIsShowDetailItem(false);
  }

  const onClickButtonAddColumn = () => {
    setIsClickButtonClose(true);
  }

  const onClickButton = (event) => {
    event.preventDefault();
    if (textareaValue) {
      const existingName = columns.find(column => column.name === textareaValue);

      if (existingName) {
        // add red outlet for textarea
        refValueColumn.current.focus();
        toast.error('Sloupec s tímto názvem již existuje!', {
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
      } else {
        const newColumn = {
          id: uuidv4(),
          name: textareaValue,
        };
  
        const updatedColumns = [...columns, newColumn];
        setColumns(updatedColumns);
  
        localStorage.setItem("columns", JSON.stringify(updatedColumns));
  
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
      }
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
    const clickedColumn = columns.find(oneTask => oneTask.id === clickedTaskId);
  
    if (clickedColumn) {
      const copiedColumn = {
        ...clickedColumn,
        id: uuidv4(),
        name: `Kopie ${clickedColumn.name}`
      };
  
      const copiedCards = rows
        .filter(card => card.status === clickedColumn.name)
        .map(card => ({
          ...card,
          id: uuidv4(),
          status: `Kopie ${card.status}`
        }));
  
      const updatedColumns = [...columns, copiedColumn];
      setColumns(updatedColumns);
      localStorage.setItem("columns", JSON.stringify(updatedColumns));
  
      const updatedRows = [...rows, ...copiedCards];
      setRows(updatedRows);
      localStorage.setItem("cards", JSON.stringify(updatedRows));
  
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

  const onUpdateTitle = (columnId, newTitle) => {
    const currentColumnName = columns.find(column => column.id === columnId)?.name;
  
    const updatedColumns = columns.map(column => {
      if (column.id === columnId) {
        return { ...column, name: newTitle };
      }
      return column;
    });
  
    const updatedRows = rows.map(row => {
      if (row.status === currentColumnName) {
        return { ...row, status: newTitle };
      }
      return row;
    });
  
    setColumns(updatedColumns);
    localStorage.setItem("columns", JSON.stringify(updatedColumns));
  
    setRows(updatedRows);
    localStorage.setItem("cards", JSON.stringify(updatedRows));
  };

  return (
    <main className="flex bg-gradient-to-br from-[#228cd5] via-[#228cd5] to-[#37B4C3]">
      <div className="w-screen h-screen px-10 sm:px-4 py-10 overflow-x-auto sm:flex items-start ">
        <div id="overlay" className={`${isShowDetailItem ? '' : 'hidden'} fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-10`}></div>
        {
          columns.map(oneTask => (
            <Column
              title={oneTask.name}
              columns={columns}
              setColumns={setColumns}
              rows={rows}
              setRows={setRows}
              key={oneTask.id}
              id={oneTask.id}
              onClickCopy={onClickCopy}
              detailTitle={detailTitle}
              onUpdateTitle={(newTitle) => onUpdateTitle(oneTask.id, newTitle)}
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
              <ButtonAddColumn onClickAddColumn={onClickButtonAddColumn} />
          }
        </div>
      </div>
      {isShowDetailItem && <CardDetail title={detailTitle} headline={detailHeadline} src={detailSrc} description={detailDescription} onClickButtonClose={onClickButtonClose} onUpdateTitleValue={onUpdateTitleValue} /> }
    </main>
  )
}