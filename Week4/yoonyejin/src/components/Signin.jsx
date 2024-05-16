import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Signin.css';
import image from '../Images/img.svg';


const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);
            alert('로그인 성공!');
            navigate('/loginmain');
        } else {
            alert('로그인 실패. 아이디와 비밀번호를 확인하세요.');
        }
    };

    return (
        <div className='signin-container'>
            <h2 className='signin-title'>로그인</h2>
            <hr/>
            <img src={image} alt="image" className='signin-image'/>
            <input className='input'
                type="text" 
                placeholder="아이디" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input className='input'
                type="password" 
                placeholder="비밀번호" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button className='login-button' onClick={handleLogin}>로그인</button>
        </div>
    );
};

export default Signin;
