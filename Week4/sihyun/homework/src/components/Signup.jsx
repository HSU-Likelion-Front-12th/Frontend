import React, { useState } from 'react';
import styled from 'styled-components';

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
  margin-top: 30px;
`;

const TextInput = styled.input`
  width: 200px;
  background-color: #ffffff;
  border: 0.1vw solid #333;
  border-radius: 0.5vw;
  padding: 1vw;
  text-align: start;
  margin:4px;
  color: #B4B4B4;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Button = styled.button`
  width: 220px;
  background-color: #0028DA;
  border: none;
  border-radius: 0.5vw;
  padding: 1vw;
  margin: 4px;
  color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:hover {
    background-color: #525252;
  }
`;

function Signup() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <HomeContainer>
      <Header>
        회원가입
      </Header>
      <Body>
        <TextInput 
          type="email" 
          placeholder="이메일 ex) abc123@naver.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput 
          type="tel" 
          placeholder="전화번호 ex) 01000000000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextInput 
          type="text" 
          placeholder="아이디"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
        <TextInput 
          type="password" 
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextInput 
          type="password" 
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button onClick={() => {
          // 회원가입 버튼 클릭 시 동작할 내용 구현
        }}>회원가입</Button>
      </Body>
    </HomeContainer>
  );
}

export default Signup;
