import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body, html{
        font-size: 62.5% !important;
        overflow: hidden;
    }

    a{
        text-decoration: none;
    }

    img, video{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    li, ol{
        list-style-type: none;
    }

    main{
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`

export default GlobalStyles;