import React from 'react';
import { history } from '../../redux/configureStore';

import { Button, Div, Image, Input, Text } from '../ui';
import flag from '../../styles/images/australia.png';

const CountryCard = (props) => {
  return (
    <React.Fragment>
      {/* 목적별 시작 */}
      <Div
        center
        width="234.17px"
        height="234.17px"
        margin="-1px 0px 0px -1px"
        backgroundColor="white"
        border="1px solid black"
        cursor="pointer"
        _onClick={() => {
          history.push('/Detail');
        }}
      >
        <Image flag src={flag} />
        <Text size="18px" bold margin="20px 0px">
          프랑스
        </Text>
        <Text size="16px">France</Text>
      </Div>
      {/* 목적별 끝 */}

      {/* 나라별 */}
      {/* <Div
        center
        width="234.17px"
        height="234.17px"
        margin="-1px 0px 0px -1px"
        backgroundColor="white"
        border="1px solid black"
        collapse="collapse"
        cursor="pointer"
        _onClick={() => {
          history.push('/SubMain1');
        }}
      >
        <Image flag src={flag} />
        <Text size="16px" margin="20px 0px">
          프랑스
        </Text>
        <Text size="16px">France</Text>
      </Div> */}
      {/* 나라별 끝 */}
    </React.Fragment>
  );
};

export default CountryCard;
