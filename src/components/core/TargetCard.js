import React from 'react';
import { history } from '../../redux/configureStore';

import styled from 'styled-components';
import { Div, Text, Image, Button } from '../ui';

const TargetCard = (props) => {
  const [backgroundColor, setBackgroundColor] = React.useState('white');
  const Select = () => {
    backgroundColor === 'white'
      ? setBackgroundColor('lightgrey')
      : setBackgroundColor('white');
  };
  return (
    <React.Fragment>
      {/* 목적별 */}
      {/* <Div
        center
        width="330px"
        height="400px"
        border="1px solid black"
        cursor="pointer"
        _onClick={() => {
          history.push('/SubMain2');
        }}
      >
        <Text>{props.text}</Text>
      </Div> */}
      {/* 목적별 */}

      {/* 나라별 */}
      <Div
        center
        width="330px"
        height="400px"
        border="1px solid black"
        backgroundColor={backgroundColor}
        cursor="pointer"
        _onClick={Select}
      >
        <Text>{props.text}</Text>
      </Div>
      {/* 나라별 */}
    </React.Fragment>
  );
};

export default TargetCard;
