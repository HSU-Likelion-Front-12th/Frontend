import React from "react";
import menu3 from "../images/subway3.png";

const Menu3 = () => {
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
            <img src={menu3} style={imgStyle} alt="" />
            <br />
            <strong>비엘티</strong>
            <br />
            <br />
            <span style={spanStyle}>
                오리지널 아메리칸 스타일 베이컨의 풍미와 바삭함 그래도
            </span>
        </div>
    );
};

export default Menu3;
