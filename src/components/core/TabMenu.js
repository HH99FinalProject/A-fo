import React from 'react';

import { Button, Div, Image, Input, Text } from '../ui';

const TabMenu = () => {
  return (
    <Div spaceBetween height="50px" margin="0px auto" border="1px solid black">
      {/* map돌리기 */}
      <Button margin="0px 5px" border="1px solid black">
        비자
      </Button>
      <Button margin="0px 5px" border="1px solid black">
        휴대전화
      </Button>
      <Button margin="0px 5px" border="1px solid black">
        은행 계좌 개설
      </Button>
      <Button margin="0px 5px" border="1px solid black">
        언어
      </Button>
      <Button margin="0px 5px" border="1px solid black">
        시차
      </Button>
      <Button margin="0px 5px" border="1px solid black">
        교통 정보
      </Button>
    </Div>
  );
};

export default TabMenu;
