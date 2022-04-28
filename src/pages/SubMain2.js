import React from 'react';
import { history } from '../redux/configureStore';

import { Button, Div, Image, Input, Text } from '../components/ui';

const SubMain2 = () => {
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
        <Button
          _onClick={() => {
            history.push('/SubMain1');
          }}
        >
          목적별
        </Button>
        <Text>/</Text>
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
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#89b4ff"
            cursor="pointer"
            _onClick={() => {
              history.push('/Detail');
            }}
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#89b4ff"
            cursor="pointer"
            _onClick={() => {
              history.push('/Detail');
            }}
          >
            <Text>프랑스</Text>
          </Div>
        </Div>

        <Div width="260px" border="1px solid black">
          <Text border="1px solid black">남아메리카</Text>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#ffb5d2"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#ffb5d2"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#ffb5d2"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#ffb5d2"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#ffb5d2"
          >
            <Text>프랑스</Text>
          </Div>
        </Div>

        <Div width="260px" border="1px solid black">
          <Text border="1px solid black">남아메리카</Text>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#faff89"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#faff89"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#faff89"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#faff89"
          >
            <Text>프랑스</Text>
          </Div>
        </Div>

        <Div width="260px" border="1px solid black">
          <Text border="1px solid black">남아메리카</Text>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#89ffd1"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#89ffd1"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#89ffd1"
          >
            <Text>프랑스</Text>
          </Div>
        </Div>

        <Div width="260px" border="1px solid black">
          <Text border="1px solid black">남아메리카</Text>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#ffc389"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#ffc389"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#ffc389"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#ffc389"
          >
            <Text>프랑스</Text>
          </Div>
        </Div>
      </Div> */}
      {/* 바텀시트 */}
      {/* <Div bottomSheet border="1px solid black">
        <Div position="relative" center width="1400px" border="1px solid black">
          <Text border="1px solid black">유학 + 워홀</Text>
          <Button
            compareBtn
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
      <Div start width="1400px" margin=" 10px auto" border="1px solid black">
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
        rowStart
        width="1400px"
        margin="150px auto 0px auto"
        border="1px solid black"
      >
        <Div width="260px" border="1px solid black">
          <Text border="1px solid black">남아메리카</Text>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#89b4ff"
            cursor="pointer"
            _onClick={() => {
              history.push('/SubMain1');
            }}
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#89b4ff"
            cursor="pointer"
            _onClick={() => {
              history.push('/SubMain1');
            }}
          >
            <Text>프랑스</Text>
          </Div>
        </Div>

        <Div width="260px" border="1px solid black">
          <Text border="1px solid black">남아메리카</Text>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#ffb5d2"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#ffb5d2"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#ffb5d2"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#ffb5d2"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#ffb5d2"
          >
            <Text>프랑스</Text>
          </Div>
        </Div>

        <Div width="260px" border="1px solid black">
          <Text border="1px solid black">남아메리카</Text>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#faff89"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#faff89"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#faff89"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#faff89"
          >
            <Text>프랑스</Text>
          </Div>
        </Div>

        <Div width="260px" border="1px solid black">
          <Text border="1px solid black">남아메리카</Text>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#89ffd1"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#89ffd1"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#89ffd1"
          >
            <Text>프랑스</Text>
          </Div>
        </Div>

        <Div width="260px" border="1px solid black">
          <Text border="1px solid black">남아메리카</Text>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#ffc389"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#ffc389"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#ffc389"
          >
            <Text>프랑스</Text>
          </Div>
          <Div
            width="100%"
            height="260px"
            margin="10px 0px"
            border="1px solid black"
            backgroundColor="#ffc389"
          >
            <Text>프랑스</Text>
          </Div>
        </Div>
      </Div>
      {/* 나라별 끝 */}
      <Button is_float>↑</Button>
    </React.Fragment>
  );
};

export default SubMain2;
