import './App.css';
import logo from "./components/assets/logo.png"
import subway1 from "./components/assets/subway1.png"
import subway2 from "./components/assets/subway2.png"
import subway3 from "./components/assets/subway3.png"
import subway4 from "./components/assets/subway4.png"

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </header>

      <nav>
        <div className="navContainer">
          <div><strong>메뉴 소개</strong></div>
          <div><strong>이용방법</strong></div>
          <div><strong>새소식</strong></div>
          <div><strong>써브웨이</strong></div>
          <div><strong>가맹점</strong></div>
          <div><strong>온라인 주문</strong></div>
        </div>
      </nav>

      <div className="sec1"></div>

      <div className="sec2">
        <article>
          <div className="menu-explain">
            <img src={subway1} alt="" />
            <br />
            <strong>에그마요</strong>
            <br />
            <br />
            <span>부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러</span>
          </div>
        </article>
        <article>
          <div className="menu-explain">
            <img src={subway2} alt="" />
            <br />
            <strong>이탈리안 비엠티</strong>
            <br />
            <br />
            <span>페페로니,살라미 그리고 햄이 만들어내는 최상의 조화! 전세계가
                    사랑하는 써브웨이의 베스트셀러!</span>
          </div>
        </article>
        <article>
          <div className="menu-explain">
            <img src={subway3} alt="" />
            <br />
            <strong>비엘티</strong>
            <br />
            <br />
            <span>오리지널 아메리칸 스타일 베이컨의 풍미와 바삭함 그래도 기본 중에 기본!</span>
          </div>
        </article>
        <article>
          <div className="menu-explain">
            <img src={subway4} alt="" />
            <br />
            <strong>햄</strong>
            <br />
            <br />
            <span>풍부한 햄이 만들어내는 입 안 가득 넘치는 맛의 향연</span>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
