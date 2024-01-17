import React from 'react';
import { Card } from '../../components/Card/Card';

export const HomePages = () => {
  return (
    <main className="min-h-screen bg bg-purple-500">
      <div className="w-screen flex px-4 py-10">
        <Card title="Todo" />
        <Card title="In progress" />
        <Card title="Done" />
      </div>
    </main>
  )
}
