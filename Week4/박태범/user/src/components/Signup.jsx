import { useNavigate } from "react-router-dom";
import { useState } from "react";
import image from "../images/image.png";

function Signup() {
  const navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [tel, setTel] = useState("");
  let [id, setId] = useState("");
  let [pw, setPw] = useState("");
  let [pw2, setPw2] = useState("");

  const handleSignup = () => {
    // 입력된 정보를 로컬 스토리지에 저장합니다.
    localStorage.setItem("email", email);
    localStorage.setItem("tel", tel);
    localStorage.setItem("id", id);
    localStorage.setItem("pw", pw);
    localStorage.setItem("pw2", pw2);

    // 회원가입 후 다른 페이지로 이동하거나 필요한 작업을 수행할 수 있습니다.
    // 예를 들어, 로그인 페이지로 이동할 수 있습니다.
    navigate("/Signin");
  };

  return (
    <div className="main">
      <div className="title">회원가입</div>
      <hr />
      <div className="container">
        <input
          type="text"
          size={20}
          placeholder="     이메일 ex) abc123@naver.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          size={20}
          placeholder="     전화번호 ex) 01000000000"
          onChange={(e) => {
            setTel(e.target.value);
          }}
        />
        <input
          type="text"
          size={20}
          placeholder="     아이디"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <input
          type="password"
          size={20}
          placeholder="     비밀번호"
          onChange={(e) => {
            setPw(e.target.value);
          }}
        />
        <input
          type="password"
          size={20}
          placeholder="     비밀번호 확인"
          onChange={(e) => {
            setPw2(e.target.value);
          }}
        />
        <button className="signup" onClick={handleSignup}>
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Signup;
