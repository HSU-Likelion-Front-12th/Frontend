import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './commons/Header';
import CharacterImg from './commons/CharacterImg';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        id: "",
        pw: ""
    });
    
    const {id, pw} = userInfo;

    function onChange(e){
        const {name, value} = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        })
    }

    function login(){
        const user = JSON.parse(localStorage.getItem(id));
        if(id === "" || pw === ""){
            alert("아이디와 비밀번호를 입력해주세요.");
            return;
        }

        if(!localStorage.getItem(id)){
            alert("해당 id가 존재하지 않습니다.");
            return;
        }
        else{
            if(user.pw!==pw){
                alert("비밀번호가 맞지 않습니다.");
                return;
            }
            
            navigate("/signInPage", {state: {id}});
        }
    }

    return (
        <LoginPageWrapper>
            <Header text={"로그인"} />
            <CharacterImg />
            <input type="text" name='id' value={id} onChange={onChange} placeholder='아이디' />
            <input type="text" name='pw' value={pw} onChange={onChange} placeholder='비밀번호' />
            <button onClick={login}>로그인</button>
        </LoginPageWrapper>
    );
};

const LoginPageWrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center ;

    button{
        width: 352px;
        height: 48px;
        background-color: #0028DA;
        color: #fff;
    }
`;

export default LoginPage;