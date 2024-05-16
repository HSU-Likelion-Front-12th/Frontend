import React from "react";
import Button from "../component/Button";
import Header from "../component/Header";
import styled from "styled-components";
import MainImage from "../component/MainImage";

const Frame = styled.div`
    width: 60%;
    margin: 0 auto;
`;

const Div = styled.div`
    text-align: center;
`;

const Main = () => {
    return (
        <Frame>
            <Header text="홈"></Header>

            <Div>
                <MainImage></MainImage>
                <Button color="white" text="로그인" routing="Signin"></Button>
                <Button
                    color="rgba(0, 40, 218, 1)"
                    text="회원가입"
                    routing="Signup"
                ></Button>
            </Div>
        </Frame>
    );
};

export default Main;
