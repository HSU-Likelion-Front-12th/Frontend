import { useState } from "react"

export default function Login() {
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [savedLoginId, setSaveLoginId] = useState("");
  const [savedLoginPassword, setSaveLoginPassword] = useState("");

  let sessionStorage = window.sessionStorage;
  return (
    <>
      <div>
        ID :  <input type="text" size={20} onChange={(e) => { setLoginId(e.target.value) }}></input>
      </div>
      <div>
        PW : <input type="text" size={20} onChange={(e) => { setLoginPassword(e.target.value) }}></input>
      </div>

      <div>
        <button onClick={() => {
          sessionStorage.setItem("loginId", loginId);
          sessionStorage.setItem("loginPassword", loginPassword);
          setSaveLoginId(sessionStorage.getItem("loginId"));
          setSaveLoginPassword(sessionStorage.getItem("loginPassword"));
        }}>Login</button>

        <button onClick={() => {
          sessionStorage.clear();
        }}>Logout</button>

        <button onClick={() => {
          sessionStorage.removeItem("loginId");
        }}>loginId삭제</button>
      </div>
    </>
  )
}