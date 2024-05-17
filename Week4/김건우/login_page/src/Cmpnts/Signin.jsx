import DefaultLayout from "./DefaultLayout"
import Button from "./Button"
import Input from "./Input"

function Signin (){
    return(
    <>
    <DefaultLayout title='로그인'/>
    <Input title='아이디'/>
    <Input title='비밀번호'/>
    <Button title='로그인' height='3rem'/>
    </>
    )
}

export default Signin;