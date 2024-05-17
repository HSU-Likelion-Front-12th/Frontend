//React를 위한 상태관리 라이브러리 

import { atom } from "recoil";  // Recoil 라이브러리에서 atom 함수 임포트

export const inputIDState = atom({   
    key: 'inputIDState',  // 상태 식별자
    default: '' //기본값은 null
})

export const inputPasswordState = atom({
    key: 'inputPasswordState',
    default: ''
})

export const inputPasswordConfirmedState = atom({
    key: 'inputPasswordConfirmedState',
    default: ''
})

export const inputEmailState = atom({
    key: 'inputEmailState',
    default: ''
})

export const inputPhoneState = atom({
    key: 'inputPhoneState',
    default: ''
})