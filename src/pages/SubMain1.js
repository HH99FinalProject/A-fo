import React, { useState } from 'react';
import { history } from '../redux/configureStore';

import { CountryCard } from '../components/core';
import { Button, Div, Image, Input, Text } from '../components/ui';

const SubMain1 = () => {
  const [backgroundColor1, setBackgroundColor1] = React.useState('white');
  const [backgroundColor2, setBackgroundColor2] = React.useState('white');
  const [backgroundColor3, setBackgroundColor3] = React.useState('white');
  const [backgroundColor4, setBackgroundColor4] = React.useState('white');

  const Select1 = () => {
    backgroundColor1 === 'white'
      ? setBackgroundColor1('lightgrey')
      : setBackgroundColor1('white');
  };
  const Select2 = () => {
    backgroundColor2 === 'white'
      ? setBackgroundColor2('lightgrey')
      : setBackgroundColor2('white');
  };
  const Select3 = () => {
    backgroundColor3 === 'white'
      ? setBackgroundColor3('lightgrey')
      : setBackgroundColor3('white');
  };
  const Select4 = () => {
    backgroundColor4 === 'white'
      ? setBackgroundColor4('lightgrey')
      : setBackgroundColor4('white');
  };
  return (
    <React.Fragment>
      {/* 목적별 시작 */}

      {/* 경로 시작 */}
      {/* <Div start width="1400px" margin=" 10px auto" border="1px solid black">
        <Button
          _onClick={() => {
            history.push('/');
          }}
        >
          Home
        </Button>
        <Text>/</Text>
        <Text>목적별</Text>
      </Div> */}
      {/* 경로 끝 */}

      {/* <Div
        spaceBetween
        width="1400px"
        margin="200px auto 0px auto"
        border="1px solid black"
      >
        <Div
          center
          width="330px"
          height="400px"
          border="1px solid black"
          cursor="pointer"
          _onClick={() => {
            history.push('/SubMain2');
          }}
        >
          <Text>이민</Text>
        </Div>
        <Div center width="330px" height="400px" border="1px solid black">
          <Text>유학</Text>
        </Div>
        <Div center width="330px" height="400px" border="1px solid black">
          <Text>워홀</Text>
        </Div>
        <Div center width="330px" height="400px" border="1px solid black">
          <Text>취업</Text>
        </Div>
      </Div> */}
      {/* 목적별 끝 */}

      {/* 나라별 시작 */}
      {/* 경로 시작 */}
      <Div start width="1400px" margin=" 10px auto" border="1px solid black">
        <Button
          _onClick={() => {
            history.push('/');
          }}
        >
          Home
        </Button>
        <Text>/</Text>
        <Button
          _onClick={() => {
            history.push('/SubMain2');
          }}
        >
          나라별
        </Button>
        <Text>/</Text>
        <Text>호주</Text>
      </Div>
      {/* 경로 끝 */}
      <Div width="1400px" margin="200px auto 0px auto" border="1px solid black">
        <Text
          width="100%"
          height="100px"
          lineHeight="100px"
          center
          border="1px solid black"
        >
          호주
        </Text>
        <Div spaceBetween width="100%" border="1px solid black">
          <Div
            center
            width="330px"
            height="400px"
            border="1px solid black"
            backgroundColor={backgroundColor1}
            cursor="pointer"
            _onClick={Select1}
          >
            <Text>이민</Text>
          </Div>
          <Div
            center
            width="330px"
            height="400px"
            border="1px solid black"
            backgroundColor={backgroundColor2}
            cursor="pointer"
            _onClick={Select2}
          >
            <Text>유학</Text>
          </Div>
          <Div
            center
            width="330px"
            height="400px"
            border="1px solid black"
            backgroundColor={backgroundColor3}
            cursor="pointer"
            _onClick={Select3}
          >
            <Text>워홀</Text>
          </Div>
          <Div
            center
            width="330px"
            height="400px"
            border="1px solid black"
            backgroundColor={backgroundColor4}
            cursor="pointer"
            _onClick={Select4}
          >
            <Text>취업</Text>
          </Div>
        </Div>
      </Div>

      {/* 바텀시트 */}
      <Div bottomSheet border="1px solid black">
        <Div position="relative" center width="1400px" border="1px solid black">
          <Text border="1px solid black">유학 + 워홀</Text>
          <Button
            absoluteBtn
            border="1px solid black"
            _onClick={() => {
              history.push('/Detail');
            }}
          >
            정보 보러 가기
          </Button>
        </Div>
      </Div>
      {/* 바텀시트 끝 */}
      {/* 나라별 끝 */}
    </React.Fragment>
  );
};

export default SubMain1;
