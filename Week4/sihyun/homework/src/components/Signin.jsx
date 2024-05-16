import React, { useState } from 'react';
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

const TextInput = styled.input`
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
`;

const Button = styled.button`
  width: 200px;
  background-color: #61dafb;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 1vw;
  font-size: 16px;

  &:hover {
    background-color: #525252;
  }
`;

function Signin() {
  let [loginId, setLoginId] = useState("");
  let [loginPassword, setLoginPassword] = useState("");
  let [savedLoginId, setSavedLoginId] = useState("");
  let [savedLoginPassword, setSavedLoginPassword] = useState("");

  let sessionStorage = window.sessionStorage;

  return (
    <HomeContainer>
      <Header>
        로그인
      </Header>
      <Body>
        <LogoImg src={logo} alt="로고" />
        <TextInput 
          type="text"
          placeholder="아이디"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
        <TextInput 
          type="password" 

          placeholder="비밀번호"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <Link to="/LoginMain">
          <Button
          onClick={()=>{
            sessionStorage.setItem("loginId", loginId);
            sessionStorage.setItem("loginPassword", loginPassword);
            setSavedLoginId(sessionStorage.getItem("loginId"));
            setSavedLoginPassword(sessionStorage.getItem("loginPassword"));
        }}>로그인</Button>
        </Link>
      </Body>
    </HomeContainer>
  );
}

export default Signin;
