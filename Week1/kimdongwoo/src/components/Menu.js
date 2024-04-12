import React from "react";

import subway1 from '../img/subway1.png'
import subway2 from '../img/subway2.png'
import subway3 from '../img/subway3.png'
import subway4 from '../img/subway4.png'

export default function Menu() {
  return (
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
          <span>페페로니,살라미 그리고 햄이 만들어내는 최상의 조화! 전세계가
            사랑하는 써브웨이의 베스트셀러!</span>
        </div>

        <div className="menu-explain">
          <img src={subway3} alt="Subway 3" />
          <br />
          <strong>비엘티</strong>
          <br />
          <span>오리지널 아메리칸 스타일 베이컨의 풍미와 바삭함 그래도..</span>
        </div>

        <div className="menu-explain">
          <img src={subway4} alt="Subway 4" />
          <br />
          <strong>햄</strong>
          <br />
          <span>기본 중에 기본!
            풍부한 햄이 만들어내는 입 안 가득 넘치는 맛의 향연</span>
        </div>
      </section>
    </>
  )
}