// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: #000; /* Black background */
    color: #fff; /* White text */
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
