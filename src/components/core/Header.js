import React from 'react';
import { history } from '../../redux/configureStore';

import Modal from '../../shared/Modal';
import Login from '../modal/Login';
import { Button, Div, Image, Input, Text } from '../ui';
import { GrNote } from 'react-icons/gr';

const Header = () => {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <Div center width="100%" height="80px" borderBottom="1px solid black">
      <Div spaceBetween width="1400px" margin="0 auto" border="1px solid black">
        <Div
          spaceBetween
          width="auto"
          height="50px"
          padding="0px 10px"
          border="1px solid black"
          cursor="pointer"
          _onClick={() => {
            history.replace('/');
          }}
        >
          <Text bold size="30px" margin="0px 5px 0px 0px">
            A-fo
          </Text>
          <GrNote size="25px" />
          {/* <Image
          width="35px"
          height="35px"
          size="cover"
          src="https://i.pinimg.com/564x/8d/97/f5/8d97f509fcc73b686f667aef7af09b1d.jpg"
        /> */}
        </Div>

        {/* 로그인 전 */}
        <Div
          spaceBetween
          width="160px"
          height="50px"
          lineHeight="50px"
          border="1px solid black"
        >
          <Button
            height="50px"
            bold
            border="1px solid black"
            _onClick={() => {
              history.push('/Board');
            }}
          >
            Community
          </Button>
          <Button
            height="50px"
            bold
            border="1px solid black"
            _onClick={() => {
              setOpenModal(true);
            }}
          >
            Sign in
          </Button>
        </Div>
        <Modal
          open={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
        >
          <Login />
        </Modal>
        {/* 로그인 전 */}

        {/* 로그인 후 */}
        {/* <Div
          spaceBetween
          width="300px"
          height="50px"
          lineHeight="50px"
          border="1px solid black"
        >
          <Button
            height="50px"
            bold
            border="1px solid black"
            _onClick={() => {
              history.push('/Board');
            }}
          >
            Community
          </Button>
          <Button
            height="50px"
            bold
            border="1px solid black"
            _onClick={() => {
              history.push('/MyPage');
            }}
          >
            My page
          </Button>
          <Button
            height="50px"
            bold
            border="1px solid black"
            _onClick={() => {
              history.replace('/');
            }}
          >
            Sign out
          </Button>
          <Image
            shape="circle"
            width="35px"
            height="35px"
            src="https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927"
            size="cover"
            position="center"
          />
        </Div> */}
        {/* 로그인 후 */}
      </Div>
    </Div>
  );
};

export default Header;
