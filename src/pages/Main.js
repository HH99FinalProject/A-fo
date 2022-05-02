import React from 'react';
import { history } from '../redux/configureStore';

import { Button, Div, Image, Input, Text } from '../components/ui';

const Main = () => {
  return (
    <Div width="1400px" margin="0 auto" border="1px solid black">
      <Div center width="100%" margin="50px 0px" border="1px solid black">
        <Text
          lineHeight="35px"
          center
          bold
          size="24px"
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
          cursor="pointer"
          _onClick={() => {
            history.push('/SubMain1');
          }}
        >
          <Text bold margin="10px 0px" size="20px">
            어떤 목적으로 정보를 찾고 계세요?
          </Text>
          <Text margin="10px 0px">이민 / 유학 / 워홀 / 취업</Text>
        </Div>
        <Div
          center
          border="1px solid black"
          width="50%"
          height="550px"
          cursor="pointer"
          _onClick={() => {
            history.push('/SubMain2');
          }}
        >
          <Text bold margin="10px 0px" size="20px">
            어느 나라 정보를 찾고 계세요?
          </Text>
          <Text margin="10px 0px">
            남아메리카 / 북아메리카 / 아시아 / 오세아니아 / 유럽
          </Text>
        </Div>
      </Div>
    </Div>
  );
};

export default Main;
