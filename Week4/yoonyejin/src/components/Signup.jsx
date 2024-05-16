import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Signup.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const newUser = { email, phone, username, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('회원가입이 완료되었습니다.');
        navigate('/signin');
    };

    return (
        <div className='Signup-container'>
            <h2 className='Signup-title' >회원가입</h2>
            <hr className='Signup-line' />
            <input className='input'
                type="email" 
                placeholder="이메일 ex) abc123@naver.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input className='input'
                type="text" 
                placeholder="전화번호 ex) 01000000000" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
            />
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
            <input className='input'
                type="password" 
                placeholder="비밀번호 확인" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
            />
            <button className='Signup-button' onClick={handleSignup}>회원가입</button>
        </div>
    );
};

export default Signup;
