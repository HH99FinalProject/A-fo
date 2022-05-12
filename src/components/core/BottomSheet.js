import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../redux/configureStore';
import { targetSub2DB } from '../../redux/modules/target';
import { CountrySub1DB } from '../../redux/modules/country';

import styled from 'styled-components';
import { Button, Div, Image, Input, Text } from '../ui';

const BottomSheet = (props) => {
  const dispatch = useDispatch();
  const bottomSheet = props.bottomSheet;
  // 목적별 SubMain2에서 받아온 값
  const vTarget = props.vTarget;
  // 나라별 SubMain1에서 받아온 값
  const vCountry = props.vCountry;

  // Detail에 넘겨줄 데이터(vTarget)
  const purposeEng = props.purposeEng;
  const pickCountryList = props.addList;
  const dataTarget = {
    targetName: purposeEng,
    countryName1: pickCountryList[0],
    countryName2: pickCountryList[1],
    countryName3: pickCountryList[2],
    countryName4: pickCountryList[3],
  };

  // Detail에 넘겨줄 데이터(vCountry)
  const countryName = props.countryName;
  const pickTargetList = props.addList.map((p) => p.split(',')[1]);
  const dataCountry = {
    countryName: countryName,
    targetName1: pickTargetList[0],
    targetName2: pickTargetList[1],
    targetName3: pickTargetList[2],
    targetName4: pickTargetList[3],
  };

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
                dispatch(targetSub2DB(dataTarget));
                history.push({
                  pathname: '/Detail',
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
            row
            position="relative"
            width="1400px"
            height="50px"
            border="1px solid black"
          >
            {props.addList.map((l, i) => {
              return (
                <Text
                  keye={i}
                  size="20px"
                  bold
                  margin="0px 10px"
                  border="1px solid black"
                >
                  {l.split(',')[0]}
                </Text>
              );
            })}
            <Button
              bottomSheetBtn
              height="50px"
              border="1px solid black"
              _onClick={() => {
                dispatch(CountrySub1DB(dataCountry));
                history.push({
                  pathname: '/Detail',
                });
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
