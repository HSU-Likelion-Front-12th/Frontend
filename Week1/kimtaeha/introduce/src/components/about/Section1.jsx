import React from "react";
import Myself from "./Myself";
import styled from "styled-components";
import Abillity from "./Abillity";

const Section1 = (props) => {
    const AboutContent = styled.div`
        display: flex;
        padding: 3rem;

        justify-content: center;

        @media screen and (max-width: 768px) {
            flex-direction: column;

            align-items: center;
            margin: 0 auto;
            padding: 0;
            padding-top: 1rem;
        }
    `;
    return (
        <section style={props.sectionStyle}>
            <div style={props.subTitleStype}>ABOUT</div>
            <AboutContent>
                <Myself />
                <Abillity />
            </AboutContent>
        </section>
    );
};

export default Section1;
