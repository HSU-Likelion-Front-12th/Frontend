import React from 'react';
import './App.css';
import Section from "./Cmpnts/Section.jsx";
import ProfileBlock from "./Cmpnts/ProfileBlock.jsx";
import HobbyBlock from "./Cmpnts/HobbyBlock.jsx";
import Intro from "./Cmpnts/Intro.jsx";
import Header from "./Cmpnts/Header.jsx";

function App(){
  const intro = (
    <p>
      안녕하세요!<br />
      제 이름은 김건우 입니다.<br />
      실력있는 개발자가 되고 싶어요.
    </p>
  );
  return(
    <div>
      <Header></Header> 
      <Intro textContent = {intro}></Intro>
      <Section
      title = 'About'
      content = {<ProfileBlock></ProfileBlock>}>
      </Section>
      <Section
      title = 'Hobby'
      content = {<HobbyBlock></HobbyBlock>}
      ></Section>
    </div>
  )
}

export default App;

