import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { history } from '../redux/configureStore';
import { getTargetInfo } from '../redux/modules/target';

import { CountryCard, TabMenu } from '../components/core';
import { Button, Div, Image, Input, Text } from '../components/ui';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { RiArrowRightSLine } from 'react-icons/ri';

const SubMain2 = () => {
  const location = useLocation();
  const pickCountry = location.version;

  const continentList = [
    '남아메리카',
    '북아메리카',
    '아시아',
    '오세아니아',
    '유럽',
  ];

  return (
    <React.Fragment>
      {/* 목적별 경로 시작 */}
      {!pickCountry && (
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
              history.push('/SubMain1');
            }}
          >
            목적별
          </Button>
          <RiArrowRightSLine size="15" />
          <Text>워홀</Text>
        </Div>
      )}
      {/* 목적별 경로 끝 */}
      {/* 나라별 경로 시작 */}
      {pickCountry && (
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
          <Text>나라별</Text>
        </Div>
      )}
      {/* 나라별 경로 끝 */}
      <TabMenu />
      {/* 나라 리스트 */}
      <Div center width="1400px" margin="50px auto">
        {continentList.map((v, i) => {
          return (
            <Div
              key={v + i}
              center
              width="100%"
              margin="50px auto"
              borderLeft="1px solid black"
            >
              <Div
                width="100%"
                borderTop="1px solid black"
                borderRight="1px solid black"
                borderBottom="1px solid black"
              >
                <Text
                  height="60px"
                  lineHeight="60px"
                  center
                  bold
                  size="20px"
                  backgroundColor="#D2DFFF"
                >
                  {v}
                </Text>
              </Div>

              <Div flexFlow width="100%">
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
                {Array(6)
                  .fill('')
                  .map((a, i) => {
                    return (
                      <Div key={a + i} preparingCountry>
                        <Text size="18px" bold margin="0px 0px 20px 0px">
                          나라 추가중
                        </Text>
                        <Text size="14px">업데이트를 기다려 주세요🙂</Text>
                      </Div>
                    );
                  })}
              </Div>
            </Div>
          );
        })}
      </Div>
      {/* 나라 리스트 */}

      {/* 상단으로 가기 버튼 */}
      <Button is_float>
        <MdOutlineKeyboardArrowUp />
      </Button>
      {/* 상단으로 가기 버튼 */}

      {/* 바텀시트(목적별 선택시) */}
      {!pickCountry && (
        <Div bottomSheet border="1px solid black">
          <Div
            center
            position="relative"
            width="1400px"
            height="50px"
            border="1px solid black"
          >
            <Text size="20px" bold border="1px solid black">
              프랑스 + 호주
            </Text>
            <Button
              bottomSheetBtn
              height="50px"
              border="1px solid black"
              _onClick={() => {
                // getInfo(targetName, countryName1, countryName2, countryName3);
                history.push('/Detail');
              }}
            >
              정보 보러 가기
            </Button>
          </Div>
        </Div>
      )}
      {/* 바텀시트 끝 */}
    </React.Fragment>
  );
};

export default SubMain2;
