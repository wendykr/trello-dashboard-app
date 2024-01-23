import React from 'react';
import { Item } from '../Item/Item';

export const Checklist = ({ cards, isClickLabel, onClickLabel }) => {

  return (
    <ul className="relative overflow-visible">
      {
        cards.map(oneCard => (
          <Item
            text={oneCard.title}
            src={oneCard.image}
            labels={oneCard.labels}
            key={oneCard.id}
            isClickLabel={isClickLabel}
            onClickLabel={onClickLabel}
          />
        ))
      }
    </ul>
  )
}
