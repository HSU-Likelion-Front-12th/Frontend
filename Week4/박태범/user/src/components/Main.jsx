import { useNavigate } from "react-router-dom";
import image from "../images/image.png";
import Signup from "./Signup";

function Main() {
  const navigate = useNavigate();

  const handleSigninClick = () => {
    navigate("/Signin");
  };

  const handleSignupClick = () => {
    navigate("/Signup");
  };

  return (
    <div className="main">
      <div className="title">홈</div>
      <hr />
      <div className="container">
        <img src={image} alt="상상부기"></img>
        <button className="login" onClick={handleSigninClick}>
          로그인
        </button>
        <button className="signup" onClick={handleSignupClick}>
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Main;
