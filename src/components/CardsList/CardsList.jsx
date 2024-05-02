import React from 'react';
import { Card } from '../Card/Card';

export const CardsList = ({ cards, labels, labelsDatabase, comments, titleValue, onUpdateDone }) => {

  return (
    <ul className="relative overflow-visible">
      {
        cards.map(oneCard => (
          <Card
            id={oneCard.id}
            text={oneCard.title}
            titleValue={titleValue}
            src={oneCard.image}
            description={oneCard.description}
            dateStart={oneCard.dateStart}
            dateEnd={oneCard.dateEnd}
            done={oneCard.done}
            key={oneCard.id}
            labels={labels}
            labelsDatabase={labelsDatabase}
            comments={comments}
            onUpdateDone={onUpdateDone}
          />
        ))
      }
    </ul>
  )
}