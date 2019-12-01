import styled from 'styled-components';

const size = ({w, h, minW, maxW, minH, maxH, lineH}) => `
  ${ w ? `width: ${w}` : "" };
  ${ h ? `height: ${h}` : "" };
  ${ minW ? `min-width: ${minW}` : "" };
  ${ maxW ? `max-width: ${maxW}` : "" };
  ${ minH ? `min-height: ${minH}` : "" };
  ${ maxH ? `max-height: ${maxH}` : "" };
  ${ lineH ? `line-height: ${lineH}` : "" };
`;

const marginPadding = ({m, p}) => `
  ${ m ? `margin: ${m}` : "" };
  ${ p ? `padding: ${p}` : "" };
`;

const fonts = ({fontF, fontSize, fontW, fontStyle, fontStretch}) => `
  ${ fontF ? `font-family: ${fontF}` : "" };
  ${ fontSize ? `font-size: ${fontSize}` : "" };
  ${ fontW ? `font-weight: ${fontW}` : "" };
  ${ fontStyle ? `font-style: ${fontStyle}` : "" };
  ${ fontStretch ? `font-stretch: ${fontStretch}` : "" };
`;

const positions = ({position, top, right, bottom, left, float, z}) => `
  ${ position ? `position: ${position}` : "" };
  ${ top ? `top: ${top}` : "" };
  ${ right ? `right: ${right}` : "" };
  ${ bottom ? `bottom: ${bottom}` : "" };
  ${ left ? `left: ${left}` : "" };
  ${ float ? `float: ${float}` : "" };
  ${ z? `z-index: ${z}` : "" }
`;

const border = ({border, borderW, borderT, borderB, borderStyle, borderR, captionS, borderColl, borderColor, borderSpac, emptyC}) => `
  ${ border ? `border: ${border}` : "" };
  ${ borderW ? `border-width: ${borderW}` : "" };
  ${ borderT ? `border-top: ${borderT}` : "" };
  ${ borderB ? `border-bottom: ${borderB}` : "" };
  ${ borderStyle ? `border-style: ${borderStyle}` : "" };
  ${ borderR ? `border-radius: ${borderR}` : "" };
  ${ captionS ? `caption-side: ${captionS}` : "" };
  ${ borderColl ? `border-collapse: ${borderColl}` : ""};
  ${ borderColor ? `border-color: ${borderColor}` : "" }
  ${ borderSpac? `border-spacing: ${borderSpac}` : "" };
  ${ emptyC ? `empty-cells: ${emptyC}` : "" };
`;

const backgrounds = ({bg, bgImg, bgPos, bgRep, bgSize, bgColor, bgClip, bgOr, bgAt}) => `
  ${ bg ? `background: ${bg}` : "" };
  ${ bgImg ? `background-image: ${bgImg}` : "" };
  ${ bgPos ? `background-position: ${bgPos}` : "" };
  ${ bgRep ? `background-repeat: ${bgRep}` : "" };
  ${ bgSize ? `background-size: ${bgSize}` : "" };
  ${ bgColor ? `background-color: ${bgColor}` : "" };
  ${ bgClip ? `background-clip: ${bgClip}` : "" };
  ${ bgOr ? `background-origin: ${bgOr}` : "" };
  ${ bgAt ? `background-attachment: ${bgAt}` : "" };
`;

const other =({boxS, overflow, color}) =>`
  ${ boxS ? `box-sizing: ${boxS}` : "" };
  ${ overflow ? `overflow : ${overflow}` : "" };
  ${ color ? `color: ${color}` : "" };
`;

const Button = styled.button `
  ${ size }
  ${ fonts }
  ${ marginPadding }
  ${ positions }
  ${ backgrounds }
  ${ border }
  ${ other }
`;

export default Button;