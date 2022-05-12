import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { addScroll } from '../../redux/modules/scroll';
import { Button, Div, Image, Input, Text } from '../ui';

const TabMenu = () => {
  const dispatch = useDispatch();
  const infoList = ['비자', '휴대전화', '은행', '언어', '시차', '교통'];

  const continentList = ['오세아니아', '유럽', '북아메리카', '아시아'];

  const SubMain2 = window.location.pathname === '/SubMain2';

  const [scroll, setScroll] = React.useState(false);

  const moveScroll = () => {
    setScroll(true);
    dispatch(addScroll(scroll));
  };

  return (
    <Div
      row
      width="100%"
      height="60px"
      margin="60px auto 30px auto"
      backgroundColor="#D2DFFF"
      border="1px solid black"
    >
      {SubMain2 && (
        <>
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
              window.scrollTo({ top: 850, left: 0, behavior: 'smooth' });
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
        </>
      )}

      {!SubMain2 &&
        infoList.map((v, i) => {
          return v === '비자' ? (
            <PurposeBtn
              key={v + i}
              onClick={() => {
                moveScroll();
              }}
            >
              {v}
            </PurposeBtn>
          ) : v === '휴대전화' ? (
            <PurposeBtn key={v + i} onClick={() => {}}>
              {v}
            </PurposeBtn>
          ) : v === '은행' ? (
            <PurposeBtn key={v + i} onClick={() => {}}>
              {v}
            </PurposeBtn>
          ) : v === '언어' ? (
            <PurposeBtn key={v + i} onClick={() => {}}>
              {v}
            </PurposeBtn>
          ) : v === '시차' ? (
            <PurposeBtn key={v + i} onClick={() => {}}>
              {v}
            </PurposeBtn>
          ) : (
            // 마지막 교통
            <PurposeBtn key={v + i} onClick={() => {}}>
              {v}
            </PurposeBtn>
          );
        })}
    </Div>
  );
};

export default TabMenu;

const ContinentBtn = styled.button`
  margin: 0px 20px;
  background: #d2dfff;
  border: 1px solid black;
  font-weight: bold;
`;

const PurposeBtn = styled.button`
  margin: 0px 20px;
  background: #d2dfff;
  border: 1px solid black;
  font-weight: bold;
`;
