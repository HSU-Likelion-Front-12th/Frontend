import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Change({ handleSetPW }) {
  <h1>비밀번호 변경</h1>
  const [isChangPW, setChangPW] = useState();
  const navigate = useNavigate();

  return (
    <>
      <input placeholder="비밀번호" onChange={(e) => { setChangPW(e.target.value) }} />
      <input placeholder="비밀번호 확인" onChange={(e) => {
        if (isChangPW === e.target.value) {
          console.log("일치합니다.")
        }
      }} />
      <button onClick={() => {
        handleSetPW(isChangPW);
        navigate("/");
      }

      }>비밀번호 변경</button>
    </>
  )
}