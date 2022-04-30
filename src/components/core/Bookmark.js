import React from 'react';
import styled from 'styled-components';

import { Div, Text } from '../ui';

const Bookmark = () => {
  return (
    <React.Fragment>
      <Wrap>
        <Div
          center
          width="10%"
          fontSize="14px"
          padding="15px 0"
          backgroundColor="#fff"
          borderRadius="50%"
          margin="0 5% 0 0"
        >
          워홀
        </Div>
        <Div flexStart width="65%" margin="0 5% 0 0">
          <Div margin="0 10px 0 0">
            <Text bold size="20px">
              호주
            </Text>
          </Div>
          <Div>
            <Text bold size="20px">
              뉴질랜드
            </Text>
          </Div>
        </Div>
        <Div
          width="15%"
          fontSize="10px"
          padding="10px"
          backgroundColor="#fff"
          borderRadius="10px"
          center
        >
          보러가기
        </Div>
      </Wrap>
    </React.Fragment>
  );
};

export default Bookmark;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 440px;
  padding: 15px 10px;
  background: #eee;
  margin-bottom: 15px;
  border-radius: 10px;
  font-size: 14px;
`;
