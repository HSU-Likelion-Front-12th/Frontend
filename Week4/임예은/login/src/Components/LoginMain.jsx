import DefaultLayout from './DefaultLayout' // DefaultLayout 컴포넌트 임포트
import Button from './Button' // Button 컴포넌트 임포트
import Input from './Input' // Input 컴포넌트 임포트

function LoginMain() {
    const localStorage = window.localStorage // 로컬 스토리지 사용을 위한 상수
    const loginInfo = JSON.parse(localStorage.getItem('loginInfo')) // 로컬 스토리지에서 로그인 정보 가져오기
    return (
    <>
      <DefaultLayout title={`${loginInfo.id}님 환영합니다.`}/> {/* 로그인한 사용자를 환영하는 메시지를 표시하는 DefaultLayout 컴포넌트 */}
      <Button
        title='비밀번호 변경' // 버튼 타이틀 설정
        color='white' // 버튼 색상 설정
        height='3.5rem' // 버튼 높이 설정
      />
      <Button
        title='로그아웃' // 버튼 타이틀 설정
        height='3.5rem' // 버튼 높이 설정
      />
      <Button 
        title='회원탈퇴' // 버튼 타이틀 설정
        color='red' // 버튼 색상 설정
        height='3.5rem' // 버튼 높이 설정
      />
    </>
    )
}

export default LoginMain; // LoginMain 컴포넌트 내보내기
