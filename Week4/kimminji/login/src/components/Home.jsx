import img from '../imgs/bugi.png';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
export default function Home(){

    return(
        <>
            <h2 className="header">홈</h2>
            <hr/>
            <div className="img-container"><img src={img} alt=""className="bugi"></img></div>
            <div className="btn-container">
                <Link to ="/Signin">
                    <button className="login-button">로그인</button>
                </Link>
                <Link to="/Signup">
                    <button className="join-button">회원가입</button>
                </Link>
            </div>
        </>
    )
}