import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Main.css';
import image from '../Images/img.svg';

const Main = () => {
    return (
        <div className='main-container'>
            <h1 className='main-title'>홈</h1>
            <hr/>
            <img src={image} alt="image" className='main-image'/>
            <Link to="/signin">
                <button className='signin-button'>로그인</button>
            </Link>
            <Link to="/signup">
                <button className='signup-button'>회원가입</button>
            </Link>
        </div>
    );
};

export default Main;
