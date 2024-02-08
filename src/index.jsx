import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { DetailProvider } from './context/DetailContext';
import { LabelProvider } from './context/LabelContext';
import { ToastContainer } from 'react-toastify';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DetailProvider>
    <LabelProvider>
      <DndProvider backend={HTML5Backend}>
        <App />
        <ToastContainer />
      </DndProvider>
    </LabelProvider>
  </DetailProvider>
)