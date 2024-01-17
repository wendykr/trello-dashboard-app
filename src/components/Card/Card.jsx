import React from 'react';
import { Checklist } from '../Checklist/Checklist';
import { AddCard } from '../AddCard/AddCard';
import { Form } from '../Form/Form';

export const Card = ({ title }) => {
  return (
    <section className="mb-10 sm:mb-0 sm:mx-10 p-3 w-full sm:w-80 bg-[#f1f2f4] text-gray-800 rounded-xl shadow-xl flex-shrink-0">
      <header>
        <h3 contenteditable="" className="pl-3 py-[6px] text-[#172b4d] font-bold text-transform:uppercase leading-none outline-none">{title}</h3>
      </header>

      <Checklist />

      <Form />
      <AddCard />
    </section>
  )
}
