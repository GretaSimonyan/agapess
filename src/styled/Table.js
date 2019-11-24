import styled from 'styled-components';

const size = ({width, height, minW, maxW, minH, maxH, lineH}) => `
  ${ width ? `width: ${width}` : "" };
  ${ height ? `height: ${height}` : "" };
  ${ minW ? `min-width: ${minW}` : "" };
  ${ maxW ? `max-width: ${maxW}` : "" };
  ${ minH ? `min-height: ${minH}` : "" };
  ${ maxH ? `max-height: ${maxH}` : "" };
  ${ lineH ? `line-height: ${lineH}` : "" };
`;

const positions = ({position, top, right, bottom, left, float, zIndex}) => `
  ${ position ? `position: ${position}` : "" };
  ${ top ? `top: ${top}` : "" };
  ${ right ? `right: ${right}` : "" };
  ${ bottom ? `bottom: ${bottom}` : "" };
  ${ left ? `left: ${left}` : "" };
  ${ float ? `float: ${float}` : "" };
  ${ zIndex? `z-index: ${zIndex}` : "" }
`;

const border = ({border, borderW, borderT, borderB, borderStyle, captionS, borderColl, borderColor, borderSpac, emptyC,}) => `
  ${ border ? `border: ${border}` : "" };
  ${ borderW ? `border-width: ${borderW}` : "" };
  ${ borderT ? `border-top: ${borderT}` : "" };
  ${ borderB ? `border-bottom: ${borderB}` : "" };
  ${ borderStyle ? `border-style: ${borderStyle}` : "" };
  ${ captionS ? `caption-side: ${captionS}` : "" };
  ${ borderColl ? `border-collapse: ${borderColl}` : ""};
  ${ borderColor ? `border-color: ${borderColor}` : "" }
  ${ borderSpac? `border-spacing: ${borderSpac}` : "" };
  ${ emptyC ? `empty-cells: ${emptyC}` : "" }
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

const Table = styled.table`
    ${ size }
    ${ positions }
    ${ border }
    ${ backgrounds }
`;

export default Table;