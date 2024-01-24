import React from 'react';
import { Item } from '../Item/Item';

export const Checklist = ({ cards, isClickLabel, onClickLabel, onClickRemove }) => {

  return (
    <ul>
      {
        cards.map(oneCard => (
          <Item
            text={oneCard.title}
            src={oneCard.image}
            labels={oneCard.labels}
            key={oneCard.id}
            idItem={oneCard.id}
            isClickLabel={isClickLabel}
            onClickLabel={onClickLabel}
            onClickRemove={onClickRemove}
          />
        ))
      }
    </ul>
  )
}
