import DefaultLayout from "./DefaultLayout" // DefaultLayout 컴포넌트 임포트
import Button from "./Button" // Button 컴포넌트 임포트
import Input from "./Input" // Input 컴포넌트 임포트

function Signup (){
    return(
    <>
        <DefaultLayout title='회원가입'/> {/* 타이틀 '회원가입'을 가진 DefaultLayout 컴포넌트 */}
        <Input title='이메일 ex) abc123@naver.com'/> {/* '이메일' 입력 필드, 예시 포함 */}
        <Input title='전화번호 ex) 01000000000'/> {/* '전화번호' 입력 필드, 예시 포함 */}
        <Input title='아이디'/> {/* '아이디' 입력 필드 */}
        <Input title='비밀번호'/> {/* '비밀번호' 입력 필드 */}
        <Input title='비밀번호확인'/> {/* '비밀번호확인' 입력 필드 */}
        <Button title='회원가입' height='3rem'/> {/* '회원가입' 버튼, 높이 3rem */}
    </>
    )
}

export default Signup; // Signup 컴포넌트 내보내기
