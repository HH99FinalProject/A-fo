import React from 'react';
import { history } from '../redux/configureStore';

import { TargetCard } from '../components/core';
import { Button, Div, Image, Input, Text } from '../components/ui';

const SubMain1 = () => {
  return (
    <React.Fragment>
      <Div spaceBetween width="60%" margin="150px auto 0px auto">
        {}
        <TargetCard />
      </Div>
    </React.Fragment>
  );
};

export default SubMain1;
