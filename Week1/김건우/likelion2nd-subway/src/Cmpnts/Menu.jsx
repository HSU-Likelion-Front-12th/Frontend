import React from 'react';
import '../style/Menu.css';

class Menu extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className='menu-explain'>
          <img src ={this.props.imgSrc} alt="이미지 준비중" />
          <br/>
          <strong>{this.props.name}</strong>
          <br/>
          <span>{this.props.description}</span>
        </div>
     )
  }
}
export default Menu;