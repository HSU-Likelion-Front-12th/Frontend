import React from 'react';
import { MainLine } from '../main/main';
import { MainP } from '../main/main';
import { PContainer } from '../main/main';
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Config from '../config/config';
// import API from '../API/api';

const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const Textfield = styled.input`
  width: 244px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #7a7485;
  padding: 0 14px;
  color: #1d1927;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  &:focus {
    outline: none;
    border-color: ${(props) => (props.emailError ? '#FF001A' : '#7A7485')};
  }
`;

const Duplibutton = styled.button`
  width: 96px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #0028da;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const FieldbuttonCon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const FieldContainer = styled.div`
  height: 66px;
`;

const PWfield = styled.input`
  color: #1d1927;
  width: 352px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #7a7485;

  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 0 14px;

  ::placeholder {
    color: #b4b4b4;
  }
`;

const Register = styled.button`
  width: 352px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #0028da;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ErrorMessage = styled.p`
  color: #ff001a;
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: absolute;
  left: 30px;
  top: 54px;
`;

const FieldWithMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: flex-start;
  position: relative; // 필드를 포지셔닝 컨텍스트로 설정
  width: 352px; // 필드의 너비 지정
  margin-bottom: 20px; // 각 필드 간의 간격 조정
`;

const Message = styled.p`
  color: #ff001a;
  font-family: Inter;
  font-size: 10px;
  position: absolute;
  bottom: -15px; // 메시지를 필드 아래에 위치
  left: 0;
  right: 0;
  margin-left: 9px;
  text-align: left;
  visibility: visible;
  transition: visibility 0.2s, opacity 0.2s ease-in-out;
  opacity: 1; // 메시지가 보이도록 설정
`;

function Signup() {
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch(`${Config.baseURL}/api/member/sign-up`, {
        method: 'POST',
        headers: Config.headers,
        body: JSON.stringify({
          email: email,
          userId: userId,
          phone: phone,
          password: password,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (response.status === 201) {
        alert('회원가입 완료');
      } else {
        alert('회원가입 실패');
      }
    } catch (error) {
      alert('에러 발생');
    }
  };

  return (
    <>
      <AllContainer>
        <PContainer>
          <MainP>회원가입</MainP>
        </PContainer>
        <MainLine />
        <FieldWithMessage>
          <PWfield
            placeholder="이메일 ex) abc123@naver.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Message></Message>
        </FieldWithMessage>

        <FieldWithMessage>
          <PWfield
            placeholder="아이디"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <Message></Message>
        </FieldWithMessage>

        <FieldWithMessage>
          <PWfield
            placeholder="전화번호"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Message></Message>
        </FieldWithMessage>

        <FieldWithMessage>
          <PWfield
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Message></Message>
        </FieldWithMessage>

        <FieldWithMessage>
          <PWfield
            placeholder="비밀번호 확인"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <Message></Message>
        </FieldWithMessage>

        <Register onClick={handleRegister}>회원가입</Register>
      </AllContainer>
    </>
  );
}

export default Signup;
