import DefaultLayout from "./DefaultLayout" // DefaultLayout 컴포넌트 임포트
import Input from "./Input" // Input 컴포넌트 임포트
import Button from "./Button" // Button 컴포넌트 임포트

function Change() {
    const signupInfos = JSON.parse(window.localStorage.getItem('SignupInfo')) // 로컬 스토리지에서 회원가입 정보 가져오기
    console.log(signupInfos.email) // 이메일 정보 콘솔에 출력
    return(
    <>
        <DefaultLayout title='비밀번호 변경'/> {/* DefaultLayout 컴포넌트에 타이틀 '비밀번호 변경' 설정 */}
        <Input title={signupInfos.email} disabled={true}/> {/* 이메일 정보가 비활성화된 Input 컴포넌트 */}
        <Input title={signupInfos.phone} disabled={true}/> {/* 전화번호 정보가 비활성화된 Input 컴포넌트 */}
        <Input title={signupInfos.id} disabled={true}/> {/* 아이디 정보가 비활성화된 Input 컴포넌트 */}
        <Input title='비밀번호'/> {/* 새로운 비밀번호 입력을 위한 Input 컴포넌트 */}
        <Input title='비밀번호확인'/> {/* 비밀번호 확인 입력을 위한 Input 컴포넌트 */}
        <Button title='비밀번호 변경' height='3rem'/> {/* 비밀번호 변경 버튼, 높이 3rem */}
    </>
    )
}

export default Change; // Change 컴포넌트 내보내기
