import React from 'react';
import { history } from '../../redux/configureStore';
import styled from 'styled-components';
import { GrNote } from 'react-icons/gr';

import { Button, Div, Image, Input, Text } from '../ui';
import GoogleLoginBtn from '../core/Google';
import logo from '../../styles/images/logo.png';

const Login = () => {
  //카카오
  const REST_API_KEY = 'ebb64769e9ae562700e77df6554c840d';
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <React.Fragment>
      <Div width="500px" height="500px" padding="80px 50px">
        <Text center size="30px" margin="0 0 50px 0" bold  letterSpacing="0.1em">
          로그인
        </Text>
        <Div row center margin="0 0 20px 0">
          <Image
            width="200px"
            height="70px"
            size="contain"
            repeat="no-repeat"
            position="center"
            src={logo}
          />
        </Div>
        <Text center margin="40px" color="black" size="16px">
          커뮤니티에서 더 다양한 정보를 확인하세요.
        </Text>
        <Button
          width="400px"
          height="60px"
          backgroundColor="#FFD43B"
          border="1px solid #000"
          radius="40px"
          size="18px"
          margin="20px 0px"
        >
          <a href={KAKAO_AUTH_URL} style={{fontWeight: "bold"}}>카카오로 1초만에 시작하기</a>
        </Button>
      </Div>
    </React.Fragment>
  );
};

export default Login;

const GoogleBtn = styled.div`
  width: 185px;
  margin: 0 auto;
`;
