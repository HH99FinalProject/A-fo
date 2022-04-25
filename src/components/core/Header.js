import React from 'react';

import { Div, Image } from '../ui';

const Header = () => {
  return (
    <React.Fragment>
      <Div>
        <Image
          shape="circle"
          width="200px"
          height="200px"
          size="cover"
          position="center"
          src="https://w.namu.la/s/a60874eddb91d70cb5d03f3d8236520d993035a7465207df6afa6709084a992ecf2acb204bdd01bf5b32b634410f33bf9cacd2d1000291925df391b040c01642624e3c66d1832fab9a913823411859b5"
        />
      </Div>
    </React.Fragment>
  );
};

export default Header;
