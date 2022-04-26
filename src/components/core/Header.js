import React from 'react';

import { Button, Div, Image, Input, Text } from '../ui';

const Header = () => {
  return (
    <React.Fragment>
      <Div spaceBetween border="1px solid black">
        <Div>
          <Image
            width="50px"
            height="50px"
            size="cover"
            src="https://i.pinimg.com/564x/8d/97/f5/8d97f509fcc73b686f667aef7af09b1d.jpg"
          />
        </Div>
        <Div>
          <Button border="1px solid black">커뮤니티</Button>
          <Button border="1px solid black">Login</Button>
        </Div>
      </Div>
    </React.Fragment>
  );
};

export default Header;
