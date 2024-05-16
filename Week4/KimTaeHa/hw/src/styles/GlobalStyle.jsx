import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  input {
    outline: none;
    border: none;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
  }

  textarea {
    resize: none;
    outline: none;
    border: none;
  }

  li {
    list-style: none;
  }

`;

export default GlobalStyle;
