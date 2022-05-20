import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Button, Div, Image, Input, Text } from '../ui';

const TabMenu = (props) => {
  const dispatch = useDispatch();
  const infoList = ['비자', '은행', '시차', '교통', '언어', '통신'];

  const SubMain2 = window.location.pathname === '/SubMain2';

  if (SubMain2) {
    return (
      <Div
        row
        width="1400px"
        height="40px"
        margin="50px auto 30px auto"
        backgroundColor="#B6CBFF"
      >
        <ContinentBtn
          onClick={() => {
            window.scrollTo({ top: 100, left: 0, behavior: 'smooth' });
          }}
        >
          오세아니아
        </ContinentBtn>
        <ContinentBtn
          onClick={() => {
            window.scrollTo({ top: 450, left: 0, behavior: 'smooth' });
          }}
        >
          유럽
        </ContinentBtn>
        <ContinentBtn
          onClick={() => {
            window.scrollTo({ top: 900, left: 0, behavior: 'smooth' });
          }}
        >
          북아메리카
        </ContinentBtn>
        <ContinentBtn
          onClick={() => {
            window.scrollTo({ top: 1400, left: 0, behavior: 'smooth' });
          }}
        >
          아시아
        </ContinentBtn>
      </Div>
    );
  } else {
    return (
      // <Div
      //   row
      //   width="100%"
      //   height="60px"
      //   margin="60px auto 30px auto"
      //   backgroundColor="#D2DFFF"
      //   border="1px solid #0031DE"
      // >
      //   {infoList.map((v, i) => {
      //     return v === '비자' ? (
      //       <PurposeBtn key={v + i} id="1">
      //         {v}
      //       </PurposeBtn>
      //     ) : v === '은행' ? (
      //       <PurposeBtn key={v + i} id="2" onClick={() => {}}>
      //         {v}
      //       </PurposeBtn>
      //     ) : v === '시차' ? (
      //       <PurposeBtn key={v + i} id="3" onClick={() => {}}>
      //         {v}
      //       </PurposeBtn>
      //     ) : v === '교통' ? (
      //       <PurposeBtn key={v + i} id="4" onClick={() => {}}>
      //         {v}
      //       </PurposeBtn>
      //     ) : v === '언어' ? (
      //       <PurposeBtn key={v + i} id="5" onClick={() => {}}>
      //         {v}
      //       </PurposeBtn>
      //     ) : (
      //       // 마지막 통신
      //       <PurposeBtn key={v + i} id="6" onClick={() => {}}>
      //         {v}
      //       </PurposeBtn>
      //     );
      //   })}
      // </Div>
      <Div
        row
        width="100%"
        height="60px"
        margin="60px auto 30px auto"
        backgroundColor="#D2DFFF"
        border="1px solid #0031DE"
      >
        {infoList.map((v, i) => {
          return (
            <PurposeBtn key={v + i} onClick={props.refClick}>
              {v}
            </PurposeBtn>
          );
        })}
      </Div>
    );
  }
};

export default TabMenu;

const ContinentBtn = styled.button`
  margin: 0px 20px;
  background: #b6cbff;
  margin: 0px 50px;
  font-size: 15px;
  font-weight: bold;
  color: #3a3a3a;
`;

const PurposeBtn = styled.button`
  margin: 0px 20px;
  background: #d2dfff;
  margin: 0px 50px;
  font-size: 18px;
  font-weight: bold;
  color: #3a3a3a;
`;
