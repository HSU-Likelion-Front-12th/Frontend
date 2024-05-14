import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Modal from 'react-modal';

const root = ReactDOM.createRoot(document.getElementById('root'));

Modal.setAppElement('#root'); // root 요소를 모달에 알림
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);