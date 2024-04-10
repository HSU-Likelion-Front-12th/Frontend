import React from 'react';
import './test/hw/css/styled.css'; // CSS 파일 import

import logo from './img/logo.png'
import subway1 from './img/subway1.png'
import subway2 from './img/subway1.png'
import subway3 from './img/subway1.png'
import subway4 from './img/subway1.png'

// home자체가 body
export default function Home() {
  return (
    <>
      <header>
        {/* <img src="./img/logo.png" alt="Subway Logo" /> */}
        <img src={logo} alt='Subway Logo'></img>
        {/* <title>subway</title> */}
      </header>

      <nav>
        <div className="navContainer">
          <div><strong>메뉴소개</strong></div>
          <div><strong>이용방법</strong></div>
          <div><strong>새소식</strong></div>
          <div><strong>써브웨이</strong></div>
          <div><strong>가맹점</strong></div>
          <div><strong>온라인 주문</strong></div>
        </div>
      </nav>

      <>
        <section className="sec1">
        </section>

        <section className="sec2">
          <div className="menu-explain">
            <img src={subway1} alt="Subway 1" />
            <br />
            <strong>에그마요</strong>
            <br />
            <span>부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스데디셀러</span>
          </div>

          <div className="menu-explain">
            <img src={subway2} alt="Subway 2" />
            <br />
            <strong>이탈리안 비엠티</strong>
            <br />
            <span>부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스데디셀러</span>
          </div>

          <div className="menu-explain">
            <img src={subway3} alt="Subway 3" />
            <br />
            <strong>에그마요</strong>
            <br />
            <span>부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스데디셀러</span>
          </div>

          <div className="menu-explain">
            <img src={subway4} alt="Subway 4" />
            <br />
            <strong>에그마요</strong>
            <br />
            <span>부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스데디셀러</span>
          </div>
        </section>
      </>
    </>
  );
}
