
import About from './About';
import Hobby from './Hobby';
import Profil from './Profil';
function Main(){
    const mainStyle = {
        width: "100vw",
        height: "200vh",
        backgroundColor: "#F3F5FF",
        border: "1px solid #FFF"
    }
    return (
    <div  style={mainStyle}>
        <About/>
        <Hobby/>
    </div>);
}
export default Main;