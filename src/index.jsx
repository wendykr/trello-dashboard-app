import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { DetailProvider } from './context/DetailContext';
import { LabelProvider } from './context/LabelContext';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <DetailProvider>
    <LabelProvider>
      <App />
      <ToastContainer />
    </LabelProvider>
  </DetailProvider>
)