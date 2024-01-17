import React from 'react';
import { Card } from '../../components/Card/Card';

export const DashboardPage = () => {
  return (
    <main className="flex min-h-screen bg-[#228cd5]">
      <div className="w-screen px-4 py-10 overflow-x-auto flex items-start ">
        <Card title="Todo" />
        <Card title="In progress" />
        <Card title="Done" />
      </div>
    </main>
  )
}
