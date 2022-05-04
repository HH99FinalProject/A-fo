import React from 'react';
import { history } from '../redux/configureStore';

import { Button, Div, Image, Input, Text } from '../components/ui';

const Main = () => {
  return (
    <Div width="1400px" margin="0 auto" border="1px solid black">
      <Div center width="100%" height="250px" border="1px solid black">
        <Text
          height="120px"
          lineHeight="55px"
          center
          bold
          size="30px"
          border="1px solid black"
        >
          해외 정보의 모든 것<br />
          에이포에서 확인하기
        </Text>
      </Div>
      <Div spaceBetween width="100%" border="1px solid black">
        <Div
          center
          border="1px solid black"
          width="50%"
          height="550px"
          backgroundColor="#CEC1FF"
          cursor="pointer"
          _onClick={() => {
            history.push('/SubMain1');
          }}
        >
          <Text bold margin="10px 0px" backgroundColor="#CEC1FF" size="24px">
            어떤 목적으로 정보를 찾고 계세요?
          </Text>
          <Text margin="10px 0px" backgroundColor="#CEC1FF">
            이민 / 유학 / 워홀 / 취업
          </Text>
        </Div>
        <Div
          center
          border="1px solid black"
          width="50%"
          height="550px"
          backgroundColor="#CEC1FF"
          cursor="pointer"
          _onClick={() => {
            history.push('/SubMain2');
          }}
        >
          <Text bold margin="10px 0px" backgroundColor="#CEC1FF" size="24px">
            어느 나라 정보를 찾고 계세요?
          </Text>
          <Text margin="10px 0px" backgroundColor="#CEC1FF">
            남아메리카 / 북아메리카 / 아시아 / 오세아니아 / 유럽
          </Text>
        </Div>
      </Div>
    </Div>
  );
};

export default Main;
