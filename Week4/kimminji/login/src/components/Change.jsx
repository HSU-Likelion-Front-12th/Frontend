import '../styles/Change.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
export default function Change(){

    let [email,setEmail] = useState('');
    let [phone,setPhone] = useState('');
    let [userId,setUserId] = useState('');
    let [newPw,setNewPw] = useState('');
    let [checkPw,setCheckPw] = useState('');

    let navigate = useNavigate();
    useEffect(() => {

    const storedEmail = localStorage.getItem('email') || '';
    const storedPhone = localStorage.getItem('phone') || '';
    const storedUserId = localStorage.getItem('userId') || '';

    setEmail(storedEmail);
    setPhone(storedPhone);
    setUserId(storedUserId);}, []); 

function changeClicked(e){
    e.preventDefault();
    
        if(newPw != checkPw){ 
        alert("비밀번화와 비밀번화 확인이 일치하지 않습니다.");
        return;
    }
    localStorage.setItem('userPW', newPw);

    navigate('/Signin');
}

    return(
        <>
        <h2 className="header">비밀번호 변경</h2>
        <hr/>
        <div className="container">
            
        <input type="text" placeholder="이메일 ex) abcd@naver.com" className="input-field"  value={email} readOnly/>
        <input type="text" placeholder="전화번호 ex) 01000000000" className="input-field"  value={phone} readOnly/>
        <input type="text" placeholder="아이디" className="input-field"  value={userId} readOnly />
        <input type="password" placeholder="비밀번호" className="input-field"  value={newPw} onChange={(e) => setNewPw(e.target.value)} />
        <input type="password" placeholder="비밀번호 확인" className="input-field"  value={checkPw} onChange={(e) => setCheckPw(e.target.value)} />
            <button className = "chaange-button" onClick={changeClicked}>비밀번호 변경</button>
        </div>
        </>
    )
}