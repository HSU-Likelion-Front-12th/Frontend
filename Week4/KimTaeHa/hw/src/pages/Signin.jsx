import React from "react";
import HandleBtn from "../component/HandleBtn";
import Header from "../component/Header";
import Input from "../component/Input";
import styled from "styled-components";
import MainImage from "../component/MainImage";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Frame = styled.div`
    width: 60%;
    margin: 0 auto;
`;

const Div = styled.div`
    text-align: center;
`;
const Signin = () => {
    const navigate = useNavigate();
    const [loginVal, setLoginVal] = useState({
        name: null,
        password: null,
    });

    const handleChangeId = (e) => {
        setLoginVal({ ...loginVal, name: e.target.value });
    };

    const handleChangePw = (e) => {
        setLoginVal({ ...loginVal, password: e.target.value });
    };

    const handleClickLoginBtn = () => {
        if (
            !loginVal.name ||
            loginVal.name.length === 0 ||
            !loginVal.password ||
            loginVal.password.length === 0
        ) {
            alert("입력하지 않은 값이 있습니다.");
            return;
        }

        const usersId = JSON.parse(localStorage.getItem("users_id"));

        const usersPwd = JSON.parse(localStorage.getItem("users_password"));

        if (usersId !== null && usersPwd !== null) {
            if (
                usersId.includes(loginVal.name) &&
                usersPwd.includes(loginVal.password)
            ) {
                localStorage.setItem("id", loginVal.name);
                localStorage.setItem("password", loginVal.password);
                alert("성공적으로 로그인하였습니다!");
                navigate("/LoginMain");
            } else {
                alert("존재하지 않는 회원입니다.");
                return;
            }
        } else {
            alert("존재하지 않는 회원입니다.");
            return;
        }
    };

    const verifyAuth = () => {
        const id = localStorage.getItem("id");
        const password = localStorage.getItem("password");

        const usersId = JSON.parse(localStorage.getItem("users_id"));

        const usersPwd = JSON.parse(localStorage.getItem("users_password"));

        if (
            id !== null &&
            password !== null &&
            usersId !== null &&
            usersPwd !== null
        ) {
            if (id in usersId && password in usersPwd) {
                navigate("/LoginMain");
            } else {
                return;
            }
        }
    };

    useEffect(() => {
        verifyAuth();
    });

    return (
        <Frame>
            <Header text="로그인"></Header>

            <Div>
                <MainImage></MainImage>
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
                <HandleBtn
                    color="rgba(0, 40, 218, 1)"
                    text="로그인"
                    handling={handleClickLoginBtn}
                ></HandleBtn>
            </Div>
        </Frame>
    );
};

export default Signin;
