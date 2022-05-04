import React, { useState } from 'react';
import { history } from '../redux/configureStore';

import { TargetCard } from '../components/core';
import { Button, Div, Image, Input, Text } from '../components/ui';
import { RiArrowRightSLine } from 'react-icons/ri';

const SubMain1 = () => {
  const targetList = ['이민', '유학', '워홀', '취업'];

  return (
    <React.Fragment>
      {/* 목적별 시작 */}

      {/* 경로 시작 */}
      {/* <Div
        flexStart
        width="1400px"
        margin=" 10px auto"
        border="1px solid black"
      >
        <Button
          _onClick={() => {
            history.push('/');
          }}
        >
          Home
        </Button>
        <RiArrowRightSLine size="15" />
        <Text>목적별</Text>
      </Div> */}
      {/* 경로 끝 */}

      {/* 목적 선택 시작 */}
      {/* <Div
        spaceBetween
        width="1400px"
        margin="200px auto 0px auto"
        border="1px solid black"
      >
        {targetList.map((v, i) => {
          return <TargetCard key={v + i} text={v} />;
        })}
      </Div> */}
      {/* 목적 선택 끝 */}
      {/* 목적별 끝 */}

      {/* 나라별 시작 */}
      {/* 경로 시작 */}
      <Div
        flexStart
        width="1400px"
        margin=" 10px auto"
        border="1px solid black"
      >
        <Button
          _onClick={() => {
            history.push('/');
          }}
        >
          Home
        </Button>
        <RiArrowRightSLine size="15" />
        <Button
          _onClick={() => {
            history.push('/SubMain2');
          }}
        >
          나라별
        </Button>
        <RiArrowRightSLine size="15" />
        <Text>호주</Text>
      </Div>
      {/* 경로 끝 */}

      {/* 목적 선택 시작 */}
      <Div width="1400px" margin="150px auto 0px auto" border="1px solid black">
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
          {targetList.map((v, i) => {
            return <TargetCard key={v + i} text={v} />;
          })}
        </Div>
      </Div>
      {/* 목적 선택 끝 */}

      {/* 바텀시트 */}
      <Div bottomSheet borderTop="1px solid black">
        <Div
          center
          position="relative"
          width="1400px"
          height="50px"
          border="1px solid black"
        >
          <Text border="1px solid black">유학 + 워홀</Text>
          <Button
            bottomSheetBtn
            height="50px"
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
