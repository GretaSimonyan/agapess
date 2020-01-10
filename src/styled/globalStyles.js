import { createGlobalStyle } from 'styled-components';
// import ArvoItalic from '../../src/assets/fonts/Arvo-Italic.ttf';
// import ArvoBold from '../../src/assets/fonts/Arvo-Bold.ttf';
import ArvoRegular from '../../src/assets/fonts/Arvo-Regular.ttf';
// import ArvoBoldItalic from '../../src/assets/fonts/Arvo-BoldItalic.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face{
    font-family: "Arvo";
    src: url(${ArvoRegular});
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Arvo";
  }
  html{
    scroll-behavior: smooth;
    }
`;

export default GlobalStyles;