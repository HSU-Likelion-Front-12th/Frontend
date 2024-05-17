import { useNavigate } from "react-router-dom"
export default function LoginMain({ handleGetID }) {
  const navigate = useNavigate();
  return (
    <>
      <h1>{handleGetID()}님 환영합니다.</h1>
      <button onClick={() => { navigate("/Change") }}>비밀번호 변경</button>
      <button>로그아웃</button>
      <button>회원탈퇴</button>
    </>
  )
}