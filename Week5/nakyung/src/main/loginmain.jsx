import styled from 'styled-components';
import React from 'react';
import Bugi from '../images/Bugi.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
// import API from '../API/api';

export const PContainer = styled.div`
  margin-top: 22px;
  margin-bottom: 22px;
`;

export const MainP = styled.div`
  color: #1d1927;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const MainLine = styled.div`
  width: 393px;
  height: 1px;
  background: #7a7485;
  margin-bottom: 30px;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 14px;
`;

const LoginBtn = styled.button`
  width: 352px;
  height: 57px;
  border-radius: 10px;
  border: 1px solid #7a7485;
  color: #1d1927;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  transition: opacity 300ms ease-in-out;
`;

const JoinBtn = styled.button`
  width: 352px;
  height: 57px;
  border-radius: 10px;
  background: #0028da;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  transition: opacity 300ms ease-in-out;
`;

const CancelBtn = styled.button`
  width: 352px;
  height: 57px;
  border-radius: 10px;
  background: #da0000;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  transition: opacity 300ms ease-in-out;
`;

function LoginMain() {
  const [userId, setUserId] = useState('');

  const navigate = useNavigate();

  const Logout = () => {
    sessionStorage.removeItem('userId');
    navigate('/');
  };

  const MoveChange = () => {
    navigate('/Change');
  };

  useEffect(() => {
    const storedUserId = sessionStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  return (
    <>
      <PContainer>
        <MainP>{userId ? `${userId}님 환영합니다.` : null}</MainP>
      </PContainer>
      <MainLine />
      <ImgContainer>
        <img
          src={Bugi}
          alt="부기"
          style={{ width: '153px', height: '166px' }}
        />
      </ImgContainer>
      <ButtonContainer>
        <LoginBtn onClick={MoveChange}>비밀번호 변경</LoginBtn>
        <JoinBtn onClick={Logout}>로그아웃</JoinBtn>
        <CancelBtn>회원탈퇴</CancelBtn>
      </ButtonContainer>
    </>
  );
}

export default LoginMain;
