import styled from "styled-components";
function Section1() {
  return (
    <Container>
      <P>
        안녕하세요!
        <br />제 이름은 이현종입니다.
        <br />
        소통하는 개발자가 되고 싶어요.
      </P>
    </Container>
  );
}

export default Section1;

const Container = styled.div`
  width: 100%;
  height: 800px;
  background: #4a86ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const P = styled.p`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 80px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%;
`;
