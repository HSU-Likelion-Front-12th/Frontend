import React, { useState, useEffect } from 'react';
import '../css/Change.css';

const Change = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        const currentUsername = localStorage.getItem('username');
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === currentUsername);

        if (user) {
            setEmail(user.email);
            setPhone(user.phone);
            setUsername(user.username);
        }
    }, []);

    const handleChangePassword = () => {
        if (newPassword !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = users.map(user => {
            if (user.username === username) {
                return { ...user, password: newPassword };
            }
            return user;
        });

        localStorage.setItem('users', JSON.stringify(updatedUsers));
        alert('비밀번호가 변경되었습니다.');
    };

    return (
        <div className='Change-container'>
            <h2 className='Change-title'>비밀번호 변경</h2>
            <hr className='Change-line' />
            <input className='input'
                type="email" 
                placeholder="이메일" 
                value={email} 
                readOnly 
            />
            <input className='input'
                type="text" 
                placeholder="전화번호" 
                value={phone} 
                readOnly 
            />
            <input className='input'
                type="text" 
                placeholder="아이디" 
                value={username} 
                readOnly 
            />
            <input className='input'
                type="password" 
                placeholder="새 비밀번호" 
                value={newPassword} 
                onChange={(e) => setNewPassword(e.target.value)} 
            />
            <input className='input'
                type="password" 
                placeholder="비밀번호 확인" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
            />
            <button className='Change-button' onClick={handleChangePassword}>비밀번호 변경</button>
        </div>
    );
};

export default Change;
