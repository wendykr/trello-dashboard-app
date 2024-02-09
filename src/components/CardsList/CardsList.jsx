import React from 'react';
import { Card } from '../Card/Card';

export const CardsList = ({ cards, titleValue }) => {

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
            labels={oneCard.labels}
            key={oneCard.id}
          />
        ))
      }
    </ul>
  )
}