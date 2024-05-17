import React from "react";
import styled from "styled-components";
import menu1 from "../images/subway1.png";

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

function Menu1() {
  return (
    <MenuContainer>
      <Image src={menu1} />
      <br />
      <Strong>에그마요</Strong>
      <br />
      <br />
      <Span>부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러</Span>
    </MenuContainer>
  );
}

export default Menu1;
