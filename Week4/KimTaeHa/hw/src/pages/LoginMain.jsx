import React, { useEffect, useState } from "react";
import Button from "../component/Button";
import Header from "../component/Header";
import styled from "styled-components";
import MainImage from "../component/MainImage";
import HandleBtn from "../component/HandleBtn";
import { useNavigate } from "react-router-dom";

const Frame = styled.div`
    width: 60%;
    margin: 0 auto;
`;

const Div = styled.div`
    text-align: center;
`;

const LoginMain = () => {
    const navigate = useNavigate();
    const [id, setId] = useState("");

    const handleClickLogoutBtn = () => {
        localStorage.removeItem("id");
        localStorage.removeItem("password");
        alert("로그아웃 되었습니다.");
        navigate("/SignIn");
    };

    const handleClickWithdrawtBtn = () => {
        const userId = localStorage.getItem("id");
        const userPwd = localStorage.getItem("password");

        localStorage.removeItem("id");
        localStorage.removeItem("password");

        // 회원 가입이 되어 있는 사용자를 가져와 현재 유저 제거
        let usersId = JSON.parse(localStorage.getItem("users_id"));
        let usersPwd = JSON.parse(localStorage.getItem("users_password"));

        usersId = usersId.filter((element) => element !== userId);
        usersPwd = usersPwd.filter((element) => element !== userPwd);

        localStorage.setItem("users_id", JSON.stringify(usersId));
        localStorage.setItem("users_password", JSON.stringify(usersPwd));

        alert("회원탈퇴 하였습니다.");
        navigate("/SignIn");
    };

    const verifyAuth = () => {
        const id = localStorage.getItem("id");
        const password = localStorage.getItem("password");

        if (
            localStorage.getItem("users_id") !== null &&
            localStorage.getItem("users_password") !== null &&
            id !== null &&
            password !== null
        ) {
            const usersId = JSON.parse(localStorage.getItem("users_id"));
            const usersPwd = JSON.parse(localStorage.getItem("users_password"));

            if (usersId.includes(id) && usersPwd.includes(password)) {
                setId(id);
                return;
            } else {
                alert("로그인된 사용자만 접근 가능합니다.");
                navigate("/SignIn");
            }
        } else {
            alert("로그인된 사용자만 접근 가능합니다.");
            navigate("/SignIn");
        }
    };

    useEffect(() => {
        verifyAuth();
    });

    return (
        <Frame>
            <Header text={`${id}님 환영합니다`}></Header>

            <Div>
                <MainImage></MainImage>
                <Button
                    color="white"
                    text="비밀번호 변경"
                    routing="Change"
                ></Button>
                <HandleBtn
                    color="rgba(0, 40, 218, 1)"
                    text="로그아웃"
                    handling={handleClickLogoutBtn}
                ></HandleBtn>
                <HandleBtn
                    color="rgba(218, 0, 0, 1)"
                    text="회원탈퇴"
                    handling={handleClickWithdrawtBtn}
                ></HandleBtn>
            </Div>
        </Frame>
    );
};

export default LoginMain;
