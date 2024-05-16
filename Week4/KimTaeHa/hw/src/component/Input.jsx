import React from "react";
import styled from "styled-components";

const InputDiv = styled.div`
    border: 0.02rem solid rgba(122, 116, 133, 1);
    border-radius: 10px;
    width: 60%;
    height: 3rem;
    margin-top: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.8rem auto 0 auto;
`;

const InputComp = styled.input`
    width: 90%;
    height: 100%;
    border-radius: 10px;
`;

const Input = ({ type, placeholder, handling }) => {
    return (
        <InputDiv>
            <InputComp
                type={`${type}`}
                placeholder={`${placeholder}`}
                onChange={handling}
            ></InputComp>
        </InputDiv>
    );
};

export default Input;
