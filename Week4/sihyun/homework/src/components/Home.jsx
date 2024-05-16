import React from 'react';
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

function Home() {
  const handleLogin = () => {
    // 로그인 버튼 클릭 시 동작할 내용 구현
  };

  const handleSignup = () => {
    // 회원가입 버튼 클릭 시 동작할 내용 구현
  };

  return (
    <HomeContainer>
      <Header>
        홈
      </Header>
      <Body>
        <LogoImg src={logo} alt="로고" />
        <Link to ="/signin">
        <Button onClick={handleLogin}>로그인</Button> 
        </Link>
        <Link to ="/signup">
        <Button onClick={handleSignup}>회원가입</Button>
        </Link>
      </Body>
    </HomeContainer>
  );
}

export default Home;
