import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LoginMain.css';
import image from '../Images/img.svg';

const LoginMain = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem('username');

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        alert('로그아웃 되었습니다.');
        navigate('/');
    };

    const handleDeleteAccount = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = users.filter(user => user.username !== username);

        localStorage.setItem('users', JSON.stringify(updatedUsers));
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        alert('회원탈퇴 되었습니다.');
        navigate('/');
    };

    return (
        <div className='LoginMain-container'>
            <h2 className='LoginMain-title'>{username}님 환영합니다</h2>
            <hr/>
            <img src={image} alt="image" className='LoginMain-image'/>
            <button className='change-button' onClick={() => navigate('/change')}>비밀번호 변경</button>
            <button className='logout-button' onClick={handleLogout}>로그아웃</button>
            <button className='unregister-button' onClick={handleDeleteAccount}>회원탈퇴</button>
        </div>
    );
};

export default LoginMain;
