import React from 'react';
import NavMenu from './NavMenu';
import '../style/Nav.css'

class Nav extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
        <div className="navContainer">
              <NavMenu title = "이용방법"></NavMenu>
              <NavMenu title = "새소식"></NavMenu>
              <NavMenu title = "써브웨이"></NavMenu>
              <NavMenu title = "가맹점"></NavMenu>
              <NavMenu title = "온라인 주문"></NavMenu>
          </div>
      )
    }
  }

  export default Nav;