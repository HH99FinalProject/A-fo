import React from 'react';
import { history } from '../../redux/configureStore';

import { Button, Div, Image, Input, Text } from '../ui';

const CountryCard = (props) => {
  const color = props.color;
  const country = props.country;
  return (
    <React.Fragment>
      {/* 목적별 시작 */}
      {/* <Div
        width="100%"
        height="260px"
        margin="10px 0px"
        border="1px solid black"
        backgroundColor={color}
        cursor="pointer"
        _onClick={() => {
          history.push('/Detail');
        }}
      >
        <Text>{country}</Text>
      </Div> */}
      {/* 목적별 끝 */}

      {/* 나라별 */}
      <Div
        width="100%"
        height="260px"
        margin="10px 0px"
        border="1px solid black"
        backgroundColor={color}
        cursor="pointer"
        _onClick={() => {
          history.push('/SubMain1');
        }}
      >
        <Text>{country}</Text>
      </Div>
      {/* 나라별 끝 */}
    </React.Fragment>
  );
};

export default CountryCard;
