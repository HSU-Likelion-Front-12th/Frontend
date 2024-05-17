import { useState } from 'react';
import {useNavigate } from 'react-router';
import '../styles/Signup.css';
export default function Signup(){

  let [email,setEmail] = useState('');
  let [phone,setPhone] = useState('');
  let [userId,setUserId] = useState('');
  let [userPw,setUserPw] = useState('');
  let [checkPw,setCheckPw] = useState('');

  let navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^\d{10,11}$/;
    return re.test(phone);
  };

  const validatePassword = () => {
    return userPw === checkPw;
  };
  
  const signupClicked = (e) => {
    e.preventDefault(); 
  
    if (!validateEmail(email)) {
      alert('유효한 이메일을 입력하세요.');
      return;
    }
    if (!validatePhone(phone)) {
      alert('유효한 전화번호를 입력하세요.');
      return;
    }
    if (!validatePassword()) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }
    // 회원가입 정보를 sessionStorage에 저장합니다.

    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('userId', userId);
    localStorage.setItem('userPw', userPw);
    localStorage.setItem('checkPw', checkPw);

    // 회원가입 후 로그인 페이지로 이동합니다.
    navigate('/Signin');
  };

    return(
        <>
        <h2 className="header">회원가입</h2>
          <hr/>
          <form className="input-container" onSubmit={signupClicked}>
            
            <input type="email" placeholder="이메일 ex) abcd@naver.com" className="input-field"  value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="전화번호 ex) 01000000000" className="input-field"  value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input type="text" placeholder="아이디" className="input-field"  value={userId} onChange={(e) => setUserId(e.target.value)} />
            <input type="password" placeholder="비밀번호" className="input-field"  value={userPw} onChange={(e) => setUserPw(e.target.value)} />
            <input type="password" placeholder="비밀번호 확인" className="input-field"  value={checkPw} onChange={(e) => setCheckPw(e.target.value)} />
            <button className = "button" type="submit">회원가입</button>
          </form>
        </>
    )
}