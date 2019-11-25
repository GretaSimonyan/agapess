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

const text = ({textTf, whiteSpace, tabSize, lineBreak, overflowWrap, textAlign, textD, textDLine, textDStyle, textDColor, textShadow, textUP}) => `
  ${ textTf ? `text-transform: ${textTf}` : "" };
  ${ whiteSpace ? `white-space: ${whiteSpace}` : "" };
  ${ tabSize ? `tab-size: ${tabSize}` : "" };
  ${ lineBreak ? `line-break: ${lineBreak}` : "" };
  ${ overflowWrap ? `overflow-wrap: ${overflowWrap}` : "" };
  ${ textAlign ? `text-align: ${textAlign}` : "" };
  ${ textD ? `text-decoration: ${textD}` : "" };
  ${ textDLine ? `text-decoration-line: ${textDLine}` : "" };
  ${ textDStyle ? `text-decoration-style: ${textDStyle}` : "" };
  ${ textDColor ? `text-decoration-color: ${textDColor}` : "" };
  ${ textShadow ? `text-shadow: ${textShadow}` : "" };
  ${ textUP ? `text-underline-position: ${textUP}` : "" };
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

const border = ({border, borderW, borderT, borderB, borderStyle, borderR, captionS, borderColl, borderColor, borderSpac, emptyC, boxS}) => `
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
  ${ boxS ? `box-sizing: ${boxS}` : "" };
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

const flexBox = ({flex, flexD, flexW, flexF, flexG, flexS, flexB, order, justC, alignI, alignS, alignC}) => `
  ${ flex ? `display: flex` : "" };
  ${ flexD ? `flex-direction: ${flexD}` : "" };
  ${ flexW ? `flex-wrap: ${flexW}` : "" };
  ${ flexF ? `flex-flow: ${flexF}` : "" };
  ${ flexG ? `flex-grow: ${flexG}` : "" };
  ${ flexS ? `flex-shrink: ${flexS}` : "" };
  ${ flexB ? `flex-basis: ${flexB}` : "" };
  ${ order ? `order: ${order}` : "" };
  ${ justC ? `justify-content: ${justC}` : "" };
  ${ alignI ? `align-items: ${alignI}` : "" };
  ${ alignS ? `align-self: ${alignS}` : "" };
  ${ alignC ? `align-content: ${alignC}` : "" }
`;

const View = styled.div `
  ${ size }
  ${ fonts }
  ${ text }
  ${ marginPadding }
  ${ positions }
  ${ backgrounds }
  ${ flexBox }
  ${ border }
`;

export default View;