import React from "react";
import styled from "styled-components";
import TitleImage from "./assets/images/Title.png";
import ProfileImage from "./assets/images/profile.jpg";
import phoneIcon from "./assets/images/Phone.png";
import emailIcon from "./assets/images/EnvelopeSimple.png";
import addressIcon from "./assets/images/MapPin.png";
import Takepicture from "./assets/images/takepicture.jpg";
import Lie from "./assets/images/lie.jpg";
import EditingVideo from "./assets/images/EditingVideo.jpg";

// 페이지 전체 컨테이너
const Container = styled.div`
  font-family: "Sans-serif";
  color: #333;
  text-align: center;
`;

const Title = styled.img`
  width: 15%;
  display: flex;
  margin-right: 5vw;
`;

// 상단 메뉴 바
const Navbar = styled.div`
  background: #f0f0f0;
  padding: 2vw 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled.a`
  margin: 0 2vw;
  color: #333;
  text-decoration: none;
  font-weight: bold;
`;

const Box = styled.div`
  background: #f3f5ff;
`;

// 인트로
const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #4a86ff;
  color: #ffffff;
  height: 20vw;
  font-size: 2vw;
  font-weight: 500;
  line-height: 1.5;
`;


const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 50px 0;
  background: #F3F5FF;
`;

// 왼쪽
const ProfileColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  margin-right: 2vw;
  padding: 2vw;
  background-color: #ffffff;
  border:none;
  border-radius: 1vw;
`;

const Profile = styled.img`
  width: 60%;
  border-radius: 50%;
  margin-bottom: 2vw;
`;

const Name = styled.h2`
  margin: 0;
  color: #4a86ff;
`;

const ContactInfo = styled.div`
  color: #333;
`;

const ContactItem = styled.p`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #484a64;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;


// 오른쪽
const Detail = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3vw;
`;

const DetailColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailTitle = styled.h3`
  color: #333;
  font-size: 1.2em;
  font-weight: bold;
  text-align: left;
`;

const DetailContent = styled.ul`
  list-style: none; 
  padding: 0; 
  margin: 0; 
  text-align: left; 
`;

const DetailItem = styled.li`
  margin-bottom: 0.2vw;
  color: #626682;
  font-size: 12px;
`;


// 취미
const HobbyCard = styled.div`
  flex-basis: calc(33.333% - 1vw); // 3개가 균등하게 나뉘도록 계산
  border-radius: 1vw;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  background: #fff;
  text-align: center;
`;

const HobbyImage = styled.img`
  width: 70%;
  //display: block;
`;

const HobbyTitle = styled.div`
  background-color: #4a86ff;
  color: #fff;
  padding: 0.7vw 0;
  font-size: 1vw;
  font-weight: bold;
`;

const HobbiesContainer = styled.div`

`;

const Hobby = styled.div`
display:flex;
gap:2vw;
padding:0 20vw 10vw; 20vw;
`;

const HobbyItem = ({ title, image }) => (
  <HobbyCard>
    <HobbyTitle>{title}</HobbyTitle>
    <HobbyImage src={image} alt={title} />
  </HobbyCard>
);

const App = () => (
  <Container>
    <Navbar>
      <Title src={TitleImage} alt="Title" />
      <NavItem href="#about">ABOUT</NavItem>
      <NavItem href="#hobby">HOBBY</NavItem>
      <NavItem href="#contact">CONTACT</NavItem>
    </Navbar>
    <Box>
      <Intro>
        안녕하세요!<br></br>제 이름은 박시현입니다.<br></br>프론트 개발자가 되고
        싶어요.
      </Intro>
      <h1 style={{ color: "#4A86FF" }}>ABOUT</h1>
      <AboutSection>
        <ProfileColumn>
          <Profile src={ProfileImage} alt="profile" />
          <Name>박시현</Name>
          <ContactInfo>
            <ContactItem>
              <Icon src={phoneIcon} alt="Phone" />
              010-사구삼삼-2968
            </ContactItem>
            <ContactItem>
              <Icon src={emailIcon} alt="Email" />
              psh2968@naver.com
            </ContactItem>
            <ContactItem>
              <Icon src={addressIcon} alt="Address" />
              남양주시 다산동 어딘가~
            </ContactItem>
          </ContactInfo>
        </ProfileColumn>
        <Detail>
          <DetailColumn>
            <DetailTitle>EDUCATION</DetailTitle>
            <DetailContent>
              <DetailItem>학교명: 한성대학교 컴퓨터공학부</DetailItem>
              <DetailItem>2021.03 ~ </DetailItem>
            </DetailContent>
          </DetailColumn>
          <DetailColumn>
            <DetailTitle>SKILLS</DetailTitle>
            <DetailContent>
              <DetailItem>React</DetailItem>
              <DetailItem>JavaScript</DetailItem>
              <DetailItem>Css</DetailItem>
              <DetailItem>Java</DetailItem>
            </DetailContent>
          </DetailColumn>
          <DetailColumn>
            <DetailTitle>WORK</DetailTitle>
            <DetailContent>
              <DetailItem>프론트엔드 개발자</DetailItem>
            </DetailContent>
          </DetailColumn>
          <DetailColumn>
            <DetailTitle>ACTIVITIES</DetailTitle>
            <DetailContent>
              <DetailItem>멋쟁이사자처럼 12기</DetailItem>
            </DetailContent>
          </DetailColumn>
        </Detail>
      </AboutSection>

      <HobbiesContainer>
        <h1 style={{ color: "#4A86FF" }}>HOBBY</h1>
        <Hobby>
          <HobbyItem title="사진찍기 & 찍히는 것도 좋아" image={Takepicture} />
          <HobbyItem title="누워있기 침대좋아" image={Lie} />
          <HobbyItem title="영상편집" image={EditingVideo} />
        </Hobby>
      </HobbiesContainer>
    </Box>
  </Container>
);

export default App;
