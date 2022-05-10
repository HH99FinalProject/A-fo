import React from 'react';
import { useDispatch } from 'react-redux';
import { history } from '../../redux/configureStore';
import {
  setOnePickTargetNameReducer,
  targetSub1DB,
} from '../../redux/modules/target';
import { resetVCountryReducer } from '../../redux/modules/country';

import styled from 'styled-components';
import { Div, Text, Image, Button } from '../ui';

const TargetCard = (props) => {
  const dispatch = useDispatch();
  const purpose = props.purpose;
  const vTarget = props.vTarget;
  const vCountry = props.vCountry;
  const targetName = props.targetText;

  const [backgroundColor, setBackgroundColor] = React.useState('#D2DFFF');
  const Select = () => {
    backgroundColor === '#D2DFFF'
      ? setBackgroundColor('#fafbb9')
      : setBackgroundColor('#D2DFFF');
  };

  return (
    <React.Fragment>
      {/* 목적별 */}
      {vTarget && (
        <Div
          center
          width="350px"
          height="350px"
          backgroundColor="#D2DFFF"
          border="1px solid black"
          cursor="pointer"
          _onClick={() => {
            dispatch(setOnePickTargetNameReducer(purpose));
            dispatch(targetSub1DB(purpose));
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
      {vCountry && (
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
            {targetName}
          </Text>
        </Div>
      )}
      {/* 나라별 */}
    </React.Fragment>
  );
};

export default TargetCard;
