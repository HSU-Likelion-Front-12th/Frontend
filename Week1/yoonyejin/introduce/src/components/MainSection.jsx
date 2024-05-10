function MainSection(){

    const divStyle={
        display:"flex",
        width:"100vw",
        height:"70vh",
        backgroundColor:"#4A86FF",
        fontSize:"4rem",
        alignItems: "center",
        justifyContent : "center"
    }

    const spanStyle={
        color:"#ffffff",
        textAlign : "center",
        lineHeight : 1.8,
        fontWeight : "bold",
        fontFamily : "Inter"
    }

    return(
        <div style={divStyle}>
            <span style={spanStyle}>
            안녕하세요!<br/>
            제 이름은 윤예진 입니다.<br/>
            소통하는 개발자가 되고 싶어요.
            </span>
        </div>
    );
}

export default MainSection;