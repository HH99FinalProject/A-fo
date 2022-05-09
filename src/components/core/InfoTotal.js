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

  const country = props.country;
  const info = country.map((v) => v.info);
  // console.log(info);



  return (
    <React.Fragment>
      <Div center width="1400px" border="1px solid black" _onClick={() => {
              changeToggle();
            }} >
        {/* 토글 */}
        <Div
          row
          width="100%"
          height="100px"
          backgroundColor="#D2DFFF"
          border="1px solid black"
        >
          <Text
            width="auto"
            margin="0px 5px"
            border="1px solid black"
            size="16px"
            bold
          >
            {props.textK}
          </Text>
          <Button
            backgroundColor="#D2DFFF"
            border="1px solid black"
          >
            ▼
          </Button>
        </Div>
        {/* 토글 */}

        {/* 내용 */}
        {toggle ? (
          <Div
            width="100%"
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="space-between"
            border="1px solid black"
          >
            {country.map((v, i) => {
              return (
                <Info
                  key={v + i}
                  title={props.textB}
                  country={country}
                  {...v}
                />
              );
            })}
          </Div>
        ) : null}
        {/* 내용 */}
      </Div>
    </React.Fragment>
  );
};

export default InfoTotal;
