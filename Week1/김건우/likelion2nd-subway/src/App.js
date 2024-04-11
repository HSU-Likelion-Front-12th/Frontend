import React from 'react';
import './App.css';
import Header from './Cmpnts/Header.jsx';
import Nav from './Cmpnts/Nav.jsx';
import MenuList from './Cmpnts/MenuList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
         <Header></Header>
          <nav className='nav'><Nav></Nav></nav>
          <section className="sec1"></section>
          <MenuList className='sec2'></MenuList>
      </div>
    )
  }
}
export default App;