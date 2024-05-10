import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Nav = () => {
    const NavFrame = styled.nav`
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin: 0 auto;
        padding: 0 1rem;

        max-width: 80rem;
        @media screen and (max-width: 768px) {
            flex-direction: column;
            align-items: flex-start;
            padding: 1.2rem 3rem;
        }
    `;

    const Logo = styled.div`
        color: #4a86ff;
        font-family: Inter;
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 700;
    `;

    const NavContainer = styled.ul`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-grow: 1;

        @media screen and (max-width: 768px) {
            display: none;
            flex-direction: column;
            align-items: center;
            padding-left: 0;
            width: 100%;

            &.active {
                display: flex;
            }
        }
    `;

    const Li = styled.li`
        padding: 1rem 1.2rem;
        font-family: Inter;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 600;
        min-width: 6rem;

        @media screen and (max-width: 768px) {
            width: 100%;
            text-align: center;
        }
    `;

    const menuStyle = {
        position: "absolute",
        right: "2rem",
        top: "1.55rem",
    };

    const Itag = styled.i`
        display: none;
        font-size: 1.2rem;

        @media screen and (max-width: 768px) {
            display: block;
        }
    `;

    const [isAllVaild, setIsAllVaild] = useState(false);

    const handleBtnClick = () => {
        isAllVaild ? setIsAllVaild(false) : setIsAllVaild(true);
    };

    return (
        <NavFrame>
            <Logo>PORTFOLIO.</Logo>
            <NavContainer className={`nav_menu ${isAllVaild ? "" : "active"}`}>
                <Li>ABOUT</Li>
                <Li>HOBBBY</Li>
                <Li>CONTACT</Li>
            </NavContainer>
            <a
                href="#"
                onClick={() => handleBtnClick()}
                className="nav_toggleBtn"
                style={menuStyle}
            >
                <Itag className="fas fa-bars"></Itag>
            </a>
        </NavFrame>
    );
};

export default Nav;
