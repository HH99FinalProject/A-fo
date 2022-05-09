import React from 'react';

import { Button, Div, Image, Input, Text } from '../ui';

const TabMenu = () => {
  const infoList = ['비자', '휴대전화', '은행', '언어', '시차', '교통'];

  const continentList = [
    '남아메리카',
    '북아메리카',
    '아시아',
    '오세아니아',
    '유럽',
  ];

  const SubMain2 = window.location.pathname === '/SubMain2';

  return (
    <Div
      row
      width="100%"
      height="60px"
      margin="60px auto 30px auto"
      backgroundColor="#D2DFFF"
      border="1px solid black"
    >
      {SubMain2 &&
        continentList.map((v, i) => {
          return (
            <Button
              key={v + i}
              margin="0px 20px"
              backgroundColor="#D2DFFF"
              border="1px solid black"
              bold
            >
              {v}
            </Button>
          );
        })}

      {!SubMain2 &&
        infoList.map((v, i) => {
          return (
            v === '비자' ?
            <Button
              key={v + i}
              margin="0px 20px"
              backgroundColor="#D2DFFF"
              border="1px solid black"
              bold
              _onClick = {() => { /* ref.scrollIntoView() */ }}
            >
              {v}
            </Button>
            : v === '휴대전화' ?
            <Button
              key={v + i}
              margin="0px 20px"
              backgroundColor="#D2DFFF"
              border="1px solid black"
              bold
            >
              {v}
            </Button>
            : v === '은행' ?
            <Button
              key={v + i}
              margin="0px 20px"
              backgroundColor="#D2DFFF"
              border="1px solid black"
              bold
            >
              {v}
            </Button>
            : v === '언어' ?
            <Button
              key={v + i}
              margin="0px 20px"
              backgroundColor="#D2DFFF"
              border="1px solid black"
              bold
            >
              {v}
            </Button>
            : v === '시차' ?
            <Button
              key={v + i}
              margin="0px 20px"
              backgroundColor="#D2DFFF"
              border="1px solid black"
              bold
            >
              {v}
            </Button>
            :  // 마지막 교통
            <Button
              key={v + i}
              margin="0px 20px"
              backgroundColor="#D2DFFF"
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
