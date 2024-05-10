import React from "react";
import styled from "styled-components";
import HobbyFrame from "./HobbyFrame";
import img1 from "../../images/hobby1.png";
import img2 from "../../images/hobby2.png";
import img3 from "../../images/hobby3.png";

const Section2 = (props) => {
    const HobbyFrames = styled.div`
        display: flex;
        justify-content: center;

        padding-top: 3rem;

        @media screen and (max-width: 768px) {
            flex-direction: column;
            align-items: center;
        }
    `;

    return (
        <section style={props.sectionStyle}>
            <div style={props.subTitleStype}>HOBBY</div>
            <HobbyFrames>
                <HobbyFrame title="보드 타기" imgSrc={img1} />
                <HobbyFrame title="사진 찍기" imgSrc={img2} />
                <HobbyFrame title="맛집 다니기" imgSrc={img3} />
            </HobbyFrames>
        </section>
    );
};

export default Section2;
