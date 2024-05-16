import '../Styles/DefaultLayout.css'

import bugi from '../assets/bugi.png'

function DefaultLayout({title}){
    return(
    <>
    <div className='title-container'><span>{title}</span></div>
    <div className='img-bugi-wrap'>
    <div className='img-bugi'>
        <img src={bugi} alt="상상부기" />
    </div>
    </div>
    </>
    )
}

export default DefaultLayout;