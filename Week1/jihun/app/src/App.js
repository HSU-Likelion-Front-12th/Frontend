import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componenets/Header';
import Nav from "./componenets/Nav";
import {Section1,Section2} from './componenets/Section';
function App() {
  return (
    <>
    <header>
      <Header/>
    </header>
    <nav>
      <Nav></Nav>
    </nav>
    
    <section>
      <Section1></Section1>
      
    </section>
    <section>
    <Section2></Section2>
    </section>
    
    </>
    
  );
}

export default App;
