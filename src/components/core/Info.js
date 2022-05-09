import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTargetInfo } from '../../redux/modules/target';

import styled from 'styled-components';
import { Button, Div, Image, Input, Text } from '../ui';

const Info = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.target);

  const infoSubTitle = ['휴대전화 개통방식', '주요 통신사', '추천 요금제'];

  const title = props.title;

  const subTitle = {
    visa: ['자격', '방법', '체류 기간'],
    bank: ['준비서류', '주요은행', '계좌개설 절차', '유의점', '은행계좌종류'],
  };

  const country = props.country;
  const info = country.map((v) => v.info);
  // const detail = info.map((l) => l.visa);
  // console.log(info, detail);
  // console.log(info[0]);

  const myKeys = Object.keys(info[0]);
  // console.log(myKeys);

  // const detail = 0;
  // for (let i = 0; i < 2; i++) {
  //   let my_key= Object.keys(info[i])
  //    return detail=info.map((l) => l.title);
  // }

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
                  한국에서 이용하던 휴대전화를 그대로 로밍해서 이용 가능하나
                  수수료가 많이 나온다.
                </Li>
                <Li>
                  선불결제 휴대폰 <br /> 통화요금이 저렴하고, 기본요금 없고,
                  사용할 만큼의 통화요금만 미리 충전시켜 이용한다.
                </Li>
                <Li>
                  후불결제 <br /> 약정기간을 정해야하며 요금이 비싸다
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
