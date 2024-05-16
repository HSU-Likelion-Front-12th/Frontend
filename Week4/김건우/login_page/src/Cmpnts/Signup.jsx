import DefaultLayout from "./DefaultLayout"
import Button from "./Button"
import Input from "./Input"

function Signup (){
    return(
    <>
    <DefaultLayout title='회원가입'/>
    <Input title='이메일 ex) abc123@naver.com'/>
    <Input title='전화번호 ex) 01000000000'/>
    <Input title='아이디'/>
    <Input title='비밀번호'/>
    <Input title='비밀번호확인'/>
    <Button title='회원가입' height='3rem'/>
    </>
    )
}

export default Signup;