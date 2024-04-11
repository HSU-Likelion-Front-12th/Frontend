import React from 'react';
import '../style/Header.css';
import logo from '../assets/logo.png';

function Header(props){
    return(
      <header className='header'>
          <img src={logo} alt=""></img>
      </header>
    )
  }

export default Header;