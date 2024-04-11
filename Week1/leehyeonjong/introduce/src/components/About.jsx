import styled from "styled-components";
import introduce from "../images/introduce.png";
function About() {
  return (
    <>
      <Font>ABOUT</Font>
      <AboutContainer>
        <Profile>
          <img src={introduce} style={introduceStyle} />
          <Name>이현종</Name>
          <TextContainer>
            <Text>TEL : 010.7310.7496</Text>
            <Text>EMAIL : you011217@naver.com</Text>
            <Text>ADDRESS : 서울특별시 노원구 하계동</Text>
          </TextContainer>
        </Profile>
        <DetailContainer>
          <Detail>
            EDUCATION
            <br />
            <Span>
              한성대 컴퓨터공학부
              <br />
              2021.03~
            </Span>
          </Detail>
          <Detail>
            WORK
            <br />
            <Span>FrontEnd Developer</Span>
          </Detail>
        </DetailContainer>
        <DetailContainer>
          <Detail>
            SKILLS
            <br />
            <Span>
              C<br />
              Python
              <br />
              JavaScript
            </Span>
          </Detail>
          <Detail>
            ACTIVITIES
            <br />
            <Span>멋쟁이사자처럼 12기</Span>
          </Detail>
        </DetailContainer>
      </AboutContainer>
    </>
  );
}

export default About;

const introduceStyle = {
  width: "196.078px",
  height: "200px",
  flexShrink: "0",
  marginLeft: "92px",
  marginTop: "30px",
  marginRight: "91.92px",
};
const Font = styled.div`
  color: #4a86ff;
  text-align: center;
  font-family: Inter;
  font-size: 70px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  padding-top: 60px;
  padding-bottom: 60px;
`;
const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 500px;
  margin-bottom: 200px;
  gap: 80px;
`;
const Profile = styled.div`
  width: 380px;
  height: 500px;
  border-radius: 16px;
  border: 1px solid #ebedf8;
  background: #fff;
  flex-shrink: 0;
`;
const Name = styled.div`
  color: #4a86ff;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 25px;
  margin-bottom: 25px;
`;
const TextContainer = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  align-items: space-between;
  flex-direction: column;
`;
const Text = styled.div`
  color: #484a64;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 30px;
  margin-left: 60px;
  margin-right: 60px;
`;
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-right: 150px;
`;
const Detail = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
`;

const Span = styled.span`
  color: #626682;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 170%;
`;
