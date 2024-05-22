import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Main, { PContainer } from '../main/main';
import { MainP } from '../main/main';
import { MainLine } from '../main/main';
import { useNavigate } from 'react-router-dom';
import Config from '../config/config';
// import API from '../API/api';

const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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

const FieldWithMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: flex-start;
  position: relative;
  width: 352px;
  margin-bottom: 20px;
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

function Change() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    username: '',
    phone: '',
  });

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');

    const fetchUserInfo = async () => {
      if (userId) {
        try {
          const response = await fetch(
            `${Config.baseURL}/api/member/default-information?userId=${userId}`
          );

          const data = await response.json();
          console.log(data);

          setUserInfo({
            email: data.data.email,
            username: data.data.userId,
            phone: data.data.phone,
          });
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchUserInfo();
  }, []);


  const [pw1, setPw1]=useState('');
  const [pw2, setPw2]=useState('');

  const handleChange = async() => {
    try {
      const response = await fetch(`${Config.baseURL}/api/member/password`, {
        method: 'PUT',
        headers: Config.headers,
        body: JSON.stringify({
          userId:userInfo.username,
          pw1:pw1,
          pw2:pw2,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (response.status === 200) {
        alert('비밀번호 변경 완료');
      } else {
        alert('변경 실패');
      }
    } catch (error) {
      alert('에러 발생');
    }
  }
  return (
    <>
      <AllContainer>
        <PContainer>
          <MainP>비밀번호 변경</MainP>
        </PContainer>
        <MainLine />
        <FieldWithMessage>
          <PWfield type="email" readOnly value={userInfo.email} />
        </FieldWithMessage>
        <FieldWithMessage>
          <PWfield readOnly value={userInfo.username} />
        </FieldWithMessage>
        <FieldWithMessage>
          <PWfield type="tel" readOnly value={userInfo.phone} />
        </FieldWithMessage>
        <FieldWithMessage>
          <PWfield placeholder="비밀번호" value={pw1} />
        </FieldWithMessage>
        <FieldWithMessage>
          <PWfield placeholder="비밀번호 확인" />
        </FieldWithMessage>
        <Register>비밀번호 변경</Register>
      </AllContainer>
    </>
  );
}

export default Change;
