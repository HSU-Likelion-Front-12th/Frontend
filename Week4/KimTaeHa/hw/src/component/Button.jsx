import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = ({ color, text, routing }) => {
    const navigate = useNavigate();

    const Btn = styled.button`
        background-color: ${color};
        color: ${color === "white" ? "black" : "white"};
        font-weight: 800;
        font-size: 1.2rem;
        ${color === "white" ? "border : 1px solid gray;" : null}
        border-radius : 10px;
        width: 60%;
        height: 3rem;
        margin-top: 0.8rem;
    `;

    const handleBtn = () => {
        navigate(`/${routing}`);
    };

    return (
        <div>
            <Btn onClick={handleBtn}>{text}</Btn>
        </div>
    );
};

export default Button;
