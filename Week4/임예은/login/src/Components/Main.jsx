import '../Styles/Main.css' // Main 컴포넌트의 스타일을 위한 CSS 파일 임포트

import DefaultLayout from './DefaultLayout' // DefaultLayout 컴포넌트 임포트
import Button from './Button' // Button 컴포넌트 임포트

import { Link } from 'react-router-dom' // Link 컴포넌트 임포트 (현재 사용되지 않음)

function Main() {
    return (
    <>
      <DefaultLayout title={'홈'}/> {/* 타이틀 '홈'을 가진 DefaultLayout 컴포넌트 */}
      <Button title='로그인' color='white' height='3.5rem' /> {/* '로그인' 버튼, 흰색, 높이 3.5rem */}
      <Button title='회원가입' height='3.5rem'/> {/* '회원가입' 버튼, 기본 색상, 높이 3.5rem */}
    </>
    )
}

export default Main; // Main 컴포넌트 내보내기
