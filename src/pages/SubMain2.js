import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { history } from '../redux/configureStore';
import { getTargetInfo } from '../redux/modules/target';

import { CountryCard } from '../components/core';
import { Button, Div, Image, Input, Text } from '../components/ui';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { RiArrowRightSLine } from 'react-icons/ri';

const SubMain2 = () => {
  // const dispatch = useDispatch();
  // const targetName = '취업';
  // const countryName1 = '중국';
  // const countryName2 = '베트남';
  // const countryName3 = '일본';
  // const getInfo = () => {
  //   dispatch(
  //     getTargetInfo(targetName, countryName1, countryName2, countryName3)
  //   );
  // };

  const location = useLocation();
  const country = location.version;

  return (
    <React.Fragment>
      {/* 목적별 시작 */}
      {/* 경로 시작 */}
      {!country && (
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
      {/* 경로 끝 */}
      {!country && (
        <Div
          rowStart
          width="1400px"
          margin="150px auto 0px auto"
          border="1px solid black"
        >
          <Div width="260px" border="1px solid black">
            <Text border="1px solid black">남아메리카</Text>
            <CountryCard color={'#ffb5d2'} country={'칠레'} />
            <CountryCard color={'#ffb5d2'} />
            <CountryCard color={'#ffb5d2'} />
            <CountryCard color={'#ffb5d2'} />
          </Div>

          <Div width="260px" border="1px solid black">
            <Text border="1px solid black">북아메리카</Text>
            <CountryCard color={'#faff89'} />
            <CountryCard color={'#faff89'} />
            <CountryCard color={'#faff89'} />
          </Div>

          <Div width="260px" border="1px solid black">
            <Text border="1px solid black">아시아</Text>
            <CountryCard color={'#89ffd1'} />
            <CountryCard color={'#89ffd1'} />
            <CountryCard color={'#89ffd1'} />
            <CountryCard color={'#89ffd1'} />
            <CountryCard color={'#89ffd1'} />
          </Div>

          <Div width="260px" border="1px solid black">
            <Text border="1px solid black">오세아니아</Text>
            <CountryCard color={'#ffc389'} />
            <CountryCard color={'#ffc389'} />
            <CountryCard color={'#ffc389'} />
            <CountryCard color={'#ffc389'} />
          </Div>

          <Div width="260px" border="1px solid black">
            <Text border="1px solid black">유럽</Text>
            <CountryCard color={'#89b4ff'} />
            <CountryCard color={'#89b4ff'} />
          </Div>
        </Div>
      )}
      {/* 바텀시트 시작 */}
      {!country && (
        <Div bottomSheet border="1px solid black">
          <Div
            center
            position="relative"
            width="1400px"
            height="50px"
            border="1px solid black"
          >
            <Text border="1px solid black">유학 + 워홀</Text>
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
      {/* 목적별 끝  */}
      {/* 나라별 시작 */}
      {/* 경로 시작 */}
      {country && (
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
      {/* 경로 끝 */}
      {country && (
        <Div
          rowStart
          width="1400px"
          margin="150px auto 0px auto"
          border="1px solid black"
        >
          <Div width="260px" border="1px solid black">
            <Text border="1px solid black">남아메리카</Text>
            <CountryCard color={'#ffb5d2'} country={'칠레'} />
            <CountryCard color={'#ffb5d2'} />
            <CountryCard color={'#ffb5d2'} />
            <CountryCard color={'#ffb5d2'} />
          </Div>

          <Div width="260px" border="1px solid black">
            <Text border="1px solid black">북아메리카</Text>
            <CountryCard color={'#faff89'} />
            <CountryCard color={'#faff89'} />
            <CountryCard color={'#faff89'} />
          </Div>

          <Div width="260px" border="1px solid black">
            <Text border="1px solid black">아시아</Text>
            <CountryCard color={'#89ffd1'} />
            <CountryCard color={'#89ffd1'} />
            <CountryCard color={'#89ffd1'} />
            <CountryCard color={'#89ffd1'} />
            <CountryCard color={'#89ffd1'} />
          </Div>

          <Div width="260px" border="1px solid black">
            <Text border="1px solid black">오세아니아</Text>
            <CountryCard color={'#ffc389'} />
            <CountryCard color={'#ffc389'} />
            <CountryCard color={'#ffc389'} />
            <CountryCard color={'#ffc389'} />
          </Div>

          <Div width="260px" border="1px solid black">
            <Text border="1px solid black">유럽</Text>
            <CountryCard color={'#89b4ff'} />
            <CountryCard color={'#89b4ff'} />
          </Div>
        </Div>
      )}
      {/* 나라별 끝 */};
      <Button is_float>
        <MdOutlineKeyboardArrowUp />
      </Button>
    </React.Fragment>
  );
};

export default SubMain2;
