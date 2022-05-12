import React from 'react';
import { history } from '../redux/configureStore';

import { Header } from '../components/core';
import { Button, Div, Image, Input, Text } from '../components/ui';

const WorldMap = () => {
  return (
    <React.Fragment>
      <Header></Header>
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
        <Text>/</Text>
        <Text>나라별</Text>
      </Div>
      {/* 경로 끝 */}
      <Div
        width="1400px"
        height="700px"
        margin="150px auto"
        border="1px solid black"
        cursor="pointer"
        _onClick={() => {
          history.push('/SubMain2');
        }}
      >
        <Image
          width="100%"
          height="100%"
          size="contain"
          repeat="no-repeat"
          position="center"
          src="https://us.123rf.com/450wm/pavlik18/pavlik181509/pavlik18150900090/45354073-%EC%84%B8%EA%B3%84%EC%A7%80%EB%8F%84.jpg?ver=6"
        />
      </Div>
    </React.Fragment>
  );
};

export default WorldMap;
