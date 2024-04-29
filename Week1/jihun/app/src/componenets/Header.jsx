import React from 'react';
import logo from "../images/logo.png";

function Header(){
    const headerStyle={
        display: "flex",
        width: "100vw",
        flexDirection : "column",
        alignItems : "center",
        height: "12vh",
        justifyContent:"center",
    }
    const logoStyle= {
        width: "250px",
        height: "fit-content",
    }
    return(
        <div style={headerStyle}> 
            <img src={logo} style={logoStyle}/>
        </div>
    );
}

export default Header;