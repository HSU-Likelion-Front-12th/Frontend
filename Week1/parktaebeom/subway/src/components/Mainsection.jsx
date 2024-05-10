import background from "../images/main.png";
import styled from "styled-components";

const ImgStyle = styled.img`
  display: flex;
  width: 100vw;
  height: 45vh;
`;

function MainSection() {
  return <ImgStyle src={background} />;
}

export default MainSection;
