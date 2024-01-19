import React from 'react';
import { Item } from '../Item/Item';

export const Checklist = () => {
  return (
    <ul>
      <Item text="Frontend" src="./img/vite_header.jpg" />
      <Item text="Styled" src="" />
      <Item text="Bundler" src="" />
      <Item text="Frontend" />
      <Item text="Styled" />
      <Item text="Bundler" />
      <Item text="Frontend" />
      <Item text="Styled" />
      <Item text="Bundler" />
      {/* <Item text="Frontend" />
      <Item text="Styled" />
      <Item text="Bundler" />
      <Item text="Frontend" />
      <Item text="Styled" />
      <Item text="Bundler" />
      <Item text="Frontend" />
      <Item text="Styled" />
      <Item text="Bundler" /> */}
    </ul>
  )
}
