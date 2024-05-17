import '../Styles/Button.css'; // 버튼 스타일을 위한 CSS 파일 임포트

import { useEffect, useRef } from 'react'; // React 훅 임포트
import { useNavigate, useLocation } from 'react-router-dom'; // 라우팅을 위한 훅 임포트
import { useRecoilState } from 'recoil'; // Recoil 상태 관리 훅 임포트
import {
    inputIDState,
    inputPasswordState,
    inputPasswordConfirmedState,
    inputEmailState,
    inputPhoneState
} from '../recoil' // Recoil 상태 변수들 임포트


//
function Button ({title, color, height}){
    let navigator = useNavigate() // 페이지 이동을 위한 훅
    let location = useLocation() // 현재 위치를 가져오는 훅
    let buttonRef = useRef(null) // 버튼 요소 참조를 위한 useRef 훅
    let textRef = useRef(null) // 텍스트 요소 참조를 위한 useRef 훅
    const localStorage = window.localStorage // 로컬 스토리지 사용을 위한 상수
    const loginInfos = JSON.parse(localStorage.getItem('loginInfo')) // 로컬 스토리지에서 로그인 정보 가져오기
    const signupInfos = JSON.parse(localStorage.getItem('SignupInfo')) // 로컬 스토리지에서 회원가입 정보 가져오기

    //RECOIL STATE
    const [inputId, setInputId] = useRecoilState(inputIDState) // Recoil 상태 변수 및 setter 함수
    const [inputPassword,setInputPassword] = useRecoilState(inputPasswordState) // Recoil 상태 변수 및 setter 함수
    const [inputPasswordConfirmed, setInputPasswordConfirmed] = useRecoilState(inputPasswordConfirmedState) // Recoil 상태 변수 및 setter 함수
    const [inputEmail, setInputEmail] = useRecoilState(inputEmailState) // Recoil 상태 변수 및 setter 함수
    const [inputPhone, setInputPhone] = useRecoilState(inputPhoneState) // Recoil 상태 변수 및 setter 함수

    
    //BUTTON TYPE
    useEffect(()=>{
        buttonRef.current.style.height = height // 버튼 높이 설정
        switch (color) { // 버튼 색상 설정

            case 'white':
                buttonRef.current.style.background = '#FFF' // 배경색 흰색 설정
                textRef.current.style.color = '#1D1927' // 텍스트 색상 설정
                break;
            case 'red':
                buttonRef.current.style.background = '#DA0000' // 배경색 빨간색 설정
                textRef.current.style.color = '#fff' // 텍스트 색상 설정
                break;

            default:
                break;
        }
    },[color, height]) // color와 height가 변경될 때마다 실행

    // INPUT VALIDATOR
    function isInputValidated(){
        if(inputId ==='' || !inputPassword==='' || !inputEmail==='' || !inputPhone==='' || !inputPasswordConfirmed===''){
            return false // 입력 값이 하나라도 비어있으면 false 반환
        }
        return true // 모두 입력되었으면 true 반환
    }

    function isPasswordMatch(){
        if(inputPassword === inputPasswordConfirmed){
            return true; // 비밀번호와 비밀번호 확인이 일치하면 true 반환
        }
        return false; // 일치하지 않으면 false 반환
    }

    function inputCleaner(){
        setInputId('') // 입력된 아이디 초기화
        setInputPassword('') // 입력된 비밀번호 초기화
        setInputPasswordConfirmed('') // 비밀번호 확인 초기화
        setInputEmail('') // 이메일 초기화
        setInputPhone('') // 전화번호 초기화
        document.querySelectorAll('input').forEach((e)=>{e.value = ''}) // 모든 input 요소 초기화
    }


    function buttonPressedHandler(){
        switch (title) {
            case '로그인':

                if(location.pathname === '/'){ // 메인 화면에서 로그인 버튼 클릭 시
                    navigator('/Signin') // Signin 페이지로 이동
                    return
                }
                if(!isInputValidated()){
                    window.confirm('입력이 잘못됨') // 입력 값이 잘못되었을 때 경고창 표시
                    inputCleaner() // 입력 값 초기화
                    return;
                }
                if(signupInfos.id !== inputId){
                    window.confirm('가입되지 않은 회원입니다.') // 입력된 아이디가 가입되지 않았을 때 경고창 표시
                    navigator('/Signup') // 회원가입 페이지로 이동
                    return;
                }
                if(signupInfos.password !== inputPassword){
                    window.confirm('잘못된 비밀번호') // 비밀번호가 일치하지 않을 때 경고창 표시
                    return;
                }
                
                localStorage.setItem('loginInfo', JSON.stringify({
                    id: signupInfos.id,
                    password: signupInfos.password,
                    email: signupInfos.email,
                    phone: signupInfos.phone
                })) // 로그인 정보 로컬 스토리지에 저장
                inputCleaner() // 입력 값 초기화
                navigator('/LoginMain') // 로그인 메인 페이지로 이동
                break;

            case '회원가입':

                if(location.pathname === '/'){ // 메인 화면에서 회원가입 버튼 클릭 시
                    navigator('Signup') // Signup 페이지로 이동
                    return
                }
                if(!isInputValidated()){
                    window.confirm('입력이 잘못됨') // 입력 값이 잘못되었을 때 경고창 표시
                    inputCleaner(); // 입력 값 초기화
                    return;
                }
                if(!isPasswordMatch()){
                    window.confirm('비밀번호가 일치하지 않습니다.') // 비밀번호가 일치하지 않을 때 경고창 표시
                    return;
                }

                localStorage.setItem('SignupInfo', JSON.stringify({
                    email: inputEmail,
                    phone: inputPhone,
                    id: inputId,
                    password: inputPassword,
                })) // 회원가입 정보 로컬 스토리지에 저장
                inputCleaner() // 입력 값 초기화
                localStorage.setItem('loginInfo',JSON.stringify({
                    email: inputEmail,
                    phone: inputPhone,
                    id: inputId,
                    password: inputPassword,
                })) // 로그인 정보 로컬 스토리지에 저장
                navigator('/LoginMain') // 로그인 메인 페이지로 이동
                break;
                
            case '비밀번호 변경':
                if(location.pathname==='/LoginMain'){ // 로그인 메인 페이지에서 비밀번호 변경 버튼 클릭 시
                    navigator('/Change') // 비밀번호 변경 페이지로 이동
                    return;
                }

                if(!isPasswordMatch()){
                    window.confirm('비밀번호가 일치하지 않습니다.') // 비밀번호가 일치하지 않을 때 경고창 표시
                    return;
                }

                let prevSignup = JSON.parse(localStorage.getItem('SignupInfo')) || {};
                localStorage.setItem('SignupInfo', JSON.stringify({
                    ...prevSignup,
                    password: inputPassword
                })) // 회원가입 정보에서 비밀번호 업데이트
            
                let prevLogin = JSON.parse(localStorage.getItem('loginInfo')) || {};
                localStorage.setItem('loginInfo', JSON.stringify({
                    ...prevLogin,
                    password: inputPassword
                })) // 로그인 정보에서 비밀번호 업데이트

                inputCleaner(); // 입력 값 초기화
                navigator('/LoginMain') // 로그인 메인 페이지로 이동
                break;

            case '로그아웃':
                window.alert('로그아웃 하시겠습니까?') // 로그아웃 확인 창 표시
                localStorage.setItem('loginInfo', JSON.stringify({})) // 로그인 정보 초기화
                navigator('/') // 메인 페이지로 이동
                window.confirm('로그아웃 되었습니다.') // 로그아웃 완료 메시지 표시
                break;

            case '회원탈퇴':
                window.alert('정말로 회원탈퇴 하시겠습니까?') // 회원탈퇴 확인 창 표시
                localStorage.setItem('loginInfo', JSON.stringify({})) // 로그인 정보 초기화
                localStorage.setItem('SignupInfo', JSON.stringify({})) // 회원가입 정보 초기화
                navigator('/') // 메인 페이지로 이동
                window.confirm('회원탈퇴 되었습니다.') // 회원탈퇴 완료 메시지 표시
                break;

            default:
                break;
        }
    }

    return (
    <div className='button-wrap' onClick={buttonPressedHandler}> {/* 버튼 클릭 시 이벤트 핸들러 실행 */}
        <div ref={buttonRef} className='button'> {/* 버튼 요소 */}
        <span ref={textRef}>{title}</span> {/* 버튼 텍스트 */}
        </div>
    </div>
    )
}

export default Button; // Button 컴포넌트 내보내기
