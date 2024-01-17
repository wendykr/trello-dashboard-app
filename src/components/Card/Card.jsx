import React from 'react';
import { Checklist } from '../Checklist/Checklist';

export const Card = ({ title }) => {
  return (
    <section className="mx-4 p-3 w-80 bg-gray-200 text-gray-800 rounded-lg shadow-xl">
      <header>
        <h3 className="text-gray-900 font-bold text-transform: uppercase leading-none">{title}</h3>
      </header>

      <Checklist />

      <footer>

      </footer>
    </section>
  )
}
