import React from 'react';
import { history } from '../../redux/configureStore';
import styled from 'styled-components';
import { GrNote } from 'react-icons/gr';

import { Button, Div, Image, Input, Text } from '../ui';
import GoogleLoginBtn from '../core/Google';

const Login = () => {

  return (
    <React.Fragment>
      <Div width="500px" height="500px" padding="50px">
        <Text center size="30px" margin="0 0 80px 0">로그인</Text>
        <Div row center margin="0 0 20px 0">
          <Text size="72px" bold margin="0 10px 0 0">A-fo</Text>
          <GrNote size="55px"/>
        </Div>
        <Text center margin="0 0 40px 0" color="#2f0190">커뮤니티에서 더 다양한 정보를 확인하세요.</Text>
        <GoogleBtn>
          <GoogleLoginBtn className="aa"/>
        </GoogleBtn>
      </Div>
    </React.Fragment>
  );
};


export default Login;

const GoogleBtn = styled.div`
  width: 184.5px;
  margin: 0 auto;
`;
