import React, { useEffect, useState } from "react";
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

const Change = () => {
    const navigate = useNavigate();

    const [changeVal, setchangeVal] = useState({
        email: null,
        phone: null,
        name: null,
        password: null,
        checkPwd: null,
    });

    const handleChangeEmail = (e) => {
        setchangeVal({ ...changeVal, email: e.target.value });
    };

    const handleChangePhone = (e) => {
        setchangeVal({ ...changeVal, phone: e.target.value });
    };

    const handleChangeId = (e) => {
        setchangeVal({ ...changeVal, name: e.target.value });
    };

    const handleChangePw = (e) => {
        setchangeVal({ ...changeVal, password: e.target.value });
    };

    const handleChangeCheckPwd = (e) => {
        setchangeVal({ ...changeVal, checkPwd: e.target.value });
    };

    const handleClickChangeBtn = () => {
        const id = localStorage.getItem("id");
        if (
            !changeVal.email ||
            changeVal.email.length === 0 ||
            !changeVal.phone ||
            changeVal.phone.length === 0 ||
            !changeVal.name ||
            changeVal.name.length === 0 ||
            !changeVal.password ||
            changeVal.password.length === 0 ||
            !changeVal.checkPwd ||
            changeVal.checkPwd.length === 0
        ) {
            alert("입력하지 않은 값이 있습니다.");
            return;
        }

        if (changeVal.id !== id) {
            alert("아이디가 일치하지 않습니다.");
            return;
        }

        if (changeVal.password !== changeVal.checkPwd) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        localStorage.setItem("password", changeVal.password);
        alert("성공적으로 변경되었습니다.");
        navigate("/LoginMain");
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
            <Header text="비밀번호 변경"></Header>
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
                    text="비밀번호 변경"
                    handling={handleClickChangeBtn}
                ></HandleBtn>
            </Div>
        </Frame>
    );
};

export default Change;
