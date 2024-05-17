import '../Styles/DefaultLayout.css' // DefaultLayout 컴포넌트의 스타일을 위한 CSS 파일 임포트

import bugi from '../assets/bugi.png' // 상상부기 이미지를 임포트

function DefaultLayout({title}){
    return(
    <>
    <div className='title-container'><span>{title}</span></div> {/* 타이틀 컨테이너 안에 타이틀 텍스트 표시 */}
    <div className='img-bugi-wrap'>
    <div className='img-bugi'>
        <img src={bugi} alt="상상부기" /> {/* 상상부기 이미지 표시 */}
    </div>
    </div>
    </>
    )
}

export default DefaultLayout; // DefaultLayout 컴포넌트 내보내기
