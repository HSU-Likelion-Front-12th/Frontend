import React from "react";
import menu2 from "../images/subway2.png";

const Menu2 = () => {
    const explainStyle = {
        display: "inlineBlock",
        textAlign: "center",
        width: "14rem",
        height: "14rem",
        marginRight: "0.6rem",
    };

    const imgStyle = {
        width: "10rem",
        height: "6rem",
    };

    const spanStyle = {
        fontSize: "0.8rem",
        color: "gray",
    };

    return (
        <div style={explainStyle}>
            <img src={menu2} style={imgStyle} alt="" />
            <br />
            <strong>이탈리안 비엠티</strong>
            <br />
            <br />
            <span style={spanStyle}>
                페페로니,살라미 그리고 햄이 만들어내는 최상의 조화! 전세계가
                사랑하는 써브웨이의 베스트셀러!
            </span>
        </div>
    );
};

export default Menu2;
