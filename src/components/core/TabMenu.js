import React from 'react';

import styled from 'styled-components';
import { Button, Div } from '../ui';

const TabMenu = (props) => {
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
        colorHover="#fff"
      >
        <ContinentBtn
          onClick={() => {
            window.scrollTo({ top: 400, left: 0, behavior: 'smooth' });
          }}
        >
          오세아니아
        </ContinentBtn>
        <ContinentBtn
          onClick={() => {
            window.scrollTo({ top: 750, left: 0, behavior: 'smooth' });
          }}
        >
          유럽
        </ContinentBtn>
        <ContinentBtn
          onClick={() => {
            window.scrollTo({ top: 1200, left: 0, behavior: 'smooth' });
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
      <Div
        row
        width="1400px"
        height="40px"
        margin="0px auto"
        backgroundColor="#B6CBFF"
        colorHover="#fff"
      >
        {infoList.map((v, i) => {
          return (
            <Button
              key={v + i}
              width="100px"
              margin="0px 70px"
              backgroundColor="#b6cbff"
              size="15px"
              bold
              color="#3a3a3a"
              colorHover="#DCFFAF"
              _onClick={() => {
                props.refClick(i);
              }}
            >
              {v}
            </Button>
          );
        })}
      </Div>
    );
  }
};

export default TabMenu;

const ContinentBtn = styled.button`
  width: 100px;
  margin: 0px 100px;
  background: #b6cbff;
  font-size: 15px;
  font-weight: bold;
  color: #3a3a3a;
  &:hover {
    color: #DCFFAF;
  }
`;
