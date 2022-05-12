import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import { Button, Div, Image, Input, Text } from '../ui';

const Info = (props) => {
  const dispatch = useDispatch();

  const infoSubTitle = ['휴대전화 개통방식', '주요 통신사', '추천 요금제'];

  return (
    // 목적별
    <Div
      position="relative"
      width="100%"
      padding="40px 0px"
      overflow="hidden"
      border="1px solid black"
      backgroundColor="white"
    >
      {/* 북마크 전 */}
      {/* <Button bookmarkBtn></Button> */}
      {/* 북마크 전 */}

      {/* 북마크 후 */}
      <Button bookmarkBtn complete></Button>
      {/* 북마크 후 */}

      {infoSubTitle.map((v, i) => {
        return (
          <Div
            key={v + i}
            width="100%"
            padding="20px"
            border="1px solid black"
            backgroundColor="white"
          >
            <Text
              width="100%"
              height="35px"
              padding="5px"
              backgroundColor="#FEFFCB"
              border="1px solid black"
              size="16px"
              bold
            >
              ● {v}
              {/* 주요은행 */}
            </Text>
            <Div
              width="100%"
              lineHeight="20px"
              padding="5px"
              backgroundColor="#FEFFCB"
              border="1px solid black"
            >
              <Ol start="1">
                <Li>
                  {/* 커먼웰스뱅크 */}
                  <ul>
                    <li>
                      {/* 월별관리비용이 청구되지 않는 경우 */}
                      <ul>
                        <li>{/* 1 */}</li>
                      </ul>
                    </li>
                  </ul>
                </Li>
              </Ol>
            </Div>
          </Div>
        );
      })}
    </Div>
    // 나라별
  );
};

export default Info;

const Ol = styled.ol`
  list-style-type: none;
  width: 100%;
  padding: 0px 5px 0px 20px;
  line-height: 25px;
`;
const Li = styled.li`
  list-style-type: decimal;
  width: 100%;
`;
