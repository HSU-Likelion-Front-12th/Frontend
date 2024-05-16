import React, { useState } from "react";
import HandleBtn from "../component/HandleBtn";
import Header from "../component/Header";
import Input from "../component/Input";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Frame = styled.div`
    width: 60%;
    margin: 0 auto;
`;

const Div = styled.div`
    text-align: center;
`;

const Signup = () => {
    const navigate = useNavigate();

    const [signUpVal, setsignUpVal] = useState({
        email: null,
        phone: null,
        name: null,
        password: null,
        checkPwd: null,
    });

    const handleChangeEmail = (e) => {
        setsignUpVal({ ...signUpVal, email: e.target.value });
    };

    const handleChangePhone = (e) => {
        setsignUpVal({ ...signUpVal, phone: e.target.value });
    };

    const handleChangeId = (e) => {
        setsignUpVal({ ...signUpVal, name: e.target.value });
    };

    const handleChangePw = (e) => {
        setsignUpVal({ ...signUpVal, password: e.target.value });
    };

    const handleChangeCheckPwd = (e) => {
        setsignUpVal({ ...signUpVal, checkPwd: e.target.value });
    };

    const handleClickSignUoBtn = () => {
        if (
            !signUpVal.email ||
            signUpVal.email.length === 0 ||
            !signUpVal.phone ||
            signUpVal.phone.length === 0 ||
            !signUpVal.name ||
            signUpVal.name.length === 0 ||
            !signUpVal.password ||
            signUpVal.password.length === 0 ||
            !signUpVal.checkPwd ||
            signUpVal.checkPwd.length === 0
        ) {
            alert("입력하지 않은 값이 있습니다.");
            return;
        }

        if (signUpVal.password !== signUpVal.checkPwd) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        if (
            localStorage.getItem("users_id") !== null &&
            localStorage.getItem("users_password") !== null
        ) {
            const usersId = JSON.parse(localStorage.getItem("users_id"));
            const usersPwd = JSON.parse(localStorage.getItem("users_password"));

            if (usersId.includes(signUpVal.name)) {
                alert("이미 존재하는 회원입니다.");
                return;
            }

            usersId.push(signUpVal.name);
            usersPwd.push(signUpVal.password);
            localStorage.setItem("users_id", JSON.stringify(usersId));
            localStorage.setItem("users_password", JSON.stringify(usersPwd));

            localStorage.setItem("id", signUpVal.name);
            localStorage.setItem("password", signUpVal.password);
        } else {
            const id = [signUpVal.name];
            const pwd = [signUpVal.password];
            localStorage.setItem("users_id", JSON.stringify(id));
            localStorage.setItem("users_password", JSON.stringify(pwd));

            localStorage.setItem("id", signUpVal.name);
            localStorage.setItem("password", signUpVal.password);
        }

        alert("성공적으로 가입되었습니다.");
        navigate("/LoginMain");
    };

    return (
        <Frame>
            <Header text="회원가입"></Header>
            <Div>
                <Input
                    type="text"
                    placeholder="이메일"
                    handling={handleChangeEmail}
                ></Input>
                <Input
                    type="text"
                    placeholder="전화번호"
                    handling={handleChangePhone}
                ></Input>
                <Input
                    type="text"
                    placeholder="아이디"
                    handling={handleChangeId}
                ></Input>
                <Input
                    type="password"
                    placeholder="비밀번호"
                    handling={handleChangePw}
                ></Input>
                <Input
                    type="password"
                    placeholder="비밀번호 확인"
                    handling={handleChangeCheckPwd}
                ></Input>
                <HandleBtn
                    color="rgba(0, 40, 218, 1)"
                    text="회원가입"
                    handling={handleClickSignUoBtn}
                ></HandleBtn>
            </Div>
        </Frame>
    );
};

export default Signup;
