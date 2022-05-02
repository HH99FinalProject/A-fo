import React from 'react';
import { history } from '../../redux/configureStore';

import { Button, Div, Image, Input, Text } from '../ui';
import GoogleLoginBtn from '../core/Google';

const Login = () => {
  return (
    <React.Fragment>
      <Div width="500px" height="500px" padding="50px">
        <GoogleLoginBtn/>
      </Div>
    </React.Fragment>
  );
};

export default Login;
