import React from 'react';
import { history } from '../../redux/configureStore';

import { Button, Div, Image, Input, Text } from '../ui';

const TargetCard = () => {
  return (
    <React.Fragment>
      <Div spaceBetween width="60%" margin="150px auto 0px auto">
        <Div
          border="1px solid black"
          width="22%"
          height="300px"
          cursor="pointer"
          _onClick={() => {
            history.push('/SubMain2');
          }}
        >
          워홀
        </Div>
      </Div>
    </React.Fragment>
  );
};

export default TargetCard;
