import React from 'react';
import styled from 'styled-components';
import Header from './commons/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import CharacterImg from './commons/CharacterImg';

const SignInPage = () => {
    const location = useLocation();
    const id = location.state.id;
    const navigate = useNavigate();
    return (
        <SignInPageWrapper>
            <Header text={`${id}님 환영합니다.`} />
            <CharacterImg />
            <button className='button1' onClick={() => navigate("/setPwPage", { state: { id } })}>비밀번호 변경</button>
            <button className='button2' onClick={() => navigate("/LoginPage")}>로그아웃</button>
            <button className='button3' onClick={() => {
                localStorage.removeItem(id);
                navigate("/");
            }}>회원탈퇴</button>
        </SignInPageWrapper>
    );
};

const SignInPageWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  button{
        width: 352px;
        height: 57px;
        margin-bottom: 14px;
        font-weight: 600;
        font-size: 2rem;
    }

    .button1 {
        background: #fff;
        color: #1D1927;
        border: 1px solid #7A7485;
    }

    .button2 {
        background: #0028DA;
        color: #fff;
    }

    .button3 {
        background: #DA0000;
        color: #fff;
    }
`;

export default SignInPage;