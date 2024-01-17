import React from 'react';
import { Card } from '../../components/Card/Card';
import { NewColumn } from '../../components/NewColumn/NewColumn';

export const DashboardPage = () => {
  return (
    <main className="flex min-h-screen bg-[#228cd5]">
      <div className="w-screen px-10 sm:px-4 py-10 overflow-x-auto sm:flex items-start ">
        <Card title="Todo" />
        <Card title="In progress" />
        <Card title="Done" />
        <NewColumn />
      </div>
    </main>
  )
}
