import React from 'react';
import { Item } from '../Item/Item';

export const Checklist = ({ idColumn, cards, titleValue }) => {

  return (
    <ul className="relative overflow-visible">
      {
        cards.map(oneCard => (
          <Item
            idColumn={idColumn}
            text={oneCard.title}
            titleValue={titleValue}
            src={oneCard.image}
            labels={oneCard.labels}
            key={oneCard.id}
            idRow={oneCard.id}
          />
        ))
      }
    </ul>
  )
}
