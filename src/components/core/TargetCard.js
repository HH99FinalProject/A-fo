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

const TargetCard = (props) => {
  const dispatch = useDispatch();
  const purpose = props.purpose;
  const purposeEng = props.purposeEng;
  const vTarget = props.vTarget;
  const vCountry = props.vCountry;

  // 클릭시 배경색 바뀌기
  const [backgroundColor, setBackgroundColor] = React.useState('#D2DFFF');
  const Select = () => {
    backgroundColor === '#D2DFFF'
      ? setBackgroundColor('#fafbb9')
      : setBackgroundColor('#D2DFFF');
  };

  // 부모로 값 전달(for바텀시트)
  const sendAddTarget = () => {
    props?.addTarget(purpose + ',' + purposeEng);
  };

  return (
    <React.Fragment>
      {/* 목적별 */}
      {vTarget && (
        <Div
          center
          width="350px"
          height="350px"
          margin="0px 0px 0px -2px"
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
          <Text size="25px">{purpose}</Text>
        </Div>
      )}
      {/* 목적별 */}

      {/* 나라별 */}
      {vCountry && !props.service && (
        <Div
          center
          width="350px"
          height="350px"
          margin="0px 0px 0px -2px"
          border="2px solid #204CE5"
          cursor="pointer"
          BGHover="#DCFFAF"
          transition="all 0.3s"
          backgroundColor={backgroundColor}
          _onClick={() => {
            // Select();
            props.showBottomSheet();
            sendAddTarget();
          }}
        >
          <Text size="25px">{props.purpose}</Text>
        </Div>
      )}
      {vCountry && props.service && (
        <Div
          center
          width="350px"
          height="350px"
          margin="0px 0px 0px -2px"
          border="2px solid #204CE5"
          transition="all 0.3s"
          backgroundColor="#d5d5d5"
        >
          <Text size="25px">{props.purpose}</Text>
          <Text size="16px" margin="20px 0px">
            {props.service}
          </Text>
        </Div>
      )}
      {/* 나라별 */}
    </React.Fragment>
  );
};

export default TargetCard;
