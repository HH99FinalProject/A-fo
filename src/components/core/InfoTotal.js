import React from 'react';

import styled from 'styled-components';
import Info from './Info';
import { Button, Div, Image, Input, Text } from '../ui';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const InfoTotal = (props) => {
  const localTarget = props.localTarget;
  const localCountry = props.localCountry;
  const country = props.country;
  const info = country.map((v) => v.info);

  //   토글
  const isOpen = props.isOpen;
  const [toggle, setToggle] = React.useState(isOpen);
  const changeToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  };



  return (
    <React.Fragment>
      {(localTarget || (!localTarget && props.textK === '비자')) && (
        <Div center width="1400px" border="1px solid black">
          {/* 토글 */}
          <Div
            row
            width="100%"
            height="100px"
            backgroundColor="#D2DFFF"
            border="1px solid black"
            cursor="pointer"
            _onClick={() => {
              changeToggle();
            }}
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
            <MdOutlineKeyboardArrowDown size={20} />
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
      )}

      {!localTarget && props.textK !== '비자' && (
        <Div center width="1400px" border="1px solid black">
          {/* 토글 */}
          <Div
            row
            width="100%"
            height="100px"
            backgroundColor="#D2DFFF"
            border="1px solid black"
            cursor="pointer"
            _onClick={() => {
              changeToggle();
            }}
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
            <MdOutlineKeyboardArrowDown size={20} />
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
              <Info title={props.textB} country={country} />
            </Div>
          ) : null}
          {/* 내용 */}
        </Div>
      )}
    </React.Fragment>
  );
};

export default InfoTotal;
