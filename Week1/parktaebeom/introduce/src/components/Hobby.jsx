import styled from "styled-components";
import img1 from "../images/IMG_6194.jpg";
import img2 from "../images/IMG_6620.JPG";
import img3 from "../images/IMG_6709.JPG";

const Subtitle = styled.p`
  color: #4a86ff;
  text-align: center;
  font-family: Inter;
  font-size: 70px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin: 0;
  padding-top: 60px;
  margin-bottom: 60px;
`;

const Hobbys = styled.div`
  display: flex;
  justify-content: center;
`;

const HobbyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  width: 380px;
  height: 80px;
  flex-shrink: 0;
`;

const HobbyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px 16px 0px 0px;
  background: #4a86ff;
  width: 380px;
  height: 80px;
  flex-shrink: 0;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 377px;
  flex-shrink: 0;
  border-radius: 0px 0px 16px 16px;
  border: 1px solid #ebedf8;
  background: #fff;
`;

const StyleImg = styled.img`
  width: 250px;
  height: 300px;
  flex-shrink: 0;
  border-radius: 16px;
`;

function Hobby() {
  return (
    <>
      <Subtitle>HOBBY</Subtitle>
      <Hobbys>
        <HobbyContainer>
          <HobbyBox>
            <p>사진 찍기</p>
          </HobbyBox>
          <ImgBox>
            <StyleImg src={img1} />
          </ImgBox>
        </HobbyContainer>
        <HobbyContainer>
          <HobbyBox>
            <p>볼링 치기</p>
          </HobbyBox>
          <ImgBox>
            <StyleImg src={img2} />
          </ImgBox>
        </HobbyContainer>
        <HobbyContainer>
          <HobbyBox>
            <p>보드 타기</p>
          </HobbyBox>
          <ImgBox>
            <StyleImg src={img3} />
          </ImgBox>
        </HobbyContainer>
      </Hobbys>
    </>
  );
}

export default Hobby;
