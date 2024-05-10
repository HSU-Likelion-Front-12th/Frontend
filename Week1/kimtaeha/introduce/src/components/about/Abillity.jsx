import React from "react";
import styled from "styled-components";

const Abillity = () => {
    const AbillityFrame = styled.div`
        margin-left: 1.875rem;
        font-family: Inter;
        font-size: 1.5625rem;
        font-style: normal;
        font-weight: 700;

        display: flex;

        @media screen and (min-width: 769px) and (max-width: 1024px) {
            width: 50%;
        }
    `;

    const Abillity = styled.div`
        display: flex;
        flex-direction: column;
        width: 18.125rem;

        @media screen and (max-width: 768px) {
            width: 100%;
            padding: 2rem;
        }
    `;

    const AbillityTitle = styled.div`
        margin-bottom: 0.625rem;

        @media screen and (max-width: 768px) {
            padding-top: 2rem;
        }
    `;

    const AbillityContent = styled.div`
        color: #626682;

        font-family: Inter;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        padding: 0.3rem 0;
    `;

    const AbillitySecond = styled.div`
        margin-top: auto;
    `;

    return (
        <AbillityFrame>
            <Abillity>
                <div>
                    <AbillityTitle>EDUCATION</AbillityTitle>
                    <AbillityContent>한성대학교 컴퓨터공학부</AbillityContent>
                    <AbillityContent>2019.03~2025.02</AbillityContent>
                </div>
                <AbillitySecond>
                    <AbillityTitle>WORK</AbillityTitle>
                    <AbillityContent>백엔드 개발자</AbillityContent>
                    <AbillityContent>프론트엔드 개발자</AbillityContent>
                </AbillitySecond>
            </Abillity>
            <Abillity>
                <div>
                    <AbillityTitle>SKILLS</AbillityTitle>
                    <AbillityContent>JAVA</AbillityContent>
                    <AbillityContent>Pyhton</AbillityContent>
                    <AbillityContent>C++</AbillityContent>
                    <AbillityContent>JavaScript</AbillityContent>
                    <AbillityContent>Kotlin</AbillityContent>
                </div>
                <AbillitySecond>
                    <AbillityTitle>ACTIVITIES</AbillityTitle>
                    <AbillityContent>멋쟁이 사자처럼 11기</AbillityContent>
                    <AbillityContent>멋쟁이 사자처럼 12기</AbillityContent>
                </AbillitySecond>
            </Abillity>
        </AbillityFrame>
    );
};

export default Abillity;
