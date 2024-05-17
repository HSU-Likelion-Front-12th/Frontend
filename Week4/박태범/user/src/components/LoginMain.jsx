import { useNavigate } from "react-router-dom";
import image from "../images/image.png";

function LoginMain() {
  const navigate = useNavigate();

  const handleChangeClick = () => {
    navigate("/Change");
  };

  const handleLogout = () => {
    localStorage.removeItem("id");
    navigate("/Signin");
  };

  const handleExit = () => {};

  const id = localStorage.getItem("id");

  return (
    <div className="main">
      <div className="title">{id}님 환영합니다</div>
      <hr />
      <div className="container">
        <img src={image} alt="상상부기"></img>
        <button className="login" onClick={handleChangeClick}>
          비밀번호 변경
        </button>
        <button className="signup" onClick={handleLogout}>
          로그아웃
        </button>
        <button className="exit">회원탈퇴</button>
      </div>
    </div>
  );
}

export default LoginMain;
