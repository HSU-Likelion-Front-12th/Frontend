import React from 'react';
import '../Styles/Header.css';
import logo from'../assets/logo_portfolio.png';

function Header(){
    return(
        <div className="header">
        <img id="logo"
        src={logo}
        alt="이미지 준비중"></img>
        <nav className="nav">
                <div id="about">
                    ABOUT
                </div>
                <div id="hobby">
                    HOBBY
                </div>
                <div id="contact">
                    CONTACT
                </div>
        </nav>
    </div>
    );
    
}
export default Header;