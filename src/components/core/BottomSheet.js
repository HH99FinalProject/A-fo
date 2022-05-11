import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../redux/configureStore';
import { targetSub2DB } from '../../redux/modules/target';

import styled from 'styled-components';
import { Button, Div, Image, Input, Text } from '../ui';

const BottomSheet = (props) => {
  const bottomSheet = props.bottomSheet;
  // 목적별 SubMain2에서 받아온 값
  const vTarget = props.vTarget;
  // 나라별 SubMain1에서 받아온 값
  const vCountry = props.vCountry;

  // Detail에 넘겨줄 데이터
  const dispatch = useDispatch();
  const data = {
    targetName: 'workVisa',
    countryName1: '중국',
    countryName2: '베트남',
    countryName3: '일본',
  };

  // Detail에서 데이터요청시 필요
  const targetName = 'workVisa';
  const countryName1 = '중국';
  const countryName2 = '베트남';
  const countryName3 = '일본';

  return (
    <React.Fragment>
      {/* 목적별 */}
      {vTarget && bottomSheet && (
        <Div bottomSheet border="1px solid black">
          <Div
            row
            position="relative"
            width="1400px"
            height="50px"
            border="1px solid black"
          >
            {props.addList.map((v, i) => {
              return (
                <Text
                  key={i}
                  size="20px"
                  margin="0px 10px"
                  bold
                  border="1px solid black"
                >
                  {v}
                </Text>
              );
            })}
            <Button
              bottomSheetBtn
              height="50px"
              border="1px solid black"
              _onClick={() => {
                dispatch(targetSub2DB(data));
                history.push({
                  pathname: '/Detail',
                  // targetName: targetName,
                  // countryName1: countryName1,
                  // countryName2: countryName2,
                  // countryName3: countryName3,
                });
                window.scrollTo(0, 0);
              }}
            >
              정보 보러 가기
            </Button>
          </Div>
        </Div>
      )}
      {/* 목적별 */}

      {/* 나라별 */}
      {vCountry && bottomSheet && (
        <Div bottomSheet borderTop="1px solid black">
          <Div
            center
            position="relative"
            width="1400px"
            height="50px"
            border="1px solid black"
          >
            <Text size="20px" bold border="1px solid black">
              유학 + 워홀
            </Text>
            <Button
              bottomSheetBtn
              height="50px"
              border="1px solid black"
              _onClick={() => {
                history.push({
                  pathname: '/Detail',
                });
                // 선택한 나라,선택한 목적들 post요청 보내기
              }}
            >
              정보 보러 가기
            </Button>
          </Div>
        </Div>
      )}
      {/* 나라별 */}
    </React.Fragment>
  );
};

export default BottomSheet;
