import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin({ handleGetID, handleGetPW }) {

  //ID : admin
  //PW : 1234

  //INPUT
  const [isAdminID, setAdminID] = useState();
  const [isAdminPW, setAdminPW] = useState();
  const navigate = useNavigate();

  return (
    <>
      <h1>로그인</h1>
      <input placeholder="ID" onChange={(e) => {
        const inputValue = e.target.value;
        setAdminID(inputValue);
        console.log(e.target.value)
      }} />
      <input placeholder="PW" onChange={(e) => {
        const inputValue = e.target.value;
        setAdminPW(inputValue);
        // console.log(handleGetID())
        // console.log(handleGetPW())
      }} />
      <button onClick={() => {//LoginMain
        if (isAdminID !== handleGetID() && isAdminPW !== handleGetPW()) { alert("ID와 PW가 일치하지 않습니다. 다시 확인해 주세요.") }
        else if (isAdminID === handleGetID() && isAdminPW === handleGetPW()) {
          navigate("/LoginMain");
        }
        else {
          alert("ID와 PW가 일치하지 않습니다. 다시 확인해 주세요.")
        }
      }}>로그인</button>
    </>
  )
}