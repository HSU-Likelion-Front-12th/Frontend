import Profil from "./Profil";
import AboutDetails from "./AboutDetail";
import styled from 'styled-components';

function About(){
    const MenuStyle = {
        color: "#4A86FF",
        textAlign: "center",
        fontFamily: "Inter",
        fontSize: "4rem",
        fontWeight: "800",
        lineHeight: "150px",
    }
    const aboutStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
    return (<> 
        <div style={MenuStyle}> ABOUT</div>
        <div style= {aboutStyle}> 
            <Profil/>
            <AboutDetails/>
        </div>
    </>
    );
}

export default About;