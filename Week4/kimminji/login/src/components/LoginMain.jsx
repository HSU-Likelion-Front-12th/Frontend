import '../styles/LoginMain.css';
import React from 'react';
import { useNavigate } from 'react-router';
import img from '../imgs/bugi.png';


export default function LoginMain(){
    let savedId = sessionStorage.getItem("userId");
    let savedPw = sessionStorage.getItem("userPw");

    const navigate = useNavigate();
    function logoutClicked(){
        sessionStorage.removeItem("userId"); // 세션 스토리지에서 userId 삭제
        sessionStorage.removeItem("userPw");
        navigate('/')
    }
    function deleteClicked(){
        localStorage.removeItem("userId"); // 세션 스토리지에서 userId 삭제
        localStorage.removeItem("userPw");
        navigate('/')
    }
    return(
        <>
            <h2 className="header">{savedId ? `${savedId}님 환영합니다` : "환영합니다"}</h2>
            <hr/>
            <div className="img-container"><img src={img} alt=""className="bugi"></img></div>
            <div className="container">
                <button className = "change-button"  onClick={()=> navigate('/Change')}>비밀번호 변경</button>
                <button className = "logout-button"  onClick={logoutClicked}>로그아웃</button>
                <button className = "delete-button"  onClick={deleteClicked}>회원탈퇴</button>
            </div>
        </>
        
    );
}