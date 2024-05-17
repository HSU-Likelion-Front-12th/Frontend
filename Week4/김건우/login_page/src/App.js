import './App.css';
import {Routes, Route}from 'react-router-dom'

import Main from './Cmpnts/Main';
import Signin from './Cmpnts/Signin';
import Signup from './Cmpnts/Signup';
import LoginMain from './Cmpnts/LoginMain';
import Change from './Cmpnts/Change';

// 1. 피그마 링크에 들어가 피그마 디자인과 똑같이 구현하기 (페이지는 총 5개)

// 2. 버튼을 누르면 적절한 화면으로 이동이 가능하게 라우팅 및 navigate() 구현하기

// 3. 오늘 배운 로컬스토리지 혹은 세션스토리지를 이용하여 로그인을 하면 데이터가 저장되고 로그아웃을 하면 데이터가 삭제되게 구현하기

// 피그마 코멘트에 달려있는 컴포넌트 이름과 라우팅 이름을 똑같이 구현해주세요~!~! 물론 달라도 상관없지만 다음 세션때 편하게 따라가기 위함입니다!! 

function App (){
  return (
    <Routes>
    <Route path='/' element = {<Main />}/>
      <Route path='/Signin' element = {<Signin />}/>
      <Route path='/Signup' element = {<Signup />}/>
      <Route path='/LoginMain' element = {<LoginMain />}/>
      <Route path='/Change' element = {<Change />}/>
    </Routes>
  )
}



export default App;
