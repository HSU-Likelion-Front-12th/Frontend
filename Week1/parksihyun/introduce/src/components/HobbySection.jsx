import React from "react";
import styled from "styled-components";
import Takepicture from "../assets/images/takepicture.jpg";
import Lie from "../assets/images/lie.jpg";
import EditingVideo from "../assets/images/EditingVideo.jpg";

const HobbyContainer = styled.div``;

const Hobby = styled.div`
  display:flex;
  gap:2vw;
  padding:0 20vw 10vw 20vw;
`;

const HobbyTitle = styled.h1`
  display: flex;
  justify-content: center;
  color: #4a86ff;
  margin-bottom: 2vw;
  text-align: center;
`;

const HobbyCard = styled.div`
  flex-basis: calc(33.333% - 1vw);
  border-radius: 1vw;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: #fff;
  text-align: center;
`;

const HobbyImage = styled.img`
  width: 70%;
`;

const HobbyFont = styled.div`
  background-color: #4a86ff;
  color: #fff;
  padding: 0.7vw 0;
  font-size: 1vw;
  font-weight: bold;
`;

const HobbyItem = ({ title, image }) => (
  <HobbyCard>
    <HobbyFont>{title}</HobbyFont>
    <HobbyImage src={image} alt={title} />
  </HobbyCard>
);

const HobbySection = () => (
    <>
     <HobbyTitle>HOBBY</HobbyTitle>
  <HobbyContainer id="hobby">
    <Hobby>
      <HobbyItem title="사진찍기 & 찍히는 것도 좋아" image={Takepicture} />
      <HobbyItem title="누워있기 침대좋아" image={Lie} />
      <HobbyItem title="영상편집" image={EditingVideo} />
    </Hobby>
  </HobbyContainer></>
);

export default HobbySection;
