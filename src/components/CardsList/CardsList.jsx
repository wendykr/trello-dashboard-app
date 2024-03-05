import React from 'react';
import { Card } from '../Card/Card';

export const CardsList = ({ cards, labels, comments, titleValue }) => {

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
            key={oneCard.id}
            labels={labels}
            comments={comments}
          />
        ))
      }
    </ul>
  )
}