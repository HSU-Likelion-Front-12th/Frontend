import React from 'react';
import Menu from './Menu';
import subway1 from '../assets/subway1.png'
import subway2 from '../assets/subway2.png'
import subway3 from '../assets/subway3.png'
import subway4 from '../assets/subway3.png'

class MenuList extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <section className = {this.props.className}>
          <Menu imgSrc={subway1} name='에그마요' description='부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러'></Menu>
          <Menu imgSrc={subway2} name='이탈리안 비엠티' description='페페로니, 살라미 그리고 햄이 만들어내는 최상의 조화! 전세계가 사랑하는 써브웨이의 베스트셀러!'></Menu>
          <Menu imgSrc={subway3} name='베이컨' description='오리지널 아메리칸 스타일 베이컨의 풍미와 바삭함 그대로'></Menu>
          <Menu imgSrc={subway4} name='베이컨' description='오리지널 아메리칸 스타일 베이컨의 풍미와 바삭함 그대로'></Menu>
        </section>
      )  
    }
  }

  export default MenuList;