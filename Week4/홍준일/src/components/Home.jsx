import React from 'react';
import styled from 'styled-components';
import Header from './commons/Header';
import CharacterImg from './commons/CharacterImg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <HomeWrapper>
            <Header text={"홈"}/>
            <CharacterImg />
            <button className='button1' onClick={()=>navigate("/loginPage")}>로그인</button>
            <button className='button2' onClick={()=>navigate("/signUpPage")}>회원가입</button>
        </HomeWrapper>
    );
};

const HomeWrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    button{
        width: 352px;
        height: 57px;
    }

    .button1{
        background: #fff;
        border: 1px solid #7A7485;
        color: #1D1927;
        margin-bottom: 14px;
    }

    .button2{
        background: #0028DA;
        color: #fff;
    }
`;

export default Home;