import styled from "styled-components";
import profile from "../images/profile.png";
import phone from "../images/phone.png";
import message from "../images/message.png";
import mappin from "../images/mappin.png";

const background = {
  background: "#f3f5ff",
};

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

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Profile = styled.div`
  width: 380px;
  height: 498px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #ebedf8;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyProfileImg = styled.img`
  width: 196.078px;
  height: 200px;
  border-radius: 50%;
  flex-shrink: 0;
  fill: #ebedf8;
  margin-top: 30px;
`;

const MyProfileSpan = styled.span`
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

const ProfileContainer = styled.div`
  display: flex;
  width: 380px;
  align-items: center;
  justify-content: flex-start;
`;

const P = styled.p`
  color: #484a64;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Icon = styled.img`
  margin-left: 40px;
  margin-right: 15px;
`;

const InfoContainer = styled.div`
  display: flex;
`;
const InfoLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 180px;
  margin-left: 40px;
  margin-bottom: 30px;
`;
const InfoRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const InfoSpan = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const InfoP = styled.div`
  color: #626682;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 34px */
  margin-bottom: 0;
`;

const BackgroundWrapper = styled.div`
  background: #f3f5ff;
  width: 100%;
  height: 1765px;
`;

function About() {
  return (
    <>
      <BackgroundWrapper>
        <Subtitle>ABOUT</Subtitle>
        <AboutContainer>
          <Profile>
            <MyProfile>
              <MyProfileImg src={profile} />
              <MyProfileSpan>박태범</MyProfileSpan>
            </MyProfile>
            <ProfileContainer>
              <Icon src={phone} />
              <P>010-9390-1250</P>
            </ProfileContainer>
            <ProfileContainer>
              <Icon src={message} />
              <P>region9@naver.com</P>
            </ProfileContainer>
            <ProfileContainer>
              <Icon src={mappin} />
              <P>서울특별시 성북구 삼선교로 16길</P>
            </ProfileContainer>
          </Profile>
          <InfoContainer>
            <InfoLeftContainer>
              <div>
                <InfoSpan>EDUCATION</InfoSpan>
                <InfoP>한성대학교 컴퓨터공학부</InfoP>
                <InfoP>2019.03~2025.02</InfoP>
              </div>
              <div>
                <InfoSpan>WORK</InfoSpan>
                <InfoP>프론트엔드 개발자</InfoP>
              </div>
            </InfoLeftContainer>
            <InfoRightContainer>
              <div>
                <InfoSpan>SKILLS</InfoSpan>
                <InfoP>Python</InfoP>
                <InfoP>Java</InfoP>
                <InfoP>JavaScript</InfoP>
              </div>
              <div>
                <InfoSpan>ACTIVITIES</InfoSpan>
                <InfoP>멋쟁이사자처럼 12기</InfoP>
              </div>
            </InfoRightContainer>
          </InfoContainer>
        </AboutContainer>
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
      </BackgroundWrapper>
    </>
  );
}

export default About;
