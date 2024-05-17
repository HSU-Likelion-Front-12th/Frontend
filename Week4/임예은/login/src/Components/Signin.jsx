import DefaultLayout from "./DefaultLayout" // DefaultLayout 컴포넌트 임포트
import Button from "./Button" // Button 컴포넌트 임포트
import Input from "./Input" // Input 컴포넌트 임포트

function Signin (){
    return(
    <>
        <DefaultLayout title='로그인'/> {/* 타이틀 '로그인'을 가진 DefaultLayout 컴포넌트 */}
        <Input title='아이디'/> {/* '아이디' 입력 필드 */}
        <Input title='비밀번호'/> {/* '비밀번호' 입력 필드 */}
        <Button title='로그인' height='3rem'/> {/* '로그인' 버튼, 높이 3rem */}
    </>
    )
}

export default Signin; // Signin 컴포넌트 내보내기
