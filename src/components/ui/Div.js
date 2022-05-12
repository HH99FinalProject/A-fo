import React from 'react';
import styled from 'styled-components';

const Div = (props) => {
  const {
    children,
    position,
    top,
    bottom,
    left,
    right,
    zIndex,
    display,
    flexDirection,
    alignItems,
    justifyContent,
    table,
    vertical,
    float,
    width,
    height,
    minHeight,
    margin,
    padding,
    border,
    borderTop,
    borderBottom,
    borderRight,
    borderLeft,
    collapse,
    borderRadius,
    shadow,
    transition,
    background,
    opacity_,
    backgroundColor,
    src,
    backgroundSize,
    backgroundPosition,
    repeat,
    overflow,
    animation,
    color,
    cursor,
    opacity,
    colorHover,
    container,
    flexFlow,
    flexWrap,
    flexStart,
    flexEnd,
    center,
    row,
    rowStart,
    spaceBetween,
    spaceAround,
    spaceEvenly,
    textCenter,
    fontSize,
    inline,
    bookmark,
    bookmarkFix,
    overlayModal,
    modal,
    bottomSheet,
    preparingCountry,
    fadein,
    BGHover,
    _onClick,
  } = props;

  const styles = {
    children,
    position,
    top,
    bottom,
    left,
    right,
    zIndex,
    display,
    flexDirection,
    alignItems,
    justifyContent,
    table,
    vertical,
    float,
    width,
    height,
    minHeight,
    margin,
    padding,
    border,
    borderTop,
    borderBottom,
    borderRight,
    borderLeft,
    collapse,
    borderRadius,
    shadow,
    transition,
    background,
    opacity,
    backgroundColor,
    src,
    backgroundSize,
    backgroundPosition,
    repeat,
    overflow,
    animation,
    color,
    cursor,
    opacity_,
    colorHover,
    container,
    flexFlow,
    flexWrap,
    flexStart,
    flexEnd,
    center,
    row,
    rowStart,
    spaceBetween,
    spaceAround,
    spaceEvenly,
    textCenter,
    fontSize,
    inline,
    bookmark,
    bookmarkFix,
    overlayModal,
    modal,
    bottomSheet,
    preparingCountry,
    fadein,
    BGHover,
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

  if (overlayModal) {
    return (
      <React.Fragment>
        <OverlayModal onClick={_onClick} {...styles}>
          {children}
        </OverlayModal>
      </React.Fragment>
    );
  }

  if (modal) {
    return (
      <React.Fragment>
        <Modal onClick={_onClick} {...styles}>
          {children}
        </Modal>
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

  if (preparingCountry) {
    return (
      <React.Fragment>
        <PreparingCountry onClick={_onClick} {...styles}>
          {children}
        </PreparingCountry>
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
  top: '',
  bottom: '',
  left: '',
  right: '',
  zIndex: '',
  display: '',
  flexDirection: '',
  alignItems: '',
  justifyContent: '',
  table: '',
  vertical: '',
  float: '',
  width: '',
  height: '',
  minHeight: '',
  margin: '',
  padding: '',
  border: '',
  borderTop: '',
  borderBottom: '',
  borderRight: '',
  borderLeft: '',
  collapse: '',
  borderRadius: '',
  shadow: '',
  transition: '',
  background: '',
  opacity_: '',
  backgroundColor: '',
  src: '',
  backgroundSize: '',
  backgroundPosition: false,
  repeat: false,
  overflow: '',
  animation: '',
  color: '',
  cursor: '',
  opacity: '',
  colorHover: false,
  container: false,
  flexFlow: false,
  flexWrap: false,
  flexStart: false,
  flexEnd: false,
  center: false,
  row: false,
  rowStart: false,
  spaceBetween: false,
  spaceAround: false,
  spaceEvenly: false,
  textCenter: false,
  fontSize: '',
  inline: false,
  bookmark: false,
  bookmarkFix: false,
  modal: false,
  bottomSheet: false,
  preparingCountry: false,
  fadein: false,
  BGHover: false,
  _onClick: () => {},
};

const Box = styled.div`
  ${(props) =>
    props.container ? 'position:realative; width:100vw; margin:0px auto;' : ''};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  z-index: ${(props) => props.zIndex};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  table-layout: ${(props) => props.table};
  vertical-align: ${(props) => props.vertical};
  float: ${(props) => props.float};
  ${(props) => (props.inline ? 'display:inline-block;' : '')};
  ${(props) =>
    props.flexFlow
      ? 'display:flex; flex-flow:row wrap; align-items:center; justify-content:flex-start'
      : ''};
  ${(props) =>
    props.flexStart
      ? 'display:flex; flex-direction:row; align-items:center; justify-content:flex-start;'
      : ''};
  ${(props) =>
    props.flexEnd
      ? 'display:flex; flex-direction:row; align-items:center; justify-content:flex-end;'
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
  ${(props) =>
    props.spaceEvenly
      ? 'display:flex; flex-direction:row; align-items:center; justify-content:space-evenly;'
      : ''};

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-top: ${(props) => props.borderTop};
  border-bottom: ${(props) => props.borderBottom};
  border-right: ${(props) => props.borderRight};
  border-left: ${(props) => props.borderLeft};
  border-collapse: ${(props) => props.collapse};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.shadow};
  transition: ${(props) => props.transition};
  background: ${(props) => props.background};
  opacity: ${(props) => props.opacity_};
  background-color: ${(props) => props.backgroundColor};
  background-image: url('${(props) => props.src}');
  background-size: ${(props) => props.backgroundSize};
  background-position: ${(props) => props.backgroundPosition};
  background-repeat: ${(props) => props.repeat};
  overflow: ${(props) => props.overflow};
  animation: ${(props) => props.animation};
  ${(props) => (props.textCenter ? `text-align:center;` : '')};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  &:hover {
    cursor: ${(props) => props.cursor};
    background-color: ${(props) => props.BGHover};
    opacity: ${(props) => props.opacity};
    color: ${(props) => props.colorHover};
    ${(props) => (props.fadein ? `animation:fadein 0.5s ease-in-out;` : '')};
    @keyframes fadein {
      0% {
        opacity: 0;
        transform: translateY(-100px);
      }
      100% {
        opacity: 1;
        transform: none;
      }
    }
  }
`;

const Bookmark = styled.div`
  ${(props) =>
    props.bookmarkFix
      ? 'position:fixed; top: 80px; right:0; z-index:1;'
      : 'position: absolute; top: 0; right: 0;'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: auto;
  background-color: white;
  border: 1px solid black;
`;

const OverlayModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  z-index: 1000;
  overflow: hidden;
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
  height: 80px;
  padding: 5px 0px;
  border: ${(props) => props.border};
  border-top: ${(props) => props.borderTop};
  background-color: #4768db;
  overflow: hidden;
  animation: fadein 0.5s ease-in-out;
  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
`;

const PreparingCountry = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 234px;
  height: 234px;
  margin: -1px 0px 0px -1px;
  background-color: #d5d5d5;
  border: 1px solid black;
  opacity: 0.5;
`;

export default Div;
