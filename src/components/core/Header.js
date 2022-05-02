import React from 'react';
import { history } from '../../redux/configureStore';

import Modal from '../../shared/Modal';
import Login from '../modal/Login';
import { Button, Div, Image, Input, Text } from '../ui';

const Header = () => {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <Div
      spaceBetween
      width="1400px"
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
      {/* 로그인 전 */}
      {/* <Div spaceBetween width="120px" border="1px solid black">
        <Button
          border="1px solid black"
          _onClick={() => {
            history.push('/Board');
          }}
        >
          커뮤니티
        </Button>
        <Button
          border="1px solid black"
          _onClick={() => {
            setOpenModal(true);
          }}
        >
          로그인
        </Button>
      </Div>
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      >
        <Login />
      </Modal> */}
      {/* 로그인 전 */}

      {/* 로그인 후 */}
      <Div spaceBetween width="250px" border="1px solid black">
        <Button
          border="1px solid black"
          _onClick={() => {
            history.push('/Board');
          }}
        >
          커뮤니티
        </Button>
        <Button
          border="1px solid black"
          _onClick={() => {
            history.push('/MyPage');
          }}
        >
          마이페이지
        </Button>
        <Button
          border="1px solid black"
          _onClick={() => {
            history.replace('/');
          }}
        >
          로그아웃
        </Button>
        <Image
          shape="circle"
          width="35px"
          height="35px"
          src="https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927"
          size="cover"
          position="center"
        />
      </Div>
      {/* 로그인 후 */}
    </Div>
  );
};

export default Header;
