import React from 'react';
import { history } from '../redux/configureStore';

import { CountryCard } from '../components/core';
import { Button, Div, Image, Input, Text } from '../components/ui';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { RiArrowRightSLine } from 'react-icons/ri';

const SubMain2 = () => {
  return (
    <React.Fragment>
      {/* 목적별 시작 */}
      {/* 경로 시작 */}
      {/* <Div flexStart width="1400px" margin=" 10px auto" border="1px solid black">
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
            history.push('/SubMain1');
          }}
        >
          목적별
        </Button>
        <RiArrowRightSLine size="15" />
        <Text>워홀</Text>
      </Div> */}
      {/* 경로 끝 */}
      {/* <Div
        rowStart
        width="1400px"
        margin="150px auto 0px auto"
        border="1px solid black"
      >
        <Div width="260px" border="1px solid black">
          <Text border="1px solid black">남아메리카</Text>
          //map돌리기
          <CountryCard color={'#ffb5d2'} country={'칠레'} />
          <CountryCard color={'#ffb5d2'} />
          <CountryCard color={'#ffb5d2'} />
          <CountryCard color={'#ffb5d2'} />
        </Div>

        <Div width="260px" border="1px solid black">
          <Text border="1px solid black">북아메리카</Text>
          <CountryCard color={'#faff89'} />
          <CountryCard color={'#faff89'} />
          <CountryCard color={'#faff89'} />
        </Div>

        <Div width="260px" border="1px solid black">
          <Text border="1px solid black">아시아</Text>
          <CountryCard color={'#89ffd1'} />
          <CountryCard color={'#89ffd1'} />
          <CountryCard color={'#89ffd1'} />
          <CountryCard color={'#89ffd1'} />
          <CountryCard color={'#89ffd1'} />
        </Div>

        <Div width="260px" border="1px solid black">
          <Text border="1px solid black">오세아니아</Text>
          <CountryCard color={'#ffc389'} />
          <CountryCard color={'#ffc389'} />
          <CountryCard color={'#ffc389'} />
          <CountryCard color={'#ffc389'} />
        </Div>

        <Div width="260px" border="1px solid black">
          <Text border="1px solid black">유럽</Text>
          <CountryCard color={'#89b4ff'} />
          <CountryCard color={'#89b4ff'} />
        </Div>
      </Div> */}
      {/* 바텀시트 시작 */}
      {/* <Div bottomSheet border="1px solid black">
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
      </Div> */}
      {/* 바텀시트 끝 */}
      {/* 목적별 끝  */}
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
        <Text>나라별</Text>
      </Div>
      {/* 경로 끝 */}
      <Div
        rowStart
        width="1400px"
        margin="150px auto 0px auto"
        border="1px solid black"
      >
        <Div width="260px" border="1px solid black">
          <Text border="1px solid black">남아메리카</Text>
          {/* map돌리기 */}
          <CountryCard color={'#ffb5d2'} country={'칠레'} />
          <CountryCard color={'#ffb5d2'} />
          <CountryCard color={'#ffb5d2'} />
          <CountryCard color={'#ffb5d2'} />
        </Div>

        <Div width="260px" border="1px solid black">
          <Text border="1px solid black">북아메리카</Text>
          {/* map돌리기 */}
          <CountryCard color={'#faff89'} />
          <CountryCard color={'#faff89'} />
          <CountryCard color={'#faff89'} />
        </Div>

        <Div width="260px" border="1px solid black">
          <Text border="1px solid black">아시아</Text>
          {/* map돌리기 */}
          <CountryCard color={'#89ffd1'} />
          <CountryCard color={'#89ffd1'} />
          <CountryCard color={'#89ffd1'} />
          <CountryCard color={'#89ffd1'} />
          <CountryCard color={'#89ffd1'} />
        </Div>

        <Div width="260px" border="1px solid black">
          <Text border="1px solid black">오세아니아</Text>
          {/* map돌리기 */}
          <CountryCard color={'#ffc389'} />
          <CountryCard color={'#ffc389'} />
          <CountryCard color={'#ffc389'} />
          <CountryCard color={'#ffc389'} />
        </Div>

        <Div width="260px" border="1px solid black">
          <Text border="1px solid black">유럽</Text>
          {/* map돌리기 */}
          <CountryCard color={'#89b4ff'} />
          <CountryCard color={'#89b4ff'} />
        </Div>
      </Div>
      {/* 나라별 끝 */};
      <Button is_float>
        <MdOutlineKeyboardArrowUp />
      </Button>
    </React.Fragment>
  );
};

export default SubMain2;
