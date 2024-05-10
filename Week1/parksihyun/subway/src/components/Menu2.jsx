import React from "react";
import styled from "styled-components";
import menu2 from "../images/subway2.png";

const MenuContainer = styled.div`
  display: inline-block;
  text-align: center;
  width: 14rem;
  height: 14rem;
  margin-right: 0.6rem;
`;

const Image = styled.img`
  width: 10rem;
  height: 6rem;
`;

const Strong = styled.strong`
  font-size: 1rem;
`;

const Span = styled.span`
  font-size: 0.8rem;
  color: gray;
`;

function Menu2() {
  return (
    <MenuContainer>
      <Image src={menu2} />
      <br />
      <Strong>이탈리안 비엠티</Strong>
      <br />
      <br />
      <Span>
        페페로니, 살라미 그리고 햄이 만들어내는 최상의 조화! 전세계가 사랑하는
        써브웨이의 베스트셀러!
      </Span>
    </MenuContainer>
  );
}

export default Menu2;
