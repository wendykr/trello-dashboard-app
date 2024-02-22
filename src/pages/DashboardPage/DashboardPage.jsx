import React, { useState, useEffect, useRef } from 'react';
import { columnsData } from '../../constants/columns';
import { cardsData } from '../../constants/cards';
import { commentsData } from '../../constants/comments';
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
  const [comments, setComments] = useState(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments"));
    return storedComments || commentsData;
  });
  const refValueColumn = useRef(null);

  const {
    isShowDetailItem, setIsShowDetailItem,
    detailCard, setDetailCard
  } = useDetail();

  useEffect(() => {
    if (!localStorage.getItem("columns")) {
      localStorage.setItem("columns", JSON.stringify(columnsData));
    }

    if (!localStorage.getItem("cards")) {
      localStorage.setItem("cards", JSON.stringify(cardsData));
    }

    if (!localStorage.getItem("comments")) {
      localStorage.setItem("comments", JSON.stringify(commentsData));
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
    setTextareaValue('');

    onUpdateTitleValue(detailCard.id, detailCard.title);
    onUpdateDescriptionValue(detailCard.id, detailCard.description);
  }

  const onClickButtonAddColumn = () => {
    setIsClickButtonClose(true);
  }

  const onClickButton = (event) => {
    event.preventDefault();
    if (textareaValue) {
      const existingName = columns.find(column => column.name.toLowerCase() === textareaValue.toLowerCase());

      if (existingName) {
        // add red outlet for textarea
        refValueColumn.current.focus();
        toast.error(<div dangerouslySetInnerHTML={{ __html: `Sloupec s názvem <strong>${titleValue}</strong> již existuje!` }} />, {
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

      const existingColumn = columns.find(column => column.name === copiedColumn.name);

      if (existingColumn) {
        toast.error(<div dangerouslySetInnerHTML={{ __html: `Nelze duplikovat sloupec s již existujícím názvem <strong>Kopie ${clickedColumn.name}</strong>!` }} />, {
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
    }
  };

  const onUpdateTitleValue = (rowId, newTitle) => {
    setDetailCard((prevDetailCard) => ({ ...prevDetailCard, title: newTitle }));

    setRows((prevRows) => {
      const updatedRows = prevRows.map(row => {
        if (row.id === rowId) {
          return { ...row, title: newTitle };
        }
        return row;
      });
      localStorage.setItem("cards", JSON.stringify(updatedRows));
      return updatedRows;
    });
  };

  const onUpdateDescriptionValue = (rowId, newDescription) => {
    setDetailCard((prevDetailCard) => ({ ...prevDetailCard, description: newDescription }));

    setRows((prevRows) => {
      const updatedRows = prevRows.map(row => {
        if (row.id === rowId) {
          return { ...row, description: newDescription };
        }
        return row;
      });
      localStorage.setItem("cards", JSON.stringify(updatedRows));
      return updatedRows;
    });
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
              comments={comments}
              key={oneTask.id}
              id={oneTask.id}
              onClickCopy={onClickCopy}
              detailTitle={detailCard.title}
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
      {isShowDetailItem && <CardDetail detailCard={detailCard} comments={comments}
      setIsShowDetailItem={setIsShowDetailItem}
      onUpdateTitleValue={(newTitle) => onUpdateTitleValue(detailCard.id, newTitle)}
      onUpdateDescriptionValue={(newDescription) => onUpdateDescriptionValue(detailCard.id, newDescription)}
      /> }
    </main>
  )
}