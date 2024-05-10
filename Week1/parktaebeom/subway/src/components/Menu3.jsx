import styled from "styled-components";
import menu3 from "../images/subway3.png";

const ExplainStyle = styled.div`
  display: inline-block;
  text-align: center;
  width: 14rem;
  height: 14rem;
  margin-right: 0.6rem;
`;

function Menu3() {
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
      <img src={menu3} style={imgStyle} />
      <br />
      <strong>비엘티</strong>
      <br />
      <br />
      <span style={spanStyle}>
        오리지널 아메리칸 스타일 베이컨의 풍미와 바삭함 그래도
      </span>
    </ExplainStyle>
  );
}

export default Menu3;
