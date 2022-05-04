import React from 'react';
import { useSelector } from 'react-redux';
import { history } from '../redux/configureStore';

import { Info, InfoTotal, TabMenu } from '../components/core';
import { Button, Div, Image, Input, Text } from '../components/ui';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { RiArrowRightSLine } from 'react-icons/ri';
import australia from '../styles/images/australia.png';

import Data from '../redux/data';

const Detail = () => {
  // const infoTitle = [
  //   '비자',
  //   // '휴대전화',
  //   '은행 계좌 개설',
  //   // '언어',
  //   // '시차',
  //   // '교통 정보',
  // ];
  const title = [
    { korea: '비자', english: 'visa' },
    { korea: '은행', english: 'bank' },
  ];
  const infoTitle = title.map((l, i) => l);
  // console.log(infoTitle);

  const country = Data.countryList;
  const countryName = country.map((v) => v.countryName);
  const info = country.map((v) => v.info);
  console.log(country, countryName, info);

  // 토글
  const [bookMarkToggle, setBookMarkToggle] = React.useState(true);
  const changeBookMarkToggle = () => {
    bookMarkToggle ? setBookMarkToggle(false) : setBookMarkToggle(true);
  };

  return (
    <React.Fragment>
      {/* 목적별 경로 시작 */}
      {/* <Div flexStart width="1400px" margin=" 10px auto" border="1px solid black">
        <Button
          _onClick={() => {
            history.push('/');
          }}
        >
          Home
        </Button>
        <RiArrowRightSLine size="15" />
        <Button
          _onClick={() => {
            history.push('/SubMain1');
          }}
        >
          목적별
        </Button>
        <RiArrowRightSLine size="15" />
        <Button
          _onClick={() => {
            history.push('/SubMain2');
          }}
        >
          워홀
        </Button>
        <RiArrowRightSLine size="15" />
        <Text>정보</Text>
      </Div> */}
      {/* 목적별 경로 끝 */}

      {/* 나라별 경로 시작 */}
      <Div
        flexStart
        width="1400px"
        margin=" 10px auto"
        border="1px solid black"
      >
        <Button
          _onClick={() => {
            history.push('/');
          }}
        >
          Home
        </Button>
        <RiArrowRightSLine size="15" />
        <Button
          _onClick={() => {
            history.push('/SubMain2');
          }}
        >
          나라별
        </Button>
        <RiArrowRightSLine size="15" />
        <Button
          _onClick={() => {
            history.push('/SubMain1');
          }}
        >
          호주
        </Button>
        <RiArrowRightSLine size="15" />
        <Text>정보</Text>
      </Div>
      {/* 나라별 경로 끝 */}

      {/* 탭메뉴 */}
      <TabMenu />
      {/* 탭메뉴 */}

      {/* 정보 시작 */}
      <Div
        center
        width="1400px"
        margin="0px auto"
        padding="30px 0px"
        border="1px solid black"
      >
        <Div center width="auto" border="1px solid black">
          {/* 선택된 목적or나라 */}
          <Div
            row
            width="auto"
            height="60px"
            margin="0px 0px 20px 0px"
            border="1px solid black"
          >
            {countryName.map((p, i) => {
              return (
                <Div
                  key={p + i}
                  row
                  width="350px"
                  height="60px"
                  border="1px solid black"
                >
                  <Image
                    shape="circle"
                    width="50px"
                    height="50px"
                    src={australia}
                    size="contain"
                    repeat="no-repeat"
                    position="center"
                  />
                  <Text
                    margin="0px 0px 0px 10px"
                    size="20px"
                    color="white"
                    bold
                  >
                    {p}
                  </Text>
                </Div>
              );
            })}
          </Div>
          {/* 선택된 목적or나라 */}

          {/* 세부정보 */}
          {infoTitle.map((t, i) => {
            return (
              <InfoTotal
                key={t + i}
                textK={t.korea}
                textB={t.english}
                country={country}
              />
            );
          })}
          {/* 세부정보 */}
        </Div>
      </Div>
      {/* 정보 끝 */}

      {/* 북마크 시작 */}
      <Div bookmark>
        <Div
          row
          width="100%"
          height="45px"
          lineHeight="45px"
          backgroundColor="white"
          border="1px solid black"
        >
          <Text bold backgroundColor="white" border="1px solid black">
            북마크
          </Text>
          <Button
            backgroundColor="white"
            border="1px solid black"
            _onClick={changeBookMarkToggle}
          >
            ▼
          </Button>
        </Div>

        {/* 북마크 토글 */}
        {bookMarkToggle ? (
          <React.Fragment>
            {/* 목적별 시작 */}
            {/* <Div width="100%" margin="5px 0px" border="1px solid black">
              <Text margin="10px" size="20px" bold>
                호주
              </Text>
              <Text margin="10px">비자</Text>
              <Text margin="10px">대사관</Text>
            </Div>

            <Div width="100%" margin="5px 0px" border="1px solid black">
              <Text margin="10px" size="20px" bold>
                뉴질랜드
              </Text>
              <Text margin="10px">비자</Text>
              <Text margin="10px">교통</Text>
            </Div>

            <Div width="100%" margin="5px 0px" border="1px solid black">
              <Text margin="10px" size="20px" bold>
                캐나다
              </Text>
              <Text margin="10px">대사관</Text>
            </Div> */}
            {/* 목적별 끝 */}
            {/* 나라별 시작 */}
            <Div
              width="100%"
              margin="5px 0px"
              backgroundColor="#CEC1FF"
              border="1px solid black"
            >
              <Text margin="10px" backgroundColor="#CEC1FF" size="20px" bold>
                워홀
              </Text>
              <Text margin="10px" backgroundColor="#CEC1FF">
                비자
              </Text>
              <Text margin="10px" backgroundColor="#CEC1FF">
                대사관
              </Text>
            </Div>

            <Div
              width="100%"
              margin="5px 0px"
              backgroundColor="#CEC1FF"
              border="1px solid black"
            >
              <Text margin="10px" backgroundColor="#CEC1FF" size="20px" bold>
                유학
              </Text>
              <Text margin="10px" backgroundColor="#CEC1FF">
                비자
              </Text>
              <Text margin="10px" backgroundColor="#CEC1FF">
                교통
              </Text>
            </Div>
            {/* 나라별 끝 */}
            <Div
              center
              width="100%"
              height="70px"
              backgroundColor="white"
              border="1px solid black"
            >
              <Button
                padding="10px 15px"
                backgroundColor="white"
                border="1px solid black"
                radius="10px"
              >
                완료
              </Button>
            </Div>
          </React.Fragment>
        ) : null}
        {/* 북마크 토글 */}
      </Div>
      {/* 북마크 끝 */}

      {/* 상단으로 가기 시작 */}
      <Button is_float _onClick={()=>{ window.scrollTo({top:0, left:0, behavior:'smooth'}) }}>
        <MdOutlineKeyboardArrowUp />
      </Button>
      {/* 상단으로 가기 끝 */}
    </React.Fragment>
  );
};

export default Detail;
