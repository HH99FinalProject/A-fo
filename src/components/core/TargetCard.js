import React from 'react';
import { history } from '../../redux/configureStore';

import styled from 'styled-components';
import { Div, Text, Image, Button } from '../ui';

const TargetCard = (props) => {
  const targetKinds = props.text;
  const pickTarget = props.pickTarget;

  const [backgroundColor, setBackgroundColor] = React.useState('#D2DFFF');
  const Select = () => {
    backgroundColor === '#D2DFFF'
      ? setBackgroundColor('#fafbb9')
      : setBackgroundColor('#D2DFFF');
  };

  return (
    <React.Fragment>
      {/* 목적별 */}
      {pickTarget && (
        <Div
          center
          width="350px"
          height="350px"
          backgroundColor="#D2DFFF"
          border="1px solid black"
          cursor="pointer"
          _onClick={() => {
            history.push({
              pathname: '/SubMain2',
              pickTargetKinds: targetKinds,
            });
          }}
        >
          <Text size="25px">{props.text}</Text>
        </Div>
      )}
      {/* 목적별 */}

      {/* 나라별 */}
      {!pickTarget && (
        <Div
          center
          width="350px"
          height="350px"
          border="1px solid black"
          cursor="pointer"
          backgroundColor={backgroundColor}
          _onClick={Select}
        >
          <Text size="25px" backgroundColor={backgroundColor}>
            {props.text}
          </Text>
        </Div>
      )}
      {/* 나라별 */}
    </React.Fragment>
  );
};

export default TargetCard;
