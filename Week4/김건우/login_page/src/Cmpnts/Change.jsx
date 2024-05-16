import DefaultLayout from "./DefaultLayout"
import Input from "./Input"
import Button from "./Button"

function Change() {
    const signupInfos = JSON.parse(window.localStorage.getItem('SignupInfo'))
    console.log(signupInfos.email)
    return(
    <>
        <DefaultLayout title='비밀번호 변경'/>
        <Input title={signupInfos.email} disabled={true}/>
        <Input title={signupInfos.phone} disabled={true}/>
        <Input title={signupInfos.id} disabled={true}/>
        <Input title='비밀번호'/>
        <Input title='비밀번호확인'/>
        <Button title='비밀번호 변경' height='3rem'/>
    </>
    )
}

export default Change;