import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {RecoilRoot} from 'recoil'

const root = ReactDOM.createRoot(document.getElementById('root')); // 'root' 요소를 찾아서 root로 설정
root.render(
    <BrowserRouter>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </BrowserRouter>
); // BrowserRouter 및 RecoilRoot로 App 컴포넌트를 감싸서 렌더링







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
