import React, { useState } from 'react';
import styled from 'styled-components';

const ChangeContainer = styled.div`
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

const TextInput = styled.input`
  width: 200px;
  background-color: #ffffff;
  border: 0.1vw solid #333;
  border-radius: 0.5vw;
  padding: 1vw;
  text-align: start;
  margin: 4px;
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

function Change() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loginId, setLoginId] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <ChangeContainer>
      <Header>
        비밀번호 변경
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
          placeholder="새 비밀번호"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <TextInput 
          type="password" 
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button onClick={() => {
          // 비밀번호 변경 로직 구현
        }}>변경</Button>
      </Body>
    </ChangeContainer>
  );
}

export default Change;
