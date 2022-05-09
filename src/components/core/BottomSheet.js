import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../redux/configureStore';
import { targetSub2DB } from '../../redux/modules/target';

import styled from 'styled-components';
import { Button, Div, Image, Input, Text } from '../ui';

const BottomSheet = (props) => {
  const localTarget = localStorage.getItem('target');

  // 목적별 SubMain2에서 받아온 값
  const pickCountry = props.pickCountry;
  const pickOneTarget = props.pickOneTarget;
  const bottomSheet = props.bottomSheet;

  // 나라별 SubMain1에서 받아온 값
  const pickTarget = props.pickTarget;
  const pickOneCountry = props.pickOneCountry;

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
      {localTarget && bottomSheet && (
        <Div bottomSheet border="1px solid black">
          <Div
            center
            position="relative"
            width="1400px"
            height="50px"
            border="1px solid black"
          >
            <Text size="20px" bold border="1px solid black">
              프랑스 + 호주
            </Text>
            <Button
              bottomSheetBtn
              height="50px"
              border="1px solid black"
              _onClick={() => {
                localStorage.removeItem('country');
                dispatch(targetSub2DB(data));
                history.push({
                  pathname: '/Detail',
                  pickTargetKinds: pickOneTarget,
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
      {!localTarget && bottomSheet && (
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
                localStorage.removeItem('target');
                history.push({
                  pathname: '/Detail',
                  pickCountryKinds: pickOneCountry,
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
