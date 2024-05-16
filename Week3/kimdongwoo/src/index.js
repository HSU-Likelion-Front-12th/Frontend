import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pra from '../src/hw/App';
import App from './myhw/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <Pra /> */}
    <App />
  </BrowserRouter>
);
