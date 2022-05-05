import React from 'react';
import styled from 'styled-components';

const Div = (props) => {
  const {
    top,
    right,
    children,
    position,
    display,
    flexDirection,
    alignItems,
    justifyContent,
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
    borderRadius,
    shadow,
    boxShadow,
    transition,
    backgroundColor,
    src,
    backgroundSize,
    backgroundPosition,
    repeat,
    overflow,
    color,
    cursor,
    opacity,
    colorHover,
    container,
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
    overlayModal,
    modal,
    bottomSheet,
    _onClick,
  } = props;

  const styles = {
    top,
    right,
    children,
    position,
    display,
    flexDirection,
    alignItems,
    justifyContent,
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
    borderRadius,
    shadow,
    boxShadow,
    transition,
    backgroundColor,
    src,
    backgroundSize,
    backgroundPosition,
    repeat,
    overflow,
    color,
    cursor,
    opacity,
    colorHover,
    container,
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
    overlayModal,
    modal,
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

  return (
    <Box onClick={_onClick} {...styles}>
      {children}
    </Box>
  );
};

Div.defaultProps = {
  top: '',
  right: '',
  children: null,
  position: '',
  display: '',
  flexDirection: '',
  alignItems: '',
  justifyContent: '',
  float: false,
  width: '',
  height: '',
  minHeight: '',
  margin: '',
  padding: '',
  border: '',
  borderTop: '',
  borderBottom: '',
  borderRight: '',
  borderRadius: '',
  shadow: false,
  boxShadow: '',
  transition: '',
  backgroundColor: '',
  src: '',
  backgroundSize: '',
  backgroundPosition: false,
  repeat: false,
  overflow: '',
  color: '',
  cursor: '',
  opacity: '',
  colorHover: false,
  container: false,
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
  modal: false,
  bottomSheet: false,
  _onClick: () => {},
};

const Box = styled.div`
  ${(props) =>
    props.container ? 'position:realative; width:100%;margin:0px auto;' : ''};
  position: ${(props) => props.position};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  float: ${(props) => props.float};
  ${(props) => (props.inline ? 'display:inline-block;' : '')};
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
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.shadow};
  transition: ${(props) => props.transition};
  background-color: ${(props) => props.backgroundColor};
  background-image: url('${(props) => props.src}');
  background-size: ${(props) => props.backgroundSize};
  background-position: ${(props) => props.backgroundPosition};
  background-repeat: ${(props) => props.repeat};
  overflow: ${(props) => props.overflow};
  ${(props) => (props.textCenter ? `text-align:center;` : '')};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  &:hover {
    cursor: ${(props) => props.cursor};
    opacity: ${(props) => props.opacity};
    color: ${(props) => props.colorHover};
  }
`;

const Bookmark = styled.div`
  position: fixed;
  top: 220px;
  right: 0px;
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
  background-color: rgba(100, 100, 100, 0.5);
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
`;

export default Div;
