import '../Styles/Input.css'
import { useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'

import
{
    inputIDState,
    inputPasswordState,
    inputPasswordConfirmedState,
    inputEmailState,
    inputPhoneState

} from '../recoil'

function Input({title, disabled=false}){
    //REF
    let inputRef = useRef(null)

    //RECOIL STATE
    const [inputID, setInputID] = useRecoilState(inputIDState)
    const [inputPassword, setInputPassword] = useRecoilState(inputPasswordState)
    const [inputPasswordConfirmed, setInputPasswordConfirmed] = useRecoilState(inputPasswordConfirmedState)
    const [inputEmail, setInputEmail] = useRecoilState(inputEmailState)
    const [inputPhone, setInputPhone] = useRecoilState(inputPhoneState)

    //title processed
    let arrTitle
    useEffect(()=>{
         arrTitle= title.split(' ')
         if(arrTitle[0] === '비밀번호' || arrTitle[0] === '비밀번호확인'){
            inputRef.current.type = 'password'
         }
    })

    function inputChangeHandler(e){
        switch (arrTitle[0]) {
            case '아이디':
                setInputID(e.target.value)
                break;
            case '비밀번호':
                setInputPassword(e.target.value)
                break;
            case '비밀번호확인':
                setInputPasswordConfirmed(e.target.value)
                break;
            case '이메일':
                setInputEmail(e.target.value)        
                break;
            case '전화번호':
                setInputPhone(e.target.value)        
                break;
            default:
                break;
        }
    }

    return(
    <div className='input-container'>
        <div>
        <input ref = {inputRef} type='text' placeholder={title}  onChange={inputChangeHandler} disabled={disabled}></input>
        </div>
    </div>
    )
}

export default Input;