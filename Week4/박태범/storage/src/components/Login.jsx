import { useState } from "react";

function Login() {
  let [loginId, setLoginId] = useState("");
  let [loginPassword, setLoginPassword] = useState("");
  let [savedLoginId, setSavedLoginId] = useState("");
  let [savedLoginPassword, setSavedLoginPassword] = useState("");

  let sessionStorage = window.sessionStorage; // 데이터가 잠깐 보관됨 (브라우저 닫으면 자동삭제)
  //let localStorage = window.localStorage; // 영구 데이터 보관(브라우저 닫아도 저장됨)
  // 아래 sessionStorage를 다 localStorage로 바꾸면 됨

  return (
    <>
      <div>
        ID :{" "}
        <input
          type="text"
          size={20}
          onChange={(e) => {
            setLoginId(e.target.value);
          }}
        />
      </div>
      <div>
        PW :{" "}
        <input
          type="password"
          size={20}
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
      </div>

      <div>
        <button
          onClick={() => {
            sessionStorage.setItem("loginId", loginId);
            sessionStorage.setItem("loginPassword", loginPassword);

            setSavedLoginId(sessionStorage.getItem("loginId"));
            setSavedLoginPassword(sessionStorage.getItem("loginPassword"));
          }}
        >
          Login
        </button>

        <button
          onClick={() => {
            sessionStorage.clear(); // 모든 키,값 삭제
          }}
        >
          Logout
        </button>
        <button
          onClick={() => {
            sessionStorage.removeItem("loginId");
          }}
        >
          Id 삭제하기
        </button>
        <p>
          ID는 {savedLoginId}입니다. PW는{savedLoginPassword}입니다.
        </p>
      </div>
    </>
  );
}

export default Login;
