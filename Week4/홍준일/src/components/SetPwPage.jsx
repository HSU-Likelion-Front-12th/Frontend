import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './commons/Header';

const SetPwPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state.id;
    const userData = JSON.parse(localStorage.getItem(id));
    const [input, setInput] = useState({
        pw: "",
        checkPw: "",
    });

    function onChange(e){
        const {name, value} = e.target;
        setInput({
            ...input,
            [name]: value
        })
    }

    function resetPw(e){
        e.preventDefault();

        if(input.pw!==input.checkPw){
            alert("비밀번호가 다릅니다.");
            return;
        }
        if(input.pw==="" || input.checkPw===""){
            alert("변경하실 비밀번호를 입력해주세요.");
            return;
        }

        const newUserData = JSON.stringify({
            ...userData,
            pw: input.pw
        })

        localStorage.setItem(id, newUserData);
        alert("비밀번호 재설정이 완료되었습니다.");
        navigate("/signInPage", {state: {id}});
    }

    return (
        <SetPWPageWrapper>
            <Header text={"비밀번호 변경"} />
            <form>
                <input type="text" value={userData.email} readOnly />
                <input type="text" value={userData.number} readOnly />
                <input type="text" value={id} readOnly />
                <input type="text" onChange={onChange} value={input.pw} name='pw' placeholder='비밀번호' />
                <input type="text" onChange={onChange} value={input.checkPw} name='checkPw' placeholder='비밀번호 확인' />
                <button onClick={resetPw}>비밀번호 변경</button>
            </form>
        </SetPWPageWrapper>
    );
};

const SetPWPageWrapper = styled.section`
    width: 100%;
    height: 100%;
    
    form{
        text-align: center;
    }

    input{
        margin-bottom: 20px;
        font-weight: 600;
    }

    input:nth-child(4),
    input:nth-child(5){
        font-weight: normal;
    }

    button{
        width: 352px;
        height: 48px;
        background-color: #0028DA;
        color: #fff;
    }
`;

export default SetPwPage;