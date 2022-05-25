import React from 'react';
import { useDispatch } from 'react-redux';
import { history } from '../../redux/configureStore';
import {
  setOnePickTargetNameKReducer,
  setOnePickTargetNameEReducer,
  targetSub1DB,
} from '../../redux/modules/target';

import styled from 'styled-components';
import { Div, Text, Image, Button } from '../ui';
import workingHoliday from '../../styles/images/workingHoliday.png';
import work from '../../styles/images/work.png';
import study from '../../styles/images/study.png';
import immigration from '../../styles/images/immigration.png';
import arrow from '../../styles/images/arrow.png';

const TargetCard = (props) => {
  const dispatch = useDispatch();
  const purpose = props.purpose;
  const purposeEng = props.purposeEng;
  const vTarget = props.vTarget;
  const vCountry = props.vCountry;

  // 클릭시 배경색 바뀌기
  const [backgroundColor, setBackgroundColor] = React.useState('#B6CBFF');
  const addListLength = props.addListLength;
  const Select = () => {
    backgroundColor === '#B6CBFF' && addListLength < 4
      ? setBackgroundColor('white')
      : setBackgroundColor('#B6CBFF');
  };
  if (backgroundColor === 'white' && addListLength === 0) {
    setBackgroundColor('#B6CBFF');
  }

  // 부모로 값 전달(for바텀시트)
  const sendAddTarget = () => {
    props?.addTarget(purpose + ',' + purposeEng);
  };

  return (
    <React.Fragment>
      {/* 목적별 */}
      {vTarget && (
        <Div
          flexColumn
          width="350px"
          height="405px"
          margin="0px 0px 0px -2px"
          padding="20px 30px"
          backgroundColor="#D2DFFF"
          border="2px solid #204CE5"
          BGHover="#DCFFAF"
          transition="all 0.3s"
          cursor="pointer"
          _onClick={() => {
            dispatch(targetSub1DB(purpose));
            dispatch(setOnePickTargetNameKReducer(purpose));
            dispatch(setOnePickTargetNameEReducer(purposeEng));
            history.push({
              pathname: '/SubMain2',
            });
          }}
        >
          {props.id === 1 && (
            <Image
              width="60px"
              height="80px"
              src={immigration}
              size="contain"
              repeat="no-repeat"
              position="center"
            />
          )}
          {props.id === 2 && (
            <Image
              width="60px"
              height="80px"
              src={work}
              size="contain"
              repeat="no-repeat"
              position="center"
            />
          )}
          {props.id === 3 && (
            <Image
              width="60px"
              height="80px"
              src={study}
              size="contain"
              repeat="no-repeat"
              position="center"
            />
          )}
          {props.id === 4 && (
            <Image
              width="60px"
              height="80px"
              src={workingHoliday}
              size="contain"
              repeat="no-repeat"
              position="center"
            />
          )}
          <Text
            width="100px"
            height="40px"
            lineHeight="40px"
            margin="20px 10px"
            size="35px"
            color="#3A3A3A"
            bold
          >
            {purpose}
          </Text>
          <Text
            width="250px"
            height="40px"
            lineHeight="40px"
            margin="0px 10px"
            size="20px"
            color="#3A3A3A"
          >
            {props.explain}
          </Text>
          <Div
            spaceBetween
            width="100%"
            height="50px"
            margin="60px 0px 0px 0px"
            padding="10px 30px"
            size="20px"
            backgroundColor="white"
            border="2px solid #204CE5"
            borderRadius="60px"
          >
            <Text width="auto" size="20px" color="#5281FA">
              정보 보러가기
            </Text>
            <Image
              width="40px"
              height="20px"
              src={arrow}
              size="contain"
              repeat="no-repeat"
              position="center"
            />
          </Div>
        </Div>
      )}
      {/* 목적별 */}

      {/* 나라별 */}
      {vCountry && !props.service && (
        <Div
          flexColumn
          width="350px"
          height="405px"
          margin="0px 0px 0px -2px"
          padding="20px 30px"
          border="2px solid #204CE5"
          cursor="pointer"
          BGHover="#DCFFAF"
          transition="all 0.3s"
          backgroundColor={backgroundColor}
          _onClick={() => {
            Select();
            props.showBottomSheet();
            sendAddTarget();
          }}
        >
          <Image
            width="60px"
            height="80px"
            src={props.purposeImg}
            size="contain"
            repeat="no-repeat"
            position="center"
          />
          <Text
            width="100px"
            height="40px"
            lineHeight="40px"
            margin="20px 10px"
            size="35px"
            color="#3A3A3A"
            bold
          >
            {props.purpose}
          </Text>
          <Text
            width="250px"
            height="40px"
            lineHeight="40px"
            margin="0px 10px"
            size="20px"
            color="#3A3A3A"
          >
            {props.purposeDesc}
          </Text>
        </Div>
      )}
      {vCountry && props.service && (
        <Div
          flexColumn
          width="350px"
          height="405px"
          margin="0px 0px 0px -2px"
          border="2px solid #204CE5"
          transition="all 0.3s"
          backgroundColor="#d5d5d5"
        >
          <Text
            width="100px"
            height="40px"
            lineHeight="40px"
            margin="20px 10px"
            size="35px"
            color="#3A3A3A"
            bold
          >
            {props.purpose}
          </Text>
          <Text
            width="280px"
            height="40px"
            lineHeight="40px"
            margin="0px 10px"
            size="20px"
            color="#3A3A3A"
          >
            {props.service}
          </Text>
        </Div>
      )}
      {/* 나라별 */}
    </React.Fragment>
  );
};

export default TargetCard;
