import React from "react";
import Section1 from "./about/Section1";
import Section2 from "./hobby/Section2";

const Section = () => {
    const sectionStyle = {
        backgroundColor: "#f3f5ff",
        paddingBottom: "5.6rem",
    };

    const subTitleStype = {
        paddingTop: "3.75rem",
        color: "#4a86ff",

        textAlign: "center",
        fontFamily: "Inter",
        fontSize: "3.75rem",
        fontStyle: "normal",
        fontWeight: "800",
    };

    return (
        <>
            <Section1
                sectionStyle={sectionStyle}
                subTitleStype={subTitleStype}
            />
            <Section2
                sectionStyle={sectionStyle}
                subTitleStype={subTitleStype}
            />
        </>
    );
};

export default Section;
