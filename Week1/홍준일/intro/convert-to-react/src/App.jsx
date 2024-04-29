import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Hobby from './components/Hobby';
import Portfolio from './components/assets/PORTFOLIO.png';
import gsap from "gsap";
import { useEffect, useState } from 'react';

function App() {
  const tl = gsap.timeline();
  const [counter, setCounter] = useState(0);
  const [animationFinished, setAnimationFinished] = useState(0);

  useEffect(() => {
    let value = Math.floor(Math.random() * 20) + 1;
    let delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(() => {
      setCounter((pre) => {
        if (animationFinished) {
          introAnimation();
          return pre;
        }

        const nextCount = pre + value;

        if (nextCount >= 100) {
          setAnimationFinished(true);
          return 100;
        }

        return nextCount;
      })
    }, delay);
  }, [counter])

  function introAnimation() {
    tl.to('.counter', {
      y: -320,
      ease: "power4.inOut",
      duration: 1,
    })
      .to('.counter-wrapper', {
        display: 'none',
      }, '-=.5')
      .to('.line', {
        width: '100%',
        ease: "power2.inOut",
        duration: 1
      })
      .to('.overlay-top', {
        top: '-50%',
        ease: "power2.inOut",
        duration: 1,
      })
      .to('.overlay-bottom', {
        bottom: '-50%',
        ease: "power2.inOut",
        duration: 1,
      }, '<')
      .to(['.overlay-top', '.overlay-bottom', '.line'], {
        display: 'none'
      })
      .to('.nav', {
        height: '120px',
        opacity: 1,
      })
      .fromTo('.intro-text p', {
        y: '80px',
        opacity: 0
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
        stagger: .2,
      })
  }

  return (
    <div className="App">
      <div className="overlay overlay-top"></div>
      <div className="overlay overlay-bottom"></div>
      <div className="line"></div>
      <div className="counter-wrapper">
        <h1 className="counter">
          {counter}%
        </h1>
      </div>
      <Router>
        <nav className="nav">
          <Link to="/" className="logo">
            <img src={Portfolio} alt="Portfolio Logo" />
          </Link>
          <ul className='links'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/hobby">Hobby</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route tl = {tl} path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/hobby' element={<Hobby />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
