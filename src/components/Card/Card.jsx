import React from 'react';
import { Checklist } from '../Checklist/Checklist';
import { AddCard } from '../AddCard/AddCard';

export const Card = ({ title }) => {
  return (
    <section className="mx-4 p-3 w-80 bg-[#f1f2f4] text-gray-800 rounded-xl shadow-xl flex-shrink-0">
      <header>
        <h3 className="pl-3 py-[6px] text-[#172b4d] font-bold text-transform:uppercase leading-none">{title}</h3>
      </header>

      <Checklist />

      <AddCard />
    </section>
  )
}
