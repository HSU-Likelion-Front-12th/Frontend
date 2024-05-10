import React from "react";
import styled from "styled-components";
import TitleImage from "../assets/images/Title.png";

const NavbarContainer = styled.div`
  background: #f0f0f0;
  padding: 2vw 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.img`
  width: 15%;
  display: flex;
  margin-right: 5vw;
`;

const NavItem = styled.a`
  margin: 0 2vw;
  color: #333;
  text-decoration: none;
  font-weight: bold;
`;

const Navbar = () => (
  <NavbarContainer>
    <Title src={TitleImage} alt="Title" />
    <NavItem href="#about">ABOUT</NavItem>
    <NavItem href="#hobby">HOBBY</NavItem>
    <NavItem href="#contact">CONTACT</NavItem>
  </NavbarContainer>
);

export default Navbar;
