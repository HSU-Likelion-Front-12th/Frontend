import React, { useEffect } from 'react';
import gsap from 'gsap';

const Home = () => {
    const tl = gsap.timeline();
    useEffect(()=>{
        tl.fromTo('.intro-text p', {
            y: '80px',
            opacity: 0
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.inOut",
            stagger: .2,
        })
    }, []);

    return (
        <section className='home'>
            <div className="section-wrapper">
            <div className="intro-text">
                <p>안녕하세요!</p>
                <p>제 이름은 홍준일 입니다.</p>
                <p>프론트엔드 개발자가 되고 싶어요.</p>
            </div>
        </div>
        </section>
    );
};

export default Home;