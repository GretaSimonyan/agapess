import styled from 'styled-components';

const size = ({w, h, minW, maxW, minH, maxH, lh}) => `
  ${ w ? `width: ${w}` : "" };
  ${ h ? `height: ${h}` : "" };
  ${ minW ? `min-width: ${minW}` : "" };
  ${ maxW ? `max-width: ${maxW}` : "" };
  ${ minH ? `min-height: ${minH}` : "" };
  ${ maxH ? `max-height: ${maxH}` : "" };
  ${ lh ? `line-height: ${lh}` : "" };
`;

const marginPadding = ({m, p, mT, mB, mL, mR, pT, pB, pL, pR}) => `
  ${ m ? `margin: ${m}` : "" };
  ${ p ? `padding: ${p}` : "" };
  ${ mT ? `margin-top: ${mT}` : "" };
  ${ mB ? `margin-bottom: ${mB}` : "" };
  ${ mL ? `margin-left: ${mL}` : "" };
  ${ mR ? `margin-right: ${mR}` : "" };
  ${ pT ? `padding-top: ${pT}` : "" };
  ${ pB ? `padding-bottom: ${pB}` : "" };
  ${ pL ? `padding-left: ${pL}` : "" };
  ${ pR ? `padding-right: ${pR}` : "" };
`;

const fonts = ({fontF, fontSize, fontW, fontStyle, fontStretch}) => `
  ${ fontF ? `font-family: ${fontF}` : "" };
  ${ fontSize ? `font-size: ${fontSize}` : "" };
  ${ fontW ? `font-weight: ${fontW}` : "" };
  ${ fontStyle ? `font-style: ${fontStyle}` : "" };
  ${ fontStretch ? `font-stretch: ${fontStretch}` : "" };
`;

const text = ({tTf, whiteSpace, tabSize, lBreak, overflowWrap, tAlign, tD, tDLine, tDStyle, tDColor, tSh, tUP}) => `
  ${ tTf ? `text-transform: ${tTf}` : "" };
  ${ whiteSpace ? `white-space: ${whiteSpace}` : "" };
  ${ tabSize ? `tab-size: ${tabSize}` : "" };
  ${ lBreak ? `line-break: ${lBreak}` : "" };
  ${ overflowWrap ? `overflow-wrap: ${overflowWrap}` : "" };
  ${ tAlign ? `text-align: ${tAlign}` : "" };
  ${ tD ? `text-decoration: ${tD}` : "" };
  ${ tDLine ? `text-decoration-line: ${tDLine}` : "" };
  ${ tDStyle ? `text-decoration-style: ${tDStyle}` : "" };
  ${ tDColor ? `text-decoration-color: ${tDColor}` : "" };
  ${ tSh? `text-shadow: ${tSh}` : "" };
  ${ tUP ? `text-underline-position: ${tUP}` : "" };
`;

const positions = ({pos, top, right, bottom, left, float, z}) => `
  ${ pos ? `position: ${pos}` : "" };
  ${ top ? `top: ${top}` : "" };
  ${ right ? `right: ${right}` : "" };
  ${ bottom ? `bottom: ${bottom}` : "" };
  ${ left ? `left: ${left}` : "" };
  ${ float ? `float: ${float}` : "" };
  ${ z? `z-index: ${z}` : "" }
`;

const border = ({border, bW, bT, bB, bL, bR, bStyle, bRad, captionS, bColl, bColor, bSpac, emptyC}) => `
  ${ border ? `border: ${border}` : "" };
  ${ bW ? `border-width: ${bW}` : "" };
  ${ bT ? `border-top: ${bT}` : "" };
  ${ bB ? `border-bottom: ${bB}` : "" };
  ${ bL ? `border-left: ${bL}` : "" };
  ${ bR ? `border-right: ${bR}` : "" };
  ${ bStyle ? `border-style: ${bStyle}` : "" };
  ${ bRad ? `border-radius: ${bRad}` : "" };
  ${ captionS ? `caption-side: ${captionS}` : "" };
  ${ bColl ? `border-collapse: ${bColl}` : ""};
  ${ bColor ? `border-color: ${bColor}` : "" }
  ${ bSpac? `border-spacing: ${bSpac}` : "" };
  ${ emptyC ? `empty-cells: ${emptyC}` : "" };
`;

const backgrounds = ({bg, bgImg, bgPos, bgRep, bgSize, bgColor, bgClip, bgOr, bgAt}) => `
  ${ bg ? `background: ${bg}` : "" };
  ${ bgImg ? `background-image: url(${bgImg})` : "" };
  ${ bgPos ? `background-position: ${bgPos}` : "" };
  ${ bgRep ? `background-repeat: ${bgRep}` : "" };
  ${ bgSize ? `background-size: ${bgSize}` : "" };
  ${ bgColor ? `background-color: ${bgColor}` : "" };
  ${ bgClip ? `background-clip: ${bgClip}` : "" };
  ${ bgOr ? `background-origin: ${bgOr}` : "" };
  ${ bgAt ? `background-attachment: ${bgAt}` : "" };
`;

const flexBox = ({flex, f, fD, fW, fF, fG, fSh, fB, order, justC, alignI, alignS, alignC}) => `
  ${ flex ? `display: flex` : "" };
  ${ f ? `flex: ${f}` : "" };
  ${ fD ? `flex-direction: ${fD}` : "" };
  ${ fW ? `flex-wrap: ${fW}` : "" };
  ${ fF ? `flex-flow: ${fF}` : "" };
  ${ fG ? `flex-grow: ${fG}` : "" };
  ${ fSh ? `flex-shrink: ${fSh}` : "" };
  ${ fB ? `flex-basis: ${fB}` : "" };
  ${ order ? `order: ${order}` : "" };
  ${ justC ? `justify-content: ${justC}` : "" };
  ${ alignI ? `align-items: ${alignI}` : "" };
  ${ alignS ? `align-self: ${alignS}` : "" };
  ${ alignC ? `align-content: ${alignC}` : "" }
`;

const other =({boxS, boxSh, overflow, c, op, tr}) =>`
  ${ boxS ? `box-sizing: ${boxS}` : "" };
  ${ boxSh ? `box-shadow: ${boxSh}` : "" };
  ${ overflow ? `overflow : ${overflow}` : "" };
  ${ c ? `color: ${c}` : "" };
  ${ op ? `opacity: ${op}` : "" };
  ${ tr ? `transition: ${tr}` : "" };
  ${ lsp ? `letter-spacing: ${lsp}` : "" };
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
  ${ other }
`;

export default View;