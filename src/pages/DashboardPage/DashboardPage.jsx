import React from 'react';
import { Card } from '../../components/Card/Card';
import { NewColumn } from '../../components/NewColumn/NewColumn';
import { FormColumn } from '../../components/FormColumn/FormColumn';

export const DashboardPage = () => {
  return (
    <main className="flex min-h-screen bg-[#228cd5]">
      <div className="w-screen px-10 sm:px-4 py-10 overflow-x-auto sm:flex items-start ">
        <div id="overlay" className="hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-10"></div>
        <Card title="Todo" />
        <Card title="In progress" />
        <Card title="Done" />
        <div>
          <FormColumn />
          <NewColumn />
        </div>
      </div>
    </main>
  )
}
