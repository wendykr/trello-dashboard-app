import React, { useState } from 'react';
import { Card } from '../../components/Card/Card';
import { NewColumn } from '../../components/NewColumn/NewColumn';
import { FormColumn } from '../../components/FormColumn/FormColumn';
import { tasksData } from '../../constants/tasks';

export const DashboardPage = () => {
  const [isClickLabel, setIsClickLabel] = useState(false);
  const [isClickLinkClose, setIsClickLinkClose] = useState(false);

  const onClickLabel = () => {
    setIsClickLabel(prevState => !prevState);
  };

  const onClickLinkClose = () => {
    setIsClickLinkClose(false);
  }

  const onClickNewColumn = () => {
    setIsClickLinkClose(true);
  }

  const onClickButton = (event) => {
    event.preventDefault();
    onClickLinkClose();
  }

  return (
    <main className="flex bg-gradient-to-br from-[#228cd5] via-[#228cd5] to-[#37B4C3]">
      <div className="w-screen h-screen px-10 sm:px-4 py-10 overflow-x-auto sm:flex items-start ">
        <div id="overlay" className="hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-10"></div>
        {
          tasksData.map(oneTask => (
            <Card
              title={oneTask.title}
              cards={oneTask.cards}
              key={oneTask.id} 
              isClickLabel={isClickLabel}
              onClickLabel={onClickLabel}
            />
          ))
        }
        <div>
          {
            isClickLinkClose ?
              <FormColumn onClickLinkClose={onClickLinkClose} onClickButton={onClickButton} />
              :
              <NewColumn onClickNewColumn={onClickNewColumn} />
          }
        </div>
      </div>
    </main>
  )
}
