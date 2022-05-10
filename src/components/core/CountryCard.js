import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../redux/configureStore';
import { resetVTargetReducer } from '../../redux/modules/target';
import {
  setOnePickCountryNameReducer,
  countrySub2DB,
} from '../../redux/modules/country';

import { Button, Div, Image, Input, Text } from '../ui';
import flag from '../../styles/images/australia.png';

const CountryCard = (props) => {
  const dispatch = useDispatch();
  const vTarget = useSelector((state) => state.target.vTarget);
  const vCountry = useSelector((state) => state.country.vCountry);
  const countryName = props.countryName;

  // 클릭시 배경색 바뀌기
  const [backgroundColor, setBackgroundColor] = React.useState('white');
  const Select = (props) => {
    backgroundColor === 'white'
      ? setBackgroundColor('#fafbb9')
      : setBackgroundColor('white');
  };

  return (
    <React.Fragment>
      {/* 목적별 시작 */}
      {vTarget && (
        <Div
          center
          width="234px"
          height="234px"
          margin="-1px 0px 0px -1px"
          backgroundColor={backgroundColor}
          border="1px solid black"
          cursor="pointer"
          _onClick={() => {
            Select();
            props.showBottomSheet();
          }}
        >
          <Image flag src={props.flag} />
          <Text size="18px" bold margin="20px 0px">
            {props.countryName}
          </Text>
          <Text size="16px">{props.engName}</Text>
        </Div>
      )}
      {/* 목적별 끝 */}

      {/* 나라별 */}
      {vCountry && (
        <Div
          center
          width="234px"
          height="234px"
          margin="-1px 0px 0px -1px"
          backgroundColor="white"
          border="1px solid black"
          cursor="pointer"
          _onClick={() => {
            dispatch(setOnePickCountryNameReducer(countryName));
            dispatch(countrySub2DB(countryName));
            history.push({
              pathname: '/SubMain1',
            });
          }}
        >
          <Image flag src={props.flag} />
          <Text size="16px" margin="20px 0px">
            {props.countryName}
          </Text>
          <Text size="16px">{props.engName}</Text>
        </Div>
      )}
      {/* 나라별 끝 */}
    </React.Fragment>
  );
};

export default CountryCard;
