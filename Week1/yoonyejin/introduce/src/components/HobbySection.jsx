import dog from '../images/dog.jpg'
import loopy from '../images/loopy.jpg'
import travel from '../images/travel.jpg'

function HobbySection(){

    const indexContainer={
        display:"flex",
        justifyContent:"center",
        flexDirection : "column"
    }

    const index={
        color:"#4A86FF",
        textAlign:"center",  
        fontSize: "4rem",
        fontWeight: 700,
        fontFamily : "Inter"
    }

    const hobbyContent={
        marginTop:"4rem",
        display:"flex",
        justifyContent : "center",
        marginBottom: "8rem"
    }

    const hobby={
        display:"flex",
        flexDirection : "column",
        borderRadius : "1rem",
        backgroundColor:"#ffffff",
        width:"23rem",
        height:"23rem",
        marginRight: "1.5rem",
        alignItems: "center"
        }

    const hobbyName={
        display : "flex",
        marginTop:"0",
        backgroundColor:"#4A86FF",
        borderRadius : "1rem 1rem 0 0",
        width : "23rem",
        height:"4rem",
        fontFamily: "Inter",
        alignItems : "center",
        justifyContent : "center",
        color : "#ffffff",
        fontSize : "2rem",
        fontWeight : 700
    }

    const imgStyle={
        marginTop : "2rem",
        width:"20rem",
        height:"15rem"
        }

    return(
        <div style={indexContainer}>
            <span style={index}>HOBBY</span>

            <div style={hobbyContent}>
                <div style={hobby}>
                    <div style={hobbyName}>강아지 산책</div>
                    <img src={dog} style={imgStyle} />
                </div>
                <div style={hobby}>
                    <div style={hobbyName}>루피 모으기</div>
                    <img src={loopy} style={imgStyle} />
                </div>
                <div style={hobby}>
                    <div style={hobbyName}>여행 다니기</div>
                    <img src={travel} style={imgStyle} />
                </div>
            </div>
        </div>
    );
}

export default HobbySection;