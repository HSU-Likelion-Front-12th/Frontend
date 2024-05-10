import React from 'react';
import '../test/hw/css/styled.css'; // CSS 파일 import

import Header from './Header';
import Nav from './Nav';
import Menu from './Menu';
// import logo from '../img/logo.png'
// import subway1 from '../img/subway1.png'
// import subway2 from '../img/subway2.png'
// import subway3 from '../img/subway3.png'
// import subway4 from '../img/subway4.png'

// home자체가 body
export default function Home() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Menu></Menu>

    </>
  );
}
