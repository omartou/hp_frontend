import { createGlobalStyle } from 'styled-components';
import img from '../images/background.png';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
// pergamen background
  body {
    background-image: url(${img});
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }`;
