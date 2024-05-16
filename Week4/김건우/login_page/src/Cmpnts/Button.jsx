import '../Styles/Button.css';

import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
    inputIDState,
    inputPasswordState,
    inputPasswordConfirmedState,
    inputEmailState,
    inputPhoneState
} from '../recoil'

function Button ({title, color, height}){
    let navigator = useNavigate()
    let location = useLocation()
    let buttonRef = useRef(null)
    let textRef = useRef(null)
    const localStorage = window.localStorage
    const loginInfos = JSON.parse(localStorage.getItem('loginInfo'))
    const signupInfos = JSON.parse(localStorage.getItem('SignupInfo'))

    //RECOIL STATE
    const [inputId, setInputId] = useRecoilState(inputIDState)
    const [inputPassword,setInputPassword] = useRecoilState(inputPasswordState)
    const [inputPasswordConfirmed, setInputPasswordConfirmed] = useRecoilState(inputPasswordConfirmedState)
    const [inputEmail, setInputEmail] = useRecoilState(inputEmailState)
    const [inputPhone, setInputPhone] = useRecoilState(inputPhoneState)

    
    //BUTTON TYPE
    useEffect(()=>{
        buttonRef.current.style.height = height    
        switch (color) {

            case 'white':
                buttonRef.current.style.background = '#FFF'
                textRef.current.style.color = '#1D1927'
                break;
            case 'red':
                buttonRef.current.style.background = '#DA0000'
                textRef.current.style.color = '#fff'
                break;

            default:
                break;
        }
    },[])

    // INPUT VALIDATOR
    function isInputValidated(){
        if(inputId ==='' || !inputPassword==='' || !inputEmail==='' || !inputPhone==='' || !inputPasswordConfirmed===''){
            return false
        }
        return true
    }

    function isPasswordMatch(){
        if(inputPassword === inputPasswordConfirmed){
            return true;
        }
        return false;
    }

    function inputCleaner(){
        setInputId('')
        setInputPassword('')
        setInputPasswordConfirmed('')
        setInputEmail('')
        setInputPhone('')
        document.querySelectorAll('input').forEach((e)=>{e.value = ''})
    }


    function buttonPressedHandler(){
        switch (title) {
            case '로그인':

                if(location.pathname === '/'){ //main 화면
                    navigator('/Signin')
                    return
                }
                if(!isInputValidated()){
                    window.confirm('입력이 잘못됨')
                    inputCleaner()
                    return;
                }
                if(signupInfos.id !== inputId){
                    window.confirm('가입되지 않은 회원입니다.')
                    navigator('/Signup')
                    return;
                }
                if(signupInfos.password !== inputPassword){
                    window.confirm('잘못된 비밀번호')
                    return;
                }
                
                localStorage.setItem('loginInfo', JSON.stringify({
                    id: signupInfos.id,
                    password: signupInfos.password,
                    email: signupInfos.email,
                    phone: signupInfos.phone
                }))
                inputCleaner()
                navigator('/LoginMain')
                break;

            case '회원가입':

                if(location.pathname === '/'){
                    navigator('Signup')
                    return
                }
                if(!isInputValidated()){
                    window.confirm('입력이 잘못됨')
                    inputCleaner();
                    return;
                }
                if(!isPasswordMatch()){
                    window.confirm('비밀번호가 일치하지 않습니다.')
                    return;
                }

                localStorage.setItem('SignupInfo', JSON.stringify({
                    email: inputEmail,
                    phone: inputPhone,
                    id: inputId,
                    password: inputPassword,
                }))
                inputCleaner()
                localStorage.setItem('loginInfo',JSON.stringify({
                    email: inputEmail,
                    phone: inputPhone,
                    id: inputId,
                    password: inputPassword,
                }))
                navigator('/LoginMain')
                break;
                
            case '비밀번호 변경':
                if(location.pathname==='/LoginMain'){
                    navigator('/Change')
                    return;
                }

                if(!isPasswordMatch()){
                    window.confirm('비밀번호가 일치하지 않습니다.')
                    return;
                }

                let prevSignup = JSON.parse(localStorage.getItem('SignupInfo')) || {};
                localStorage.setItem('SignupInfo', JSON.stringify({
                    ...prevSignup,
                    password: inputPassword
                }))
            
                let prevLogin = JSON.parse(localStorage.getItem('loginInfo')) || {};
                localStorage.setItem('loginInfo', JSON.stringify({
                    ...prevLogin,
                    password: inputPassword
                }))

                inputCleaner();
                navigator('/LoginMain')
                break;

            case '로그아웃':
                window.alert('로그아웃 하시겠습니까?')
                localStorage.setItem('loginInfo', JSON.stringify({}))
                navigator('/')
                window.confirm('로그아웃 되었습니다.')
                break;

            case '회원탈퇴':
                window.alert('정말로 회원탈퇴 하시겠습니까?')
                localStorage.setItem('loginInfo', JSON.stringify({}))
                localStorage.setItem('SignupInfo', JSON.stringify({}))
                navigator('/')
                window.confirm('회원탈퇴 되었습니다.')
                break;

            default:
                break;
        }
    }

    return (
    <div className='button-wrap' onClick={buttonPressedHandler}>
        <div ref={buttonRef} className='button'>
        <span ref={textRef}>{title}</span>
        </div>
    </div>
    )
}

export default Button;