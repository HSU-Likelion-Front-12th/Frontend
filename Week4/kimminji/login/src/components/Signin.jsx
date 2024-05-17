import { useState } from "react";
import { useNavigate } from "react-router";
import img from '../imgs/bugi.png';
import '../styles/Signin.css';

export default function Signin(){
    let [userId,setUserId]=useState('');
    let[userPw,setUserPw] = useState('');
    let [savedUserId, setSavedUserId] = useState('');
    let [savedUserPw, setSavedUserPw] = useState('');
    
    let navigate = useNavigate();

    function loginClicked(){
        const savedUserId = localStorage.getItem("userId");
        const savedUserPw = localStorage.getItem("userPw");
        
        if (userId === savedUserId && userPw === savedUserPw) {
            // 로그인 성공
            navigate('/LoginMain');
        } else {
            // 로그인 실패
            alert('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
    }
        
    return(
        <>
        <h2 className="header">로그인</h2>
            <hr/>
            <div className="img-container"><img src={img} alt="" className="bugi"></img></div>
            <div className="login-container">
                <input type="text" placeholder="아이디" className="input-field"  onChange={(e)=>setUserId(e.target.value)} />
                <input type="password" placeholder="비밀번호" className="input-field"  onChange={(e)=>setUserPw(e.target.value)}/>
                <button className = "button"  onClick={loginClicked}>로그인</button>
                </div>
                
    

        </>
        
    );
}