import React from 'react';
import styled from 'styled-components';

const Div = (props) => {
  const {
    children,
    position,
    display,
    flexDirection,
    alignItems,
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
    rowStart,
    spaceBetween,
    spaceAround,
    textCenter,
    fontSize,
    inline,
    bookmark,
    modalContainer,
    modalBox,
    bottomSheet,
    _onClick,
  } = props;

  const styles = {
    children,
    position,
    display,
    flexDirection,
    alignItems,
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
    rowStart,
    spaceBetween,
    spaceAround,
    textCenter,
    fontSize,
    inline,
    bookmark,
    modalContainer,
    modalBox,
    bottomSheet,
  };
  if (bookmark) {
    return (
      <React.Fragment>
        <Bookmark onClick={_onClick} {...styles}>
          {children}
        </Bookmark>
      </React.Fragment>
    );
  }

  if (modalContainer) {
    return (
      <React.Fragment>
        <ModalContainer onClick={_onClick} {...styles}>
          {children}
        </ModalContainer>
      </React.Fragment>
    );
  }

  if (modalBox) {
    return (
      <React.Fragment>
        <ModalBox onClick={_onClick} {...styles}>
          {children}
        </ModalBox>
      </React.Fragment>
    );
  }

  if (bottomSheet) {
    return (
      <React.Fragment>
        <BottomSheet onClick={_onClick} {...styles}>
          {children}
        </BottomSheet>
      </React.Fragment>
    );
  }

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
  alignItems: '',
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
  rowStart: false,
  spaceBetween: false,
  spaceAround: false,
  textCenter: false,
  fontSize: 'false',
  inline: false,
  bookmark: false,
  modal: false,
  bottomSheet: false,
  _onClick: () => {},
};

const Box = styled.div`
  ${(props) =>
    props.container ? 'position:realative; width:100%; margin:0px auto;' : ''};
  position: ${(props) => props.position};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  float: ${(props) => props.float};
  ${(props) => (props.inline ? 'display:inline-block;' : '')};
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
    props.rowStart
      ? 'display:flex; flex-direction:row; align-items:start; justify-content:space-between;'
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

// const Route = styled.div`

// `

const Bookmark = styled.div`
  position: fixed;
  top: 300px;
  right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: auto;
  padding: 20px 0px;
  background-color: lightgrey;
  border: 1px solid black;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  z-index: 9999;
`;

const ModalBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  width: 1000px;
  height: 700px;
  padding: auto 0px;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 10px;
`;

const BottomSheet = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  padding: 5px 0px;
  background-color: lightgrey;
  border: ${(props) => props.border};
`;

export default Div;
