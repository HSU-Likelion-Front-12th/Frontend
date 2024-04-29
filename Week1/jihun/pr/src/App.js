import React from 'react';
import Header from './components/Header';
import { Section1,Section2 } from './components/Section';
function App() {
  return (
    <>
    <header>
      <Header></Header>
    </header>
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
