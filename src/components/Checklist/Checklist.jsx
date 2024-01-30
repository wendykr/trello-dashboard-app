import React from 'react';
import { Item } from '../Item/Item';

export const Checklist = ({ cards, onClickDetail, isShowDetailItem, titleValue }) => {

  return (
    <ul className="relative overflow-visible">
      {
        cards.map(oneCard => (
          <Item
            text={oneCard.title}
            titleValue={titleValue}
            src={oneCard.image}
            labels={oneCard.labels}
            key={oneCard.id}
            onClickDetail={onClickDetail}
            isShowDetailItem={isShowDetailItem}
          />
        ))
      }
    </ul>
  )
}
