import React from 'react';
import styled from 'styled-components';

const Div = (props) => {
  const {
    children,
    position,
    display,
    flexDirection,
    justifyContent,
    float,
    width,
    height,
    margin,
    padding,
    border,
    borderRadius,
    shadow,
    boxShadow,
    transition,
    backgroundColor,
    overflow,
    color,
    cursor,
    opacity,
    colorHover,
    container,
    start,
    center,
    row,
    spaceBetween,
    spaceAround,
    textCenter,
    fontSize,
    inline,
    bookMark,
    modalContainer,
    modalBox,
    velogCard,
    _onClick,
    alignItems,
  } = props;

  const styles = {
    children,
    position,
    display,
    flexDirection,
    justifyContent,
    float,
    width,
    height,
    margin,
    padding,
    border,
    borderRadius,
    shadow,
    boxShadow,
    transition,
    backgroundColor,
    overflow,
    color,
    cursor,
    opacity,
    colorHover,
    container,
    start,
    center,
    row,
    spaceBetween,
    spaceAround,
    textCenter,
    fontSize,
    inline,
    bookMark,
    modalContainer,
    modalBox,
    velogCard,
    alignItems,
  };

  return (
    <Box onClick={_onClick} {...styles}>
      {children}
    </Box>
  );
};

Div.defaultProps = {
  children: null,
  position: '',
  display: '',
  flexDirection: '',
  justifyContent: '',
  float: false,
  width: '',
  height: '',
  margin: '',
  padding: '',
  border: '',
  borderRadius: '',
  shadow: false,
  boxShadow: '',
  transition: '',
  backgroundColor: '',
  overflow: '',
  color: '',
  cursor: '',
  opacity: '',
  colorHover: false,
  container: false,
  start: '',
  center: false,
  row: false,
  spaceBetween: false,
  spaceAround: false,
  textCenter: false,
  fontSize: '',
  inline: false,
  bookMark: false,
  modal: false,
  velogCard: false,
  alignItems: null,
  _onClick: () => {},
};

const Box = styled.div`
  ${(props) =>
    props.container ? 'position:realative; width:100%; margin:0px auto;' : ''};
  position: ${(props) => props.position};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  float: ${(props) => props.float};
  ${(props) => (props.inline ? 'display:inline-block;' : 'display:block')};
  ${(props) =>
    props.start
      ? 'display:flex; flex-direction:row; align-items:center; justify-content:flex-start;'
      : ''};
  ${(props) =>
    props.center
      ? 'display:flex; flex-direction:column; align-items:center; justify-content:center;'
      : ''};
  ${(props) =>
    props.row
      ? 'display:flex; flex-direction:row; align-items:center; justify-content:center;'
      : ''};
  ${(props) =>
    props.spaceBetween
      ? 'display:flex; flex-direction:row; align-items:center; justify-content:space-between;'
      : ''};
  ${(props) =>
    props.spaceAround
      ? 'display:flex; flex-direction:row; align-items:center; justify-content:space-around;'
      : ''};

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.shadow};
  transition: ${(props) => props.transition};
  background-color: ${(props) => props.backgroundColor};
  overflow: hidden;
  ${(props) => (props.textCenter ? `text-align:center;` : '')};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  &:hover {
    cursor: ${(props) => props.cursor};
    opacity: ${(props) => props.opacity};
    color: ${(props) => props.colorHover};
  }
`;


export default Div;
