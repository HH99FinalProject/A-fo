import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
  const {
    display,
    width,
    maxWidth,
    height,
    maxHeight,
    border,
    radius,
    shape,
    src,
    size,
    position,
    repeat,
  } = props;

  const styles = {
    display,
    width,
    maxWidth,
    height,
    maxHeight,
    border,
    radius,
    src,
    size,
    position,
    repeat,
  };

  if (shape === 'rectangle') {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  if (shape === 'circle') {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  return (
    <React.Fragment>
      <ImageDefault {...styles}></ImageDefault>
    </React.Fragment>
  );
};
Image.defaultProps = {
  display: '',
  width: '',
  maxWidth: '',
  height: '',
  maxHeight: '',
  border: '',
  radius: '',
  shape: '',
  src: '',
  size: '',
  position: false,
  repeat: false,
};

//기본
const ImageDefault = styled.div`
  display: ${(props) => props.display};
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  max-height: ${(props) => props.maxHeight};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  background-image: url('${(props) => props.src}');
  background-size: ${(props) => props.size};
  background-position: ${(props) => props.position};
  background-repeat: ${(props) => props.repeat};
`;

//4:3비율 직사각형
const AspectOutter = styled.div`
  width: ${(props) => props.width};
  min-width: 250px;
`;
const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  border: ${(props) => props.border};
  background-image: url('${(props) => props.src}');
  background-size: ${(props) => props.size};
  background-position: ${(props) => props.position};
`;

//원형
const ImageCircle = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  border-radius: 50%;
  background-image: url('${(props) => props.src}');
  background-size: ${(props) => props.size};
  background-position: ${(props) => props.position};
`;

export default Image;
