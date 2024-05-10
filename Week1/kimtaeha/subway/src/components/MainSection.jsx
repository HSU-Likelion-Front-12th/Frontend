import React from "react";
import background from "../images/main.png";

const MainSection = () => {
    const imgStyle = {
        display: "flex",
        width: "100vw",
        height: "45vh",
    };

    return <img src={background} style={imgStyle} alt="" />;
};

export default MainSection;
