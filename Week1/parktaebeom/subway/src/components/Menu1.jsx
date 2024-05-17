import styled from "styled-components";
import menu1 from "../images/subway1.png";

const ExplainStyle = styled.div`
  display: inline-block;
  text-align: center;
  width: 14rem;
  height: 14rem;
  margin-right: 0.6rem;
`;

function Menu1() {
  const imgStyle = {
    width: "10rem",
    height: "6rem",
  };

  const spanStyle = {
    fontSize: "0.8rem",
    color: "gray",
  };
  return (
    <ExplainStyle>
      <img src={menu1} style={imgStyle} />
      <br />
      <strong>에그마요</strong>
      <br />
      <br />
      <span style={spanStyle}>
        부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러
      </span>
    </ExplainStyle>
  );
}

export default Menu1;
