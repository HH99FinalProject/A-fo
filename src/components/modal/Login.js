import React from 'react';
import { history } from '../../redux/configureStore';

import { Button, Div, Image, Input, Text } from '../ui';

const Login = () => {
  return (
    <React.Fragment>
      <Div width="500px" height="500px" padding="50px">
        <Text>로그인 모달입니다.</Text>
      </Div>
    </React.Fragment>
  );
};

export default Login;
