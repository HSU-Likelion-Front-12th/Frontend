import React, { useState, useEffect } from 'react';
import gsap from "gsap";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

const Hobby = () => {
    const tl = gsap.timeline();
    useEffect(()=>{
        tl.to(".hobby-item", {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            stagger: .3,
            ease: "expo.in",
            duration: 1,
        })
    }, []);

    return (
        <section className="hobby">
            <div className="section-wrapper">
                <h1 className="section-title">Hobby</h1>
                <ul className="hobby-content">

                    <li className="hobby-item">
                        <div className="hobby-title">운동</div>
                        <div className="hobby-img-outer">
                            <div className="hobby-img-wrapper">
                                <img src={img1} alt="" />
                            </div>
                        </div>
                    </li>

                    <li className="hobby-item">
                        <div className="hobby-title">잠자기</div>
                        <div className="hobby-img-outer">
                            <div className="hobby-img-wrapper">
                                <img src={img2} alt="" />
                            </div>
                        </div>
                    </li>

                    <li className="hobby-item">
                        <div className="hobby-title">유튜브 보기</div>
                        <div className="hobby-img-outer">
                            <div className="hobby-img-wrapper">
                                <img src={img3} alt="" />
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    );
};

export default Hobby;
