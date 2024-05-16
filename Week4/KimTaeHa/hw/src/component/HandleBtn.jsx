import React from "react";
import styled from "styled-components";

const HandleBtn = ({ color, text, handling }) => {
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

    return (
        <div>
            <Btn onClick={handling}>{text}</Btn>
        </div>
    );
};

export default HandleBtn;
