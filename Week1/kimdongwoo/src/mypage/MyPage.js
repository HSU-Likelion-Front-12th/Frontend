import React from 'react';

import './test/css/allOfStyled.css'
import './test/css/footerStyled.css'
import './test/css/infoStyled.css'
import './test/css/mainStyled.css'
import './test/css/navStyled.css'

import logoImg from './test/logoImg.png'

export default function MyPage() {
  return (
    <>
      <nav>
        <img src={logoImg} alt="" />
        <div id="options">
          <p>ABOUT</p>
          <p>HOBBY</p>
          <p>CONTACT</p>
        </div>
      </nav>

      <section id="info">
        <h1>안녕하세요! <br /> 제 이름은 김동우 입니다. <br /> 소통하고 꼼꼼한 개발자가 되고 싶어요.</h1>
      </section>

      <main>

        <h1 style={{ margin: '70px 0 60px 0', color: '#4A86FF', fontWeight: 'bold', fontSize: '50px' }}>ABOUT</h1>

        <section className="about-contents">
          <figure>
            <div style={{ marginRight: '50px', width: '280px', height: '343px', backgroundColor: 'white', borderRadius: '5%' }}>
              <div>
                <img
                  src="https://helios-i.mashable.com/imagery/articles/06Qx8phppzGdXs2CVE7QlwP/hero-image.fill.size_1248x702.v1623391437.jpg"
                  alt="" width="130px" height="130px" style={{ marginTop: '40px', borderRadius: '50%' }} />

                <h3
                  style={{ margin: '10px 0 10px 0', color: '#4A86FF', fontSize: '25px', fontFamily: 'Inter', fontWeight: 'bold' }}>
                  김동우</h3>
                <p style={{ textAlign: 'left', padding: '0', margin: '10px 0 10px 50px', color: '#484A64', fontFamily: 'Inter' }}>
                  010-xxxx-xxxx</p>
                <p style={{ textAlign: 'left', padding: '0', margin: '10px 0 10px 50px', color: '#484A64', fontFamily: 'Inter' }}>
                  4bee.code@gmail.com
                </p>
                <p style={{ textAlign: 'left', padding: '0', margin: '10px 0 10px 50px', color: '#484A64', fontFamily: 'Inter' }}>
                  서울특별시 강북구 삼양로</p>
              </div>
            </div>
          </figure>
          <div>
            <figure style={{ marginBottom: '73px' }}>
              <p className="title" style={{ textAlign: 'left', paddingLeft: '0', paddingTop: '0', fontWeight: 'bold' }}>EDUCATION
              </p>
              <p style={{ textAlign: 'left', paddingLeft: '0' }}>한성대학교 컴퓨터공학부<br />2021.03~2025.02</p>
            </figure>
            <figure>
              <p className="title" style={{ textAlign: 'left', paddingLeft: '0', paddingTop: '0', fontWeight: 'bold' }}>WORK</p>
              <p style={{ textAlign: 'left', paddingLeft: '0' }}>프론트엔드 개발자</p>
            </figure>
          </div>

          <div>
            <figure>
              <p className="title" style={{ textAlign: 'left', paddingLeft: '0', paddingTop: '0', fontWeight: 'bold' }}>SKILLS</p>
              <p style={{ textAlign: 'left', paddingLeft: '0' }}>
                Python<br />
                Java<br />
                C++<br />
                JavaScript<br />
              </p>
            </figure>
            <figure>
              <p className="title" style={{ textAlign: 'left', paddingLeft: '0', paddingTop: '0', fontWeight: 'bold' }}>ACTIVITIES
              </p>
              <p style={{ textAlign: 'left', paddingLeft: '0' }}>멋쟁이사자처럼 12기</p>
            </figure>
          </div>

        </section>

        <h1 style={{ margin: '30px 0 50px 0', color: '#4A86FF', fontWeight: 'bold', fontSize: '50px' }}>HOBBY</h1>

        <section className="hobby-contents">
          <figure style={{ backgroundColor: 'white', borderRadius: '5%' }}>
            <figcaption style={{ borderRadius: '20px 20px 0 0' }}>책 읽기</figcaption>
            <p>
              <img src="http://kceftimes.or.kr/wp-content/uploads/2019/12/%EC%B1%85_%ED%95%99%EC%8A%B51.png" alt=""
                style={{ width: '230px', height: '200px' }} />
            </p>
          </figure>
          <figure style={{ backgroundColor: 'white', borderRadius: '5%' }}>
            <figcaption style={{ borderRadius: '20px 20px 0 0' }}>잠 자기</figcaption>
            <p>
              <img
                src="https://media.istockphoto.com/id/1326080733/ko/%EC%82%AC%EC%A7%84/%EC%9E%98-%EC%83%9D%EA%B8%B4-%EC%A0%8A%EC%9D%80-%EB%82%A8%EC%9E%90-%EC%9E%90-%EC%97%90-%EC%B9%A8%EB%8C%80.jpg?s=612x612&w=0&k=20&c=UmZPr_X-vlx98kh5BvfiraGY-NFbOsXaTUk8vzmGR98="
                alt="" style={{ width: '230px', height: '200px' }} />
            </p>
          </figure>
          <figure style={{ backgroundColor: 'white', borderRadius: '5%' }}>
            <figcaption style={{ borderRadius: '20px 20px 0 0' }}>머리 하기</figcaption>
            <p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRScW9zsOBY4N5O4vkil6YD9AyqYuGEZtUZj3-SmUxJaw&s"
                alt="" style={{ width: '230px', height: '200px' }} />
            </p>
          </figure>
        </section>
      </main>
      <footer style={{ backgroundColor: 'white', height: '150px', width: 'auto' }}>
        <img src="http://knut.likelion.org/img/about/basiclogo_KE_symbol.png" alt=""
          style={{ width: 'auto', height: '100px', paddingTop: '50px' }} />
      </footer>
    </>
  )
}
