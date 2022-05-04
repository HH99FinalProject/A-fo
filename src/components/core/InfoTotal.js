import React from 'react';

import styled from 'styled-components';
import Info from './Info';
import { Button, Div, Image, Input, Text } from '../ui';

const InfoTotal = (props) => {
  //   토글
  const [toggle, setToggle] = React.useState(true);
  const changeToggle = () => {
    !toggle ? setToggle(true) : setToggle(false);
  };
  //   const [toggle, setToggle] = React.useState(false);
  //   const changeToggle = () => {
  //     toggle ? setToggle(false) : setToggle(true);
  //   };

  return (
    <React.Fragment>
      <Div center width="100%" border="1px solid black">
        {/* 토글 */}
        <Div
          row
          width="100%"
          height="100px"
          backgroundColor="#CEC1FF"
          border="1px solid black"
        >
          <Text
            width="auto"
            margin="0px 5px"
            backgroundColor="#CEC1FF"
            border="1px solid black"
            size="16px"
            bold
          >
            {props.text}
          </Text>
          <Button
            backgroundColor="#CEC1FF"
            border="1px solid black"
            _onClick={() => {
              changeToggle();
            }}
          >
            ▼
          </Button>
        </Div>
        {/* 토글 */}

        {/* 내용 */}
        {toggle ? (
          <Div
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="space-between"
            border="1px solid black"
          >
            <Info />
            <Info />
            <Info />
            <Info />
          </Div>
        ) : null}
        {/* 내용 */}
      </Div>
    </React.Fragment>
  );
};

export default InfoTotal;
