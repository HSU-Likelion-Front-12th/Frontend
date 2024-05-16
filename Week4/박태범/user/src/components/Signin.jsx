import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../images/image.png";

function Signin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSigninClick = () => {
    // 로컬 스토리지에서 저장된 사용자 정보를 가져옵니다.
    const storedUsername = localStorage.getItem("id");
    const storedPassword = localStorage.getItem("pw");

    // 입력된 아이디와 비밀번호와 저장된 정보를 비교합니다.
    if (username === storedUsername && password === storedPassword) {
      // 일치할 경우 로그인 후의 페이지로 이동합니다.
      navigate("/LoginMain");
    } else {
      // 아이디 또는 비밀번호가 일치하지 않을 경우 에러 메시지를 표시합니다.
      setError("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className="main">
      <div className="title">로그인</div>
      <hr />
      <div className="container">
        <img src={image} alt="상상부기" />
        <input
          type="text"
          size={20}
          placeholder="     아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          size={20}
          placeholder="     비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signup" onClick={handleSigninClick}>
          로그인
        </button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default Signin;
