import styled from "styled-components";

const DivContainer = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  text-align: center; /* 내부 텍스트를 가운데 정렬 */
  background: #4a86ff;
`;

const IntroP = styled.p`
  margin: 0; /* p 태그의 margin 제거 */
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 80px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%; /* 120px */
`;

function Intro() {
  return (
    <DivContainer>
      <IntroP>안녕하세요!</IntroP>
      <IntroP>제 이름은 박태범입니다.</IntroP>
      <IntroP>소통하는 개발자가 되고 싶어요.</IntroP>
    </DivContainer>
  );
}

export default Intro;
