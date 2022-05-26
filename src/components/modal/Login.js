import React from 'react';
import styled from 'styled-components';

import { Div, Image, Text } from '../ui';
import logo from '../../styles/images/logo.png';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  // 카카오
  const REST_API_KEY = 'ebb64769e9ae562700e77df6554c840d';
  const REDIRECT_URI = 'https://a-fo.kr/oauth/kakao/callback';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  // 구글
  const GOOGLE_CLIENT_ID= '401350303064-ff7qfe7m9fh9n3s7l4qsucn339itheqj.apps.googleusercontent.com';
  const GOOGLE_REDIRECT_URL = 'https://a-fo.kr/oauth/google/callback/';
  const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URL}&scope=https://www.googleapis.com/auth/userinfo.profile&response_type=code`;
  return (
    <React.Fragment>
      <Div width="500px" height="500px" padding="50px">
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
        <Div
          BGHover="#ffe43B"
          row
          width="400px"
          height="60px"
          backgroundColor="#FFD43B"
          borderRadius="40px"
          border="1px solid #000"
          size="18px"
          margin="20px 0px"
        >
          <RiKakaoTalkFill size={45} />
          <KakaoA href={KAKAO_AUTH_URL}>카카오로 1초만에 시작하기</KakaoA>
        </Div>
        <Div
          BGHover="#eee"
          row
          width="400px"
          height="60px"
          borderRadius="40px"
          border="1px solid #000"
          size="18px"
          margin="20px 0px"
        >
          <FcGoogle size={40} />
          <GoogleA href={GOOGLE_AUTH_URL}>구글로 1초만에 시작하기</GoogleA>
        </Div>  
      </Div>
    </React.Fragment>
  );
};

export default Login;

const KakaoA = styled.a`
  font-weight: 700;
  margin-left: 10px;
  font-size: 18px;
`;

const GoogleA = styled.a`
  font-weight: 700;
  margin-left: 10px;
  font-size: 18px;
`;
