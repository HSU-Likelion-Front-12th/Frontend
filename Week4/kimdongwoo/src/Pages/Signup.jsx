import { useState } from "react"

export default function Signup({ handleSetID, handleSetPW }) {

  //INPUT
  const [isAdminID, setAdminID] = useState();
  const [isAdminPW, setAdminPW] = useState();

  return (
    <>
      <h1>회원가입</h1>
      <input placeholder="이메일 ex) abc123@naver.com" />
      <input placeholder="전화번호 ex) 01000000000" />
      <input placeholder="아이디" onChange={(e) => { setAdminID(e.target.value); }} />
      <input placeholder="비밀번호" onChange={(e) => { setAdminPW(e.target.value); }} />
      <input placeholder="비밀번호 확인" />
      <a href="/Signin" onClick={() => {
        handleSetID(isAdminID);
        handleSetPW(isAdminPW);
      }}>회원가입</a>
    </>
  )
}