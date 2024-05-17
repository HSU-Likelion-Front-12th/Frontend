import React from "react";
import styled from "styled-components";
import menu4 from "../images/subway2.png";

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

function Menu4() {
  return (
    <MenuContainer>
      <Image src={menu4} />
      <br />
      <Strong>햄</Strong>
      <br />
      <br />
      <Span>
        기본 중에 기본! 풍부한 햄이 만들어내는 입 안 가득 넘치는 맛의 향연
      </Span>
    </MenuContainer>
  );
}

export default Menu4;
