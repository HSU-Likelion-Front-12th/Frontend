import React from "react";
import styled from "styled-components";
import menu3 from "../images/subway3.png";

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

function Menu3() {
  return (
    <MenuContainer>
      <Image src={menu3} />
      <br />
      <Strong>비엘티</Strong>
      <br />
      <br />
      <Span>오리지널 아메리칸 스타일 베이컨의 풍미와 바삭함 그대로</Span>
    </MenuContainer>
  );
}

export default Menu3;
