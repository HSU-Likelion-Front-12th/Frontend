import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style-type: none;
        text-decoration: none;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export default GlobalStyles;