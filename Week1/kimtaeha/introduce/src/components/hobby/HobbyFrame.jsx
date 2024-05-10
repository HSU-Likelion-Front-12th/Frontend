import React from "react";
import styled from "styled-components";

const HobbyFrame = (props) => {
    const Hobby = styled.div`
        width: 18.75rem;
        padding: 0 0.625rem;

        @media screen and (max-width: 768px) {
            margin-bottom: 2rem;
        }
    `;

    const HobbyTitle = styled.div`
        background-color: #4a86ff;
        height: 3.125rem;
        color: #fff;

        text-align: center;
        font-family: Inter;
        font-size: 1.375rem;
        font-style: normal;
        font-weight: 700;

        display: flex;

        align-items: center;
        justify-content: center;

        border-radius: 0.8125rem 0.8125rem 0 0;
    `;

    const HobbyImg = styled.div`
        display: flex;
        height: 15rem;
        width: 18.75rem;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        background: #fff;

        & img {
            border-radius: 1rem;
            height: 13rem;
            padding: 1rem;
        }
    `;

    return (
        <Hobby>
            <HobbyTitle>
                <div>{props.title}</div>
            </HobbyTitle>
            <HobbyImg>
                <img src={props.imgSrc} alt="" />
            </HobbyImg>
        </Hobby>
    );
};

export default HobbyFrame;
