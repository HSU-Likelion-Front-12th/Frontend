import React from "react";
import styled from "styled-components";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";
import Menu4 from "./Menu4";

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

function MenuSection() {
  return (
    <MenuContainer>
      <Menu1 />
      <Menu2 />
      <Menu3 />
      <Menu4 />
    </MenuContainer>
  );
}

export default MenuSection;
