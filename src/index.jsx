import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { DetailProvider } from './context/DetailContext';
import { LabelProvider } from './context/LabelContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <DetailProvider>
    <LabelProvider>
      <App />
    </LabelProvider>
  </DetailProvider>
)