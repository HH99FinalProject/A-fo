import React from 'react';
import { history } from '../../redux/configureStore';

import { Button, Div, Image, Input, Text } from '../ui';

const Header = () => {
  return (
    <Div
      spaceBetween
      width="1050px"
      margin="0 auto"
      padding="5px 0px"
      border="1px solid black"
    >
      <Div
        width="100px"
        cursor="pointer"
        _onClick={() => {
          history.replace('/');
        }}
      >
        <Image
          width="35px"
          height="35px"
          size="cover"
          src="https://i.pinimg.com/564x/8d/97/f5/8d97f509fcc73b686f667aef7af09b1d.jpg"
        />
      </Div>
      {/* <Div spaceBetween width="150px" border="1px solid black">
          <Button border="1px solid black">커뮤니티</Button>
          <Button border="1px solid black">로그인</Button>
        </Div> */}
      <Div spaceBetween width="250px" border="1px solid black">
        <Button border="1px solid black">커뮤니티</Button>
        <Button border="1px solid black">마이페이지</Button>
        <Button border="1px solid black">로그아웃</Button>
        <Image
          shape="circle"
          width="35px"
          height="35px"
          src="https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927"
          size="cover"
          position="center"
        />
      </Div>
    </Div>
  );
};

export default Header;
