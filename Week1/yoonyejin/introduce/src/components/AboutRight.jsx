function AboutRigth(){

    const contentContainer={
        marginLeft:"3rem",
        display : "flex",
        flexDirection : "column"
    }

    const row={
        display : "flex",
        flexDirection : "row",
    }

    const explainSytle={
        display : "inlineBlock",
        width : "14rem",
        height : "19rem",
        marginRight:"7rem",
        fontSize:"2rem",
        fontFamily:"Inter"
    }

    const spanStyle={
        fontSize:"1.2rem",
        color:"#626682",
        fontFamily:"Inter",
        fontWeight: "bold",
    }


    return(
        <div style={contentContainer}>
            <div style={row}>
                <div style={explainSytle}>
                    <strong>EDUCATION</strong>
                    <br />
                    <span style={spanStyle}>
                        <p>한성대학교 컴퓨터공학부</p>
                        <p>2023.03~2027.02</p>
                    </span>
                </div>
                <div style={explainSytle}>
                    <strong>SKILLS</strong>
                    <br />
                    <span style={spanStyle}>
                        <p>Phythom</p>
                        <p>C</p>
                        <p>C++</p>
                    </span>
                </div>
            </div>
            <div style={row}>
                <div style={explainSytle}>
                    <strong>WORK</strong>
                    <br />
                    <span style={spanStyle}>
                        <p>프론트엔드 개발자</p>
                    </span>
                </div>
                <div style={explainSytle}>
                    <strong>ACTIVITIES</strong>
                    <br />
                    <span style={spanStyle}>
                        <p>멋쟁이사자처럼 12기</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default AboutRigth;