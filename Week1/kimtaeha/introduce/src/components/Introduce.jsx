import React from "react";
import styled from "styled-components";

const Introduce = () => {
    const Section = styled.div`
        background-color: #4a86ff;
        text-align: center;
        font-family: Inter;
        font-size: 3.125rem;
        font-style: normal;
        font-weight: 600;
        line-height: 4rem;
        color: #fff;

        padding: 6.25rem 0;

        @media screen and (max-width: 768px) {
            padding: 5rem 2rem;
        }
    `;

    return (
        <Section>
            <div>안녕하세요!</div>
            <div>제 이름은 김태하입니다.</div>
            <div>소통하는 개발자가 되고 싶어요.</div>
        </Section>
    );
};

export default Introduce;
