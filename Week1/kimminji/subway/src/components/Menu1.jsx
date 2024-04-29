import menu1 from '../images/subway1.png';

function Menu1(){

    const explainStyle = {
        display: "inline-block",
        textAlign: "center",
        width:"14rem",
        height:"14rem",
        marginRight: "0.6rem"
    }
    const imgStyle = {
        width: "10rem",
        height: "6rem"
    }
    const spanStyle ={
        fontSize: "0.8rem",
        color: "grey"
    }
    return(
        <div style={explainStyle}>
            <img src={menu1} style={imgStyle}/>
            <br/>
            <strong> 에그마요</strong>
            <br/> <br/>
            <span style={spanStyle}>부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러</span>
        </div>
    );
        
        
}

export default Menu1;