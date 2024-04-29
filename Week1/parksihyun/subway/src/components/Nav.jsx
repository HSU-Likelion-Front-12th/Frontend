import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  max-width: 80rem;
  height: 100%;
  display: flex;
  color: block;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  & > div {
    &:hover strong {
      color: rgb(31, 158, 31);
      border-bottom: 3px solid rgb(31, 158, 31);
      cursor: pointer;
    }
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 100%;
  min-width: 6rem;
`;

const Strong = styled.strong`
  font-size: 1rem;
`;

const NavStyle = styled.nav`
  height: 7vh;
  display: flex;
  justify-content: center;
`;

function Nav() {
  return (
    <NavStyle>
      <NavContainer>
        <Div>
          <Strong>메뉴소개</Strong>
        </Div>
        <Div>
          <Strong>이용방법</Strong>
        </Div>
        <Div>
          <Strong>새소식</Strong>
        </Div>
        <Div>
          <Strong>서브웨이</Strong>
        </Div>
        <Div>
          <Strong>가맹점</Strong>
        </Div>
        <Div>
          <Strong>온라인 주문</Strong>
        </Div>
      </NavContainer>
    </NavStyle>
  );
}

export default Nav;
