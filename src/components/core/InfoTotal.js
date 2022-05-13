import React from 'react';
import { useSelector } from 'react-redux';

import Info from './Info';

import styled from 'styled-components';
import { Button, Div, Image, Input, Text } from '../ui';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const InfoTotal = (props) => {
  const vTarget = props.vTarget;
  const vCountry = props.vCountry;
  const targetdetail = useSelector((state) => state.target.countryList);

  //   토글
  const isOpen = props.isOpen;
  const [toggle, setToggle] = React.useState(isOpen);
  const changeToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  // const scroll = useSelector((state) => state.scroll.scroll);
  // const ref = React.forwardRef((props, ref) => {});

  return (
    <React.Fragment>
      {/* 선택수에 따라서 바뀌는 형태 */}
      {(vTarget || (!vTarget && props.infoTitle === '비자')) && (
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
            // ref={ref}
          >
            <Text
              width="auto"
              margin="0px 5px"
              border="1px solid black"
              size="16px"
              bold
            >
              {props.infoTitle}
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
              {targetdetail?.map((v, i) => {
                return <Info key={v + i} {...v} />;
              })}
            </Div>
          ) : null}
          {/* 내용 */}
        </Div>
      )}

      {/* 공통정보 형태 */}
      {vCountry && props.infoTitle !== '비자' && (
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
              {props.infoTitle}
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
              <Info />
            </Div>
          ) : null}
          {/* 내용 */}
        </Div>
      )}
    </React.Fragment>
  );
};

export default InfoTotal;
