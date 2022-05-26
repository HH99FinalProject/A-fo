import React from 'react';

import styled from 'styled-components';
import { Button, Div, Image, Input, Text } from '../ui';
import logo from '../../styles/images/logo.png';

const Footer = () => {
  return (
    <Div width="100%" height="150px" borderTop="1px solid blue">
      <Div
        row
        width="1400px"
        height="100%"
        margin="0px auto"
        padding="20px 0px"
      >
        <Div width="30%" height="100%">
          <Image
            width="100px"
            height="50px"
            src={logo}
            size="contain"
            repeat="no-repeat"
            positin="center"
          />
          <Text margin="10px 0px" bold>
            Copyright @2022 A-fo.All rights reserved.
          </Text>
        </Div>
        <Div
          display="flex"
          felxDirection="row"
          alignItems="start"
          justifyContent="start"
          width="70%"
          height="100%"
        >
          <Text size="25px" bold>
            Developer
          </Text>
          <Text size="25px" bold margin=" 0px 100px ">
            Designer
          </Text>
        </Div>
      </Div>
    </Div>
  );
};

export default Footer;
