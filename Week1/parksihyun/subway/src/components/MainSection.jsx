import React from "react";
import styled from "styled-components";
import background from "../images/main.png";

const ImageContainer = styled.img`
  display: flex;
  width: 100vw;
  height: 45vh;
`;

function MainSection() {
  return <ImageContainer src={background} />;
}

export default MainSection;
