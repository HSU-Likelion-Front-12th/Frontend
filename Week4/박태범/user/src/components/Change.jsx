import { useNavigate } from "react-router-dom";
import { useState } from "react";
import image from "../images/image.png";

function Change() {
  const navigate = useNavigate();
  let [pw, setPw] = useState("");
  let [pw2, setPw2] = useState("");

  const id = localStorage.getItem("id");
  const email = localStorage.getItem("email");
  const tel = localStorage.getItem("tel");

  const handleChange = () => {
    // 입력된 정보를 로컬 스토리지에 저장합니다.
    localStorage.setItem("pw", pw);
    localStorage.setItem("pw2", pw2);

    // 회원가입 후 다른 페이지로 이동하거나 필요한 작업을 수행할 수 있습니다.
    // 예를 들어, 로그인 페이지로 이동할 수 있습니다.
    navigate("/Signin");
  };

  return (
    <div className="main">
      <div className="title">비밀번호 변경</div>
      <hr />
      <div className="container">
        <input type="text" size={20} value={email} />
        <input type="text" size={20} value={tel} />
        <input type="text" size={20} value={id} />
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
        <button className="signup" onClick={handleChange}>
          비밀번호 변경
        </button>
      </div>
    </div>
  );
}

export default Change;
