import DefaultLayout from './DefaultLayout'
import Button from './Button'
import Input from './Input'

function LoginMain() {
    const localStorage = window.localStorage
    const loginInfo = JSON.parse(localStorage.getItem('loginInfo'))
    return (
    <>
      <DefaultLayout title={`${loginInfo.id}님 환영합니다.`}/>
      <Button
      title='비밀번호 변경'
      color='white'
      height = '3.5rem'
      />
      <Button
        title='로그아웃'
        height= '3.5rem'
        />
    <Button 
        title='회원탈퇴'
        color='red'
        height='3.5rem'
    />
    </>
        
    )
}

export default LoginMain;