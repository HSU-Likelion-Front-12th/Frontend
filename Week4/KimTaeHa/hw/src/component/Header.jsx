import React from "react";
import styled from "styled-components";

const Title = styled.div`
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700;
    width: 100%;
    border-bottom: 0.02rem solid;
    padding: 1rem 0;
`;

const Line = styled.div`
    border-bottom: 1px solid 0;
    padding: 1rem 0;
`;

const Header = ({ text }) => {
    return (
        <>
            <Title>{text}</Title>
            <Line></Line>
        </>
    );
};

export default Header;
