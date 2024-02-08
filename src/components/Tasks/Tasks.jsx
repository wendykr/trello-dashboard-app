import React from 'react';
import { Task } from '../Task/Task';

export const Tasks = ({ cards, titleValue }) => {

  return (
    <ul className="relative overflow-visible">
      {
        cards.map(oneCard => (
          <Task
            id={oneCard.id}
            text={oneCard.title}
            titleValue={titleValue}
            src={oneCard.image}
            description={oneCard.description}
            labels={oneCard.labels}
            key={oneCard.id}
          />
        ))
      }
    </ul>
  )
}