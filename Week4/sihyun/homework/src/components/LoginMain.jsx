import React, { useState }  from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  width: 393px;
  height: 852px;
  background-color: aliceblue;
`;

const Header = styled.div`
  background-color: #ffffff;
  border: 0.1vw solid #333;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 34px;
`;

const LogoImg = styled.img`
  width: 50%;
  flex-shrink: 0;
`;

const Button = styled.button`
  width: 200px;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border: 0.1vw solid #333;
  border-radius: 1vw;
  padding: 15px 0;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

  &:hover {
    background-color: #525252;
  }
`;

const LogoutButton = styled(Button)`
  background-color: #61dafb;
  color: #fff;

  &:hover {
    background-color: #4a9ed6;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #ff4b4b;
  color: #fff;

  &:hover {
    background-color: #e63939;
  }
`;
function LoginMain() {
    // 로컬 스토리지에서 데이터 읽기
    const savedLoginId = sessionStorage.getItem("loginId");
    const savedLoginPassword = sessionStorage.getItem("loginPassword");
  
    const handleLogout = () => {
      // 로컬 스토리지에서 데이터 삭제
      sessionStorage.removeItem("loginId");
      sessionStorage.removeItem("loginPassword");
    };
  
    return (
      <HomeContainer>
        <Header>
          {savedLoginId ? `${savedLoginId}님 환영합니다` : "로그인을 해주세요"}
        </Header>
        <Body>
          <LogoImg src={logo} alt="로고" />
          {savedLoginId && (
            <>
              <Link to="/Change">
                <Button>비밀번호 변경</Button>
              </Link>
              <Link to="/">
                <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
              </Link>
              <Link to="/signup">
                <DeleteButton>회원탈퇴</DeleteButton>
              </Link>
            </>
          )}
        </Body>
      </HomeContainer>
    );
  }
  
  export default LoginMain;