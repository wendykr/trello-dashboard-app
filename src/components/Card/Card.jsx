import React from 'react';
import { Checklist } from '../Checklist/Checklist';
import { AddCard } from '../AddCard/AddCard';
import { Form } from '../Form/Form';
import { LinkCopy } from '../LinkCopy/LinkCopy';
import { LinkMore } from '../LinkMore/LinkMore';

export const Card = ({ title }) => {
  return (
    <section className="flex flex-col max-h-full mb-10 sm:mb-0 sm:mx-10 p-3 w-full sm:w-80 bg-[#f1f2f4] text-gray-800 rounded-xl shadow-xl flex-shrink-0">
      <div className="flex flex-row justify-between items-center">
        <h3 contenteditable="" className="pl-3 py-[6px] text-[#172b4d] font-bold text-transform:uppercase leading-none outline-none">{title}</h3>
        <LinkMore />
      </div>

      <div className="h-full overflow-x-hidden overflow-y-auto">
        <Checklist />

        <Form />
      </div>

      <div className="flex flex-row">
        <AddCard />
        <LinkCopy />
      </div>
    </section>
  )
}
