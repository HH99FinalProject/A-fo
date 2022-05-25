import React from 'react';
import { throttle } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../redux/configureStore';
import {
  setOnePickCountryNameReducer,
  countrySub2DB,
} from '../../redux/modules/country';

import { Button, Div, Image, Input, Text } from '../ui';

const CountryCard = (props) => {
  const dispatch = useDispatch();
  const vTarget = useSelector((state) => state.target.vTarget);
  const vCountry = useSelector((state) => state.country.vCountry);
  const countryName = props.countryName;

  // 클릭시 배경색 바뀌기
  const [backgroundColor, setBackgroundColor] = React.useState('#B6CBFF');
  const addListLength = props.addListLength;
  const Select = (props) => {
    backgroundColor === '#B6CBFF' && addListLength < 4
      ? setBackgroundColor('white')
      : setBackgroundColor('#B6CBFF');
  };
  if (backgroundColor === 'white' && addListLength === 0) {
    setBackgroundColor('#B6CBFF');
  }

  // 부모로 값 전달(for바텀시트)
  const sendAddCountry = () => {
    props?.addCountry(countryName);
  };

  return (
    <React.Fragment>
      {/* 목적별 시작 */}
      {vTarget && (
        <Div
          width="234px"
          height="234px"
          margin="-1px 0px 0px -1px"
          backgroundColor={backgroundColor}
          overflow="hidden"
          border="1px solid #0031DE"
          cursor="pointer"
          BGHover="#DCFFAF"
          transition="all 0.6s"
          _onClick={() => {
            Select();
            props.showBottomSheet();
            sendAddCountry();
          }}
        >
          <Div center width="234px" height="345px" transHover>
            <Text size="22px" bold color="#3A3A3A">
              {props.countryName}
            </Text>
            <Text margin="35px 0px 45px 0px" size="16px" color="#3A3A3A">
              {props.engName}
            </Text>
            <Image flag src={props.flag} />
          </Div>
        </Div>
      )}
      {/* 목적별 끝 */}

      {/* 나라별 */}
      {vCountry && (
        <Div
          width="234px"
          height="234px"
          margin="-1px 0px 0px -1px"
          backgroundColor="#B6CBFF"
          overflow="hidden"
          border="1px solid #0031DE"
          cursor="pointer"
          BGHover="#DCFFAF"
          transition="all 0.6s"
          _onClick={() => {
            dispatch(setOnePickCountryNameReducer(countryName));
            dispatch(countrySub2DB(countryName));
            history.push({
              pathname: '/SubMain1',
            });
          }}
        >
          <Div center width="234px" height="345px" transHover>
            <Text size="22px" bold color="#3A3A3A">
              {props.countryName}
            </Text>
            <Text margin="35px 0px 45px 0px" size="16px" color="#3A3A3A">
              {props.engName}
            </Text>
            <Image flag src={props.flag} />
          </Div>
        </Div>
      )}
      {/* 나라별 끝 */}
    </React.Fragment>
  );
};

export default CountryCard;
