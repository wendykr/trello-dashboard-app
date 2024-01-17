import React from 'react';
import { Item } from '../Item/Item';

export const Checklist = () => {
  return (
    <ul>
      <Item text="Frontend" />
      <Item text="Styled" />
      <Item text="Bundler" />
    </ul>
  )
}
