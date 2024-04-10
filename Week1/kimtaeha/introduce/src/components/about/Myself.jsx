import React from "react";
import styled from "styled-components";
import myImg from "../../images/profile.png";

const Myself = () => {
    const Frame = styled.div`
        padding-top: 1.875rem;
        width: 17.5rem;
        height: 19.25rem;
        background-color: #fff;
        border-radius: 1rem;
        border: 0.0625rem solid #ebedf8;

        @media screen and (max-width: 768px) {
            width: 80%;
        }

        @media screen and (min-width: 769px) and (max-width: 1024px) {
            margin-left: 10rem;
            width: 50%;
        }
    `;

    const ImgFrame = styled.div`
        width: 8.125rem;
        margin: 0 auto;
    `;

    const Img = styled.img`
        width: 8.125rem;
        height: 8.125rem;
        border-radius: 50%;
    `;

    const MyselfList = styled.ul`
        color: #484a64;

        font-family: Inter;
        font-size: 0.9375rem;
        font-style: normal;
        font-weight: 500;

        & li {
            display: flex;
        }

        & svg {
            width: 1.625rem;
            height: 1.625rem;
            margin-right: 0.625rem;
        }

        @media screen and (max-width: 768px) {
            padding-left: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: left;
        }

        & li {
            @media screen and (max-width: 768px) {
                display: flex;
                align-items: flex-start;
                text-align: left;
                padding-left: 0;
                margin-left: 0;
            }
        }
        @media screen and (min-width: 769px) and (max-width: 1024px) {
            padding: 0 3rem;
        }
    `;

    const Name = styled.div`
        margin-top: 1.25rem;
        margin-bottom: 1.25rem;
        color: #4a86ff;

        text-align: center;
        font-family: Inter;
        font-size: 1.875rem;
        font-style: normal;
        font-weight: 700;
    `;
    return (
        <Frame>
            <ImgFrame>
                <Img src={myImg} alt="이미지" />
            </ImgFrame>
            <Name class="name">김태하</Name>
            <MyselfList>
                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                    >
                        <path
                            d="M33.9843 26.3957C33.7436 28.225 32.8452 29.9042 31.4569 31.1195C30.0686 32.3349 28.2854 33.0033 26.4403 33C15.7212 33 7.00001 24.2789 7.00001 13.5598C6.9967 11.7147 7.66515 9.93154 8.8805 8.54328C10.0959 7.15503 11.775 6.25664 13.6043 6.01593C14.0669 5.95944 14.5354 6.05408 14.9398 6.28571C15.3441 6.51734 15.6628 6.87354 15.8481 7.30114L18.6993 13.6665V13.6827C18.8412 14.01 18.8998 14.3673 18.8699 14.7228C18.8399 15.0783 18.7224 15.4208 18.5279 15.7198C18.5036 15.7563 18.4779 15.79 18.4509 15.8238L15.6402 19.1556C16.6513 21.2103 18.8006 23.3406 20.8823 24.3545L24.1683 21.5586C24.2005 21.5315 24.2343 21.5063 24.2695 21.483C24.5683 21.2838 24.912 21.1621 25.2696 21.1291C25.6271 21.0961 25.9873 21.1528 26.3175 21.294L26.335 21.3021L32.695 24.152C33.1234 24.3366 33.4804 24.655 33.7128 25.0594C33.9452 25.4639 34.0405 25.9327 33.9843 26.3957Z"
                            fill="#BFC4D8"
                        />
                    </svg>
                    <div>010-9378-8326</div>
                </li>
                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                    >
                        <path
                            d="M32.9231 9H7.07692C6.79131 9 6.51739 9.11589 6.31542 9.32218C6.11346 9.52847 6 9.80826 6 10.1V28.8C6 29.3835 6.22692 29.9431 6.63085 30.3556C7.03477 30.7682 7.58261 31 8.15385 31H31.8462C32.4174 31 32.9652 30.7682 33.3692 30.3556C33.7731 29.9431 34 29.3835 34 28.8V10.1C34 9.80826 33.8865 9.52847 33.6846 9.32218C33.4826 9.11589 33.2087 9 32.9231 9ZM31.8462 28.8H8.15385V12.6011L19.2717 23.0112C19.4704 23.1975 19.7303 23.3009 20 23.3009C20.2697 23.3009 20.5296 23.1975 20.7283 23.0112L31.8462 12.6011V28.8Z"
                            fill="#BFC4D8"
                        />
                    </svg>
                    <div>xogk1128@naver.com</div>
                </li>
                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                    >
                        <path
                            d="M20 5C16.8185 5.00354 13.7684 6.2464 11.5187 8.45591C9.26905 10.6654 8.00361 13.6611 8 16.7858C8 26.8708 18.9091 34.4873 19.3741 34.8061C19.5575 34.9323 19.776 35 20 35C20.224 35 20.4425 34.9323 20.6259 34.8061C21.0909 34.4873 32 26.8708 32 16.7858C31.9964 13.6611 30.731 10.6654 28.4813 8.45591C26.2316 6.2464 23.1815 5.00354 20 5ZM20 12.5001C20.863 12.5001 21.7067 12.7514 22.4243 13.2224C23.1419 13.6933 23.7012 14.3626 24.0315 15.1457C24.3617 15.9289 24.4482 16.7906 24.2798 17.6219C24.1114 18.4533 23.6958 19.2169 23.0856 19.8163C22.4753 20.4157 21.6978 20.8239 20.8513 20.9892C20.0048 21.1546 19.1275 21.0697 18.3301 20.7454C17.5328 20.421 16.8513 19.8717 16.3718 19.1669C15.8923 18.4621 15.6364 17.6335 15.6364 16.7858C15.6364 15.6492 16.0961 14.5591 16.9144 13.7553C17.7328 12.9516 18.8427 12.5001 20 12.5001Z"
                            fill="#BFC4D8"
                        />
                    </svg>
                    <div>경기도 남양주시 와부읍</div>
                </li>
            </MyselfList>
        </Frame>
    );
};

export default Myself;
