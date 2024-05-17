import React from "react";
import styled from "styled-components";
import ProfileImage from "../assets/images/profile.jpg";
import phoneIcon from "../assets/images/Phone.png";
import emailIcon from "../assets/images/EnvelopeSimple.png";
import addressIcon from "../assets/images/MapPin.png";

const AboutSectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 50px 0;
  background: #f3f5ff;
`;

const AboutTitle = styled.h1`
  display: flex;
  justify-content: center;
  color: #4a86ff;
  margin-bottom: 2vw;
  text-align: center;
`;


const ProfileColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  margin-right: 2vw;
  padding: 2vw;
  background-color: #ffffff;
  border: none;
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

const Detail = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2vw;
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

const AboutSection = () => (
  <>
    <AboutTitle>ABOUT</AboutTitle>
    <AboutSectionContainer id="about">
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
    </AboutSectionContainer>
  </>
);

export default AboutSection;
