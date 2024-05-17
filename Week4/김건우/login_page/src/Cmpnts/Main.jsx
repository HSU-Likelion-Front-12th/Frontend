import '../Styles/Main.css'

import DefaultLayout from './DefaultLayout'
import Button from './Button'

import { Link } from 'react-router-dom'

function Main() {
    return (
    <>
      <DefaultLayout title={'홈'}/>
        <Button title='로그인' color='white' height = '3.5rem' />
        <Button title='회원가입' height= '3.5rem'/>
    </>
        
    )
}

export default Main;