import React from 'react';

import { Div, Text, Image } from '../components/ui';

const Board = (props) => {
  return (
    <React.Fragment>
      <Div width="1050px" margin="0 auto" backgroundColor="yellow">
        게시판입니다
        <Div display="flex">
          <Image shape="circle" width="50px" height="50px" src="https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927"  />
          <Div>
            <Text>닉네임</Text>
            <Text>아이디</Text>
          </Div>
        </Div>
      </Div>
    </React.Fragment>
  );
};

export default Board;


