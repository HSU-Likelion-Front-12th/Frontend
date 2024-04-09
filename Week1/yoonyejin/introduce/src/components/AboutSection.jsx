import AboutLeft from "./AboutLeft";
import AboutRigth from "./AboutRight";

function AboutSection(){

    const indexContainer={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection : "column",
    }

    const index={
        marginTop:"4rem",
        color:"#4A86FF",
        textAlign:"center",  
        fontSize: "4rem",
        fontWeight: 700,
        fontFamily : "Inter",
    }

    const aboutContent={
        marginTop:"4rem",
        display:"flex",
        justifyContent : "center"
    }

    return(
        <div style={indexContainer}>
            <span style={index}>ABOUT</span>
            <div style={aboutContent}>
                <AboutLeft />
                <AboutRigth />
            </div>
        </div>
    );

}

export default AboutSection;