import React from 'react';
import styled from 'styled-components';
// import arrowRight from '../../styles/images/arrowRight.png';

const Image = (props) => {
  const {
    display,
    width,
    maxWidth,
    height,
    maxHeight,
    margin,
    border,
    radius,
    shape,
    src,
    size,
    position,
    repeat,
    route,
    flag,
    icon,
    cursor,
  } = props;

  const styles = {
    display,
    width,
    maxWidth,
    height,
    maxHeight,
    margin,
    border,
    radius,
    src,
    size,
    position,
    repeat,
    route,
    flag,
    icon,
    cursor,
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

  if (flag) {
    return (
      <React.Fragment>
        <Flag {...styles}></Flag>
      </React.Fragment>
    );
  }

  if (icon) {
    return (
      <React.Fragment>
        <Icon {...styles}></Icon>
      </React.Fragment>
    );
  }

  // if (route) {
  //   return (
  //     <React.Fragment>
  //       <Route {...styles}></Route>
  //     </React.Fragment>
  //   );
  // }

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
  margin: '',
  border: '',
  radius: '',
  shape: '',
  src: 'https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927',
  size: '',
  position: false,
  repeat: false,
  route: false,
  flag: false,
  icon: false,
  cursor: '',
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
  cursor: ${(props) => props.cursor};
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
  background-repeat: ${(props) => props.repeat};
  background-position: ${(props) => props.position};
  cursor: ${(props) => props.cursor};
`;

const Flag = styled.div`
  width: 50px;
  height: 50px;
  margin: ${(props) => props.margin};
  border-radius: 50%;
  background-image: url('${(props) => props.src}');
  background-size: 'contain';
  background-repeat: no-repeat;
  background-position: center;
`;

const Icon = styled.div`
  width: 40px;
  height: 60px;
  margin: ${(props) => props.margin};
  background-image: url('${(props) => props.src}');
  background-size: 'contain';
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid black;
`;

// //화살표
// const Route = styled.div`
//   width: 15px;
//   height: 15px;
//   background-image: url(${arrowRight});
//   background-size: cover;
//   background-position: center;
// `;
export default Image;
