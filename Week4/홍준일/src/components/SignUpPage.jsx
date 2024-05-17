import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Header from './commons/Header';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        number: "",
        id: "",
        pw: "",
        checkPw: ""
    });

    const { checkPw, ...userData } = input;
    const { email, number, id, pw } = userData;
    const focus = useRef(null);

    function onChange(e) {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        })
    }

    function signUp(e) {
        e.preventDefault();

        if (!input.email || !input.number || !input.id || !input.pw) {
            alert("모든 필수 입력란을 입력하세요.");
            return;
        }

        if(localStorage.getItem(id)){
            alert("이미 존재하는 회원입니다.");
            return;
        }

        if (pw !== checkPw) {
            alert("비밀번호가 다릅니다.");
            focus.current.focus();
            return;
        }
        
        localStorage.setItem(id, JSON.stringify({email, number, pw}));

        alert("회원가입이 완료되었습니다.");
        navigate("/");
    }

    return (
        <SignUpPageWrapper>
            <Header text={"회원가입"} />
            <form>
                <input type="text" onChange={onChange} value={email} placeholder='이메일 ex) abc123@naver.com' name='email' required />
                <input type="text" onChange={onChange} value={number} placeholder='전화번호 ex) 01000000000' name='number' required />
                <input type="text" onChange={onChange} value={id} placeholder='아이디' name='id' required />
                <input type="text" onChange={onChange} value={pw} placeholder='비밀번호' name='pw' required />
                <input type="text" ref={focus} onChange={onChange} value={checkPw} placeholder='비밀번호 확인' name='checkPw' required />
                <button onClick={signUp}>회원가입</button>
            </form>
        </SignUpPageWrapper>
    );
};

const SignUpPageWrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    form{
        text-align: center;
    }

    input{
        margin-bottom: 20px;
    }

    button{
        width: 352px;
        height: 48px;
        background-color: #0028DA;
        color: #fff;
    }
`;

export default SignUpPage;