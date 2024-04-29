import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";

const HeaderContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 250px;
  height: fit-content;
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoImage src={logo} />
    </HeaderContainer>
  );
}

export default Header;
