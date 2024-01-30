import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { LabelProvider } from './context/LabelContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <LabelProvider>
    <App />
  </LabelProvider>
)