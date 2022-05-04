import React from 'react';

import { Button, Div, Image, Input, Text } from '../ui';

const TabMenu = () => {
  const infoList = [
    '비자',
    '휴대전화',
    '은행 계좌 개설',
    '언어',
    '시차',
    '교통 정보',
  ];
  return (
    <Div
      row
      height="60px"
      margin="40px auto"
      backgroundColor="#CEC1FF"
      border="1px solid black"
    >
      {/* map돌리기 */}
      {infoList.map((v, i) => {
        return (
          <Button
            key={v + i}
            margin="0px 20px"
            backgroundColor="#CEC1FF"
            border="1px solid black"
            bold
          >
            {v}
          </Button>
        );
      })}
    </Div>
  );
};

export default TabMenu;
