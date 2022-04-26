import React from 'react';
import { history } from '../redux/configureStore';

import { Button, Div, Image, Input, Text } from '../components/ui';

const Main = () => {
  return (
    <React.Fragment>
      <Div spaceBetween width="60%" margin="150px auto 0px auto">
        <Div
          border="1px solid black"
          width="48%"
          height="500px"
          cursor="pointer"
          _onClick={() => {
            history.push('/SubMain1');
          }}
        >
          목적별
        </Div>
        <Div border="1px solid black" width="48%" height="500px">
          나라별
        </Div>
      </Div>
    </React.Fragment>
  );
};

export default Main;
