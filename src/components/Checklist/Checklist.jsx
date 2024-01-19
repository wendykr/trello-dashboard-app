import React from 'react';
import { Item } from '../Item/Item';

export const Checklist = ({ cards }) => {
  return (
    <ul>
      {
        cards.map(oneCard => (
          <Item text={oneCard.title} src={oneCard.image} labels={oneCard.labels} key={oneCard.id} />
        ))
      }
    </ul>
  )
}
