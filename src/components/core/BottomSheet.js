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

  // 데이터 넘겨주는 함수
  const sendDataTarget = () => {
    if (pickCountryList.length !== 0) {
      dispatch(targetSub2DB(dataTarget));
      history.push('/Detail');
      window.scrollTo(0, 0);
    } else {
      return window.alert('한 개 이상 선택해주세요!');
    }
  };
  const sendDataCountry = () => {
    if (pickTargetList.length > 0) {
      dispatch(CountrySub1DB(dataCountry));
      history.push('/Detail');
      window.scrollTo(0, 0);
    } else {
      return window.alert('한 개 이상 선택해주세요!');
    }
  };

  return (
    <React.Fragment>
      {/* 목적별 */}
      {vTarget && bottomSheet && (
        <Div bottomSheet>
          <Div spaceBetween position="relative" width="1400px" height="60px">
            <Div
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
              width="250px"
              height="60px"
            >
              <Text margin="3px 0px" size="22px" bold color="white">
                정보 비교하기
              </Text>
              <Text margin="2px 0px" size="16px" color="#CFCFCF">
                최대 4개까지 비교할 수 있습니다.
              </Text>
            </Div>
            <Div flexStart width="810px">
              {props.addList.map((v, i) => {
                return (
                  <Text
                    key={v.id}
                    width="190px"
                    height="60px"
                    lineHeight="60px"
                    margin="0px 2px 0px 0px"
                    backgroundColor="#7D9EF2"
                    color="white"
                    size="20px"
                    center
                    bold
                  >
                    {v}
                  </Text>
                );
              })}
            </Div>
            <Button
              bottomSheetBtn
              cancle
              width="115px"
              border="2px solid #0031DE"
              _onClick={() => {
                props.hideBottomSheet();
                props.removeTarget();
              }}
            >
              취소
            </Button>
            <Button
              bottomSheetBtn
              width="200px"
              border="2px solid #0031DE"
              _onClick={sendDataTarget}
            >
              정보 보러 가기
            </Button>
          </Div>
        </Div>
      )}
      {/* 목적별 */}

      {/* 나라별 */}
      {vCountry && bottomSheet && (
        <Div bottomSheet>
          <Div spaceBetween position="relative" width="1400px" height="60px">
            <Div
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
              width="250px"
              height="60px"
            >
              <Text margin="3px 0px" size="22px" bold color="white">
                정보 비교하기
              </Text>
              <Text margin="2px 0px" size="16px" color="#CFCFCF">
                최대 4개까지 비교할 수 있습니다.
              </Text>
            </Div>
            <Div flexStart width="810px">
              {props.addList.map((l, j) => {
                return (
                  <Text
                    keye={j}
                    width="190px"
                    height="60px"
                    lineHeight="60px"
                    margin="0px 2px 0px 0px"
                    backgroundColor="#7D9EF2"
                    color="white"
                    size="20px"
                    center
                    bold
                  >
                    {l.split(',')[0]}
                  </Text>
                );
              })}
            </Div>
            <Button
              bottomSheetBtn
              cancle
              width="115px"
              border="2px solid #0031DE"
              _onClick={() => {
                props.hideBottomSheet();
                props.removeTarget();
              }}
            >
              취소
            </Button>
            <Button
              bottomSheetBtn
              width="200px"
              border="2px solid #0031DE"
              _onClick={sendDataCountry}
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
