import React from 'react';
import { history } from '../redux/configureStore';

import { Search, Info } from '../components/core';
import { Button, Div, Image, Input, Text } from '../components/ui';

const Detail = () => {
  return (
    <React.Fragment>
      {/* 목적별 경로 시작 */}
      {/* <Div start width="1400px" margin=" 10px auto" border="1px solid black">
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
            history.push('/SubMain1');
          }}
        >
          목적별
        </Button>
        <Text>/</Text>
        <Button
          _onClick={() => {
            history.push('/SubMain2');
          }}
        >
          워홀
        </Button>
        <Text>/</Text>
        <Text>정보</Text>
      </Div> */}
      {/* 목적별 경로 끝 */}

      {/* 나라별 경로 시작 */}
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
            history.push('/WorldMap');
          }}
        >
          나라별
        </Button>
        <Text>/</Text>
        <Button
          _onClick={() => {
            history.push('/SubMain1');
          }}
        >
          호주
        </Button>
        <Text>/</Text>
        <Text>정보</Text>
      </Div>
      {/* 나라별 경로 끝 */}

      <Div width="1400px" margin="100px auto 0px auto" border="1px solid black">
        <Search />
        <Div row margin="50px 0px" border="1px solid black">
          {/* 목적별 시작 */}
          <Info />
          <Info />
          <Info />
          <Info />

          {/* 목적별 끝 */}
          {/* 나라별 시작 */}
          {/* <Info />
          <Info /> */}
          {/* 나라별 끝 */}
        </Div>
      </Div>

      {/* 북마크 시작 */}
      <Div bookmark>
        <Text bold>북마크 현황</Text>

        {/* 목적별 시작 */}
        {/* <Div width="100%" margin="5px 0px" border="1px solid black">
          <Text margin="10px" size="20px" bold>
            호주
          </Text>
          <Text margin="10px">비자</Text>
          <Text margin="10px">대사관</Text>
        </Div>

        <Div width="100%" margin="5px 0px" border="1px solid black">
          <Text margin="10px" size="20px" bold>
            뉴질랜드
          </Text>
          <Text margin="10px">비자</Text>
          <Text margin="10px">교통</Text>
        </Div>

        <Div width="100%" margin="5px 0px" border="1px solid black">
          <Text margin="10px" size="20px" bold>
            캐나다
          </Text>
          <Text margin="10px">대사관</Text>
        </Div> */}
        {/* 목적별 끝 */}

        {/* 나라별 시작 */}
        <Div width="100%" margin="5px 0px" border="1px solid black">
          <Text margin="10px" size="20px" bold>
            워홀
          </Text>
          <Text margin="10px">비자</Text>
          <Text margin="10px">대사관</Text>
        </Div>

        <Div width="100%" margin="5px 0px" border="1px solid black">
          <Text margin="10px" size="20px" bold>
            유학
          </Text>
          <Text margin="10px">비자</Text>
          <Text margin="10px">교통</Text>
        </Div>
        {/* 나라별 끝 */}

        <Button>완료</Button>
      </Div>
      {/* 북마크 끝 */}
      {/* 상단으로 가기 시작 */}
      <Button is_float>↑</Button>
      {/* 상단으로 가기 끝 */}
    </React.Fragment>
  );
};

export default Detail;
