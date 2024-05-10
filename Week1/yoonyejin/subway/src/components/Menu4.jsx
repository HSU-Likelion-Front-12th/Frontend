import menu4 from '../images/subway4.png'

function Menu4(){

    const explainSytle={
        display : "inlineBlock",
        textAlign : "center",
        width : "14rem",
        height : "14rem",
        marginRight:"0.6rem"
    }

    const imgStyle={
        width:"10rem",
        height:"6rem"
    }

    const spanStyle={
        fontSize:"0.8rem",
        color:"gray"
    }

    return(
        <div style={explainSytle}>
            <img src={menu4} style={imgStyle} />
            <br />
            <strong>햄</strong>
            <br /><br />
            <span style={spanStyle}>기본 중에 기본! <br />
            풍부한 햄이 만들어내는 입 안 가득 넘치는 맛의 향연</span>
        </div>
    );
}

export default Menu4;