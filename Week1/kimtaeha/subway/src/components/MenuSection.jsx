import React from "react";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import Menu3 from "./Menu2";
import Menu4 from "./Menu2";

const MenuSection = () => {
    const componentStyle = {
        display: "flex",
        justifyContent: "center",
        marginTop: "5rem",
    };

    return (
        <div style={componentStyle}>
            <Menu1></Menu1>
            <Menu2></Menu2>
            <Menu3></Menu3>
            <Menu4></Menu4>
        </div>
    );
};

export default MenuSection;
