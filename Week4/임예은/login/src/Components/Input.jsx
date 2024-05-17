import '../Styles/Input.css' // Input 컴포넌트의 스타일을 위한 CSS 파일 임포트
import { useEffect, useRef } from 'react' // React 훅 임포트
import { useRecoilState } from 'recoil' // Recoil 상태 관리 훅 임포트

import
{
    inputIDState,
    inputPasswordState,
    inputPasswordConfirmedState,
    inputEmailState,
    inputPhoneState
} from '../recoil' // Recoil 상태 변수들 임포트

function Input({title, disabled=false}){
    //REF
    let inputRef = useRef(null) // input 요소 참조를 위한 useRef 훅

    //RECOIL STATE
    const [inputID, setInputID] = useRecoilState(inputIDState) // Recoil 상태 변수 및 setter 함수
    const [inputPassword, setInputPassword] = useRecoilState(inputPasswordState) // Recoil 상태 변수 및 setter 함수
    const [inputPasswordConfirmed, setInputPasswordConfirmed] = useRecoilState(inputPasswordConfirmedState) // Recoil 상태 변수 및 setter 함수
    const [inputEmail, setInputEmail] = useRecoilState(inputEmailState) // Recoil 상태 변수 및 setter 함수
    const [inputPhone, setInputPhone] = useRecoilState(inputPhoneState) // Recoil 상태 변수 및 setter 함수

    // title processed
    let arrTitle
    useEffect(()=>{
         arrTitle = title.split(' ') // title을 공백 기준으로 분할
         if(arrTitle[0] === '비밀번호' || arrTitle[0] === '비밀번호확인'){
            inputRef.current.type = 'password' // 비밀번호 입력 필드일 경우 type을 'password'로 설정
         }
    }, [title]) // title이 변경될 때마다 실행

    function inputChangeHandler(e){
        switch (arrTitle[0]) {
            case '아이디':
                setInputID(e.target.value) // 아이디 입력 값 설정
                break;
            case '비밀번호':
                setInputPassword(e.target.value) // 비밀번호 입력 값 설정
                break;
            case '비밀번호확인':
                setInputPasswordConfirmed(e.target.value) // 비밀번호 확인 입력 값 설정
                break;
            case '이메일':
                setInputEmail(e.target.value) // 이메일 입력 값 설정
                break;
            case '전화번호':
                setInputPhone(e.target.value) // 전화번호 입력 값 설정
                break;
            default:
                break;
        }
    }

    return(
    <div className='input-container'>
        <div>
        <input ref={inputRef} type='text' placeholder={title} onChange={inputChangeHandler} disabled={disabled}></input> {/* input 필드 설정 */}
        </div>
    </div>
    )
}

export default Input; // Input 컴포넌트 내보내기
