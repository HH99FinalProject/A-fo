import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { history } from '../../redux/configureStore';
import { logoutReducer } from '../../redux/modules/login';

import Modal from '../../shared/Modal';
import Login from '../modal/Login';

import styled from 'styled-components';
import { Button, Div, Image, Text } from '../ui';
import logo from '../../styles/images/logo.png';
import profile from '../../styles/images/profile.png';
import survey from '../../styles/images/survey.png';

const Header = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login.isLogin);
  const [openModal, setOpenModal] = React.useState(false);
  const main = window.location.pathname === '/';

  if (main) {
    return (
      <Div
        center
        width="100%"
        height="80px"
        backgroundColor="white"
        borderBottom="1px solid #0031DE"
      >
        <Div spaceBetween width="1400px" margin="0 auto">
          <Div
            spaceBetween
            width="auto"
            height="50px"
            margin="0px 0px 0px -10px"
            cursor="pointer"
            _onClick={() => {
              history.replace('/');
            }}
          >
            <Image
              width="100px"
              height="35px"
              size="contain"
              repeat="no-repeat"
              position="center"
              src={logo}
            />
          </Div>

          {/* 로그인 전 */}
          {!isLogin && (
            <Div spaceBetween width="140px" height="50px" lineHeight="50px">
              <Button
                height="50px"
                bold
                color="#0031DE"
                backgroundColor="white"
                _onClick={() => {
                  history.push('/Board');
                }}
              >
                커뮤니티
              </Button>
              <Button
                height="50px"
                bold
                color="#0031DE"
                backgroundColor="white"
                _onClick={() => {
                  setOpenModal(true);
                }}
              >
                로그인
              </Button>
            </Div>
          )}
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
          {isLogin && (
            // <Div spaceBetween width="300px" height="50px" lineHeight="50px">
            <Div spaceBetween width="200px" height="50px" lineHeight="50px">
              <Button
                height="50px"
                bold
                color="#0031DE"
                backgroundColor="white"
                _onClick={() => {
                  history.push('/Board');
                }}
              >
                커뮤니티
              </Button>
              {/* <Button
                height="50px"
                bold
                color="#0031DE"
                backgroundColor="white"
                _onClick={() => {
                  history.push('/MyPage');
                }}
              >
                마이페이지
              </Button> */}
              <Button
                height="50px"
                bold
                color="#0031DE"
                backgroundColor="white"
                _onClick={() => {
                  dispatch(logoutReducer());
                  history.replace('/');
                }}
              >
                로그아웃
              </Button>
              <Image
                shape="circle"
                width="35px"
                height="35px"
                src={profile}
                size="cover"
                position="center"
                border="1px solid #0031DE"
              />
            </Div>
          )}
          {/* 로그인 후 */}
        </Div>
        <Link target="_blank" href="https://forms.gle/HQvmVAaozLWNxhnY9">
          <Image
            width="40px"
            height="40px"
            size="cover"
            repeat="no-repeat"
            position="center"
            src={survey}
          />
          설문하고 커피받기!
        </Link>
      </Div>
    );
  } else {
    return (
      <Div center width="100%" height="80px" borderBottom="1px solid #0031DE">
        <Div spaceBetween width="1400px" margin="0 auto">
          <Div
            spaceBetween
            width="100px"
            height="50px"
            margin="0px 0px 0px -10px"
            padding="0px 10px"
            cursor="pointer"
            _onClick={() => {
              history.replace('/');
            }}
          >
            <Image
              width="100px"
              height="35px"
              size="contain"
              repeat="no-repeat"
              position="center"
              src={logo}
            />
          </Div>

          {/* 로그인 전 */}
          {!isLogin && (
            <Div spaceBetween width="140px" height="50px" lineHeight="50px">
              <Button
                height="50px"
                color="#0031DE"
                bold
                _onClick={() => {
                  history.push('/Board');
                }}
              >
                커뮤니티
              </Button>
              <Button
                height="50px"
                color="#0031DE"
                bold
                _onClick={() => {
                  setOpenModal(true);
                }}
              >
                로그인
              </Button>
            </Div>
          )}
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
          {isLogin && (
            // <Div spaceBetween width="300px" height="50px" lineHeight="50px">
            <Div spaceBetween width="200px" height="50px" lineHeight="50px">
              <Button
                height="50px"
                color="#0031DE"
                bold
                _onClick={() => {
                  history.push('/Board');
                }}
              >
                커뮤니티
              </Button>
              {/* <Button
                height="50px"
                color="#0031DE"
                bold
                _onClick={() => {
                  history.push('/MyPage');
                }}
              >
                마이페이지
              </Button> */}
              <Button
                height="50px"
                color="#0031DE"
                bold
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
                src={profile}
                size="cover"
                position="center"
                border="1px solid #0031DE"
              />
            </Div>
          )}
          {/* 로그인 후 */}
        </Div>
        <Link target="_blank" href="https://forms.gle/HQvmVAaozLWNxhnY9">
          <Image
            width="40px"
            height="40px"
            size="cover"
            repeat="no-repeat"
            position="center"
            src={survey}
          />
          설문하고 커피받기!
        </Link>
      </Div>
    );
  }
};
export default Header;

const Link = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 79px;
  border-left: 2px solid #0031de;
  background-color: #dcffaf;
  font-weight: bold;
  font-size: 15px;
  color: #0031de;
`;
