import React from 'react';
import { useDispatch } from 'react-redux';
import { history } from '../redux/configureStore';
import {
  setVTargetReducer,
  resetVTargetReducer,
} from '../redux/modules/target';
import {
  setVCountryReducer,
  resetVCountryReducer,
  countryMainDB,
} from '../redux/modules/country';

import { Header } from '../components/core';
import { Div, Text, Image } from '../components/ui';
import mainBackground from '../styles/images/mainBG.png';
import footer from '../styles/images/footer.png';
import arrow from '../styles/images/arrow.png';
import mainCountry from '../styles/images/mainCountry.png';
import mainTarget from '../styles/images/mainTarget.png';
import mainPick from '../styles/images/mainPick.png';

const Main = () => {
  const dispatch = useDispatch();

  const vTarget = 'target';
  const vCountry = 'country';

  return (
    <React.Fragment>
      <Header></Header>
      <Div
        width="100%"
        src={mainBackground}
        backgroundColor="#406bff"
        backgroundSize="contain"
        repeat="no-repeat"
        backgroundPosition="center"
      >
        <Div
          display="flex"
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="space-between"
          width="1400px"
          margin="0 auto"
        >
          <Div width="800px" margin="70px 0px">
            <Text
              width="320px"
              height="45px"
              lineHeight="45px"
              margin="20px 0px"
              padding="0px 10px"
              center
              backgroundColor="#DCFFAF"
              bold
              size="20px"
              radius="5px"
            >
              All About abroad information!
            </Text>
            <Div
              flexStart
              height="200px"
              margin="40px 0px"
              padding="10px 0px"
              borderBottom="3px solid white"
            >
              <Text size="70px" lineHeight="90px" color="white">
                <span style={{ fontWeight: '900' }}>해외 정보</span>의 모든 것
                <br />
                <span style={{ fontWeight: '900' }}>에이포</span>에서{' '}
                <span style={{ fontWeight: '900' }}>비교하기</span>
              </Text>
            </Div>
            {/* <hr style={{ width: '600px' }} /> */}
            <Text
              height="35px"
              margin="20px 0px"
              bold
              size="27px"
              color="white"
            >
              한 눈에 비교해 나에게 맞는 해외 생활을 찾아보세요.👀
            </Text>
          </Div>
          <Div>
            <Div
              width="330px"
              height="410px"
              padding="30px"
              background="#ffffffb8"
              border="1px solid #204CE5"
              BGHover="#DCFFAF"
              cursor="pointer"
              transition="all 0.7s"
              _onClick={() => {
                dispatch(resetVCountryReducer(vCountry));
                dispatch(setVTargetReducer(vTarget));
                history.push('/SubMain1');
                window.scrollTo(0, 0);
              }}
            >
              <Div width="100%" height="290px">
                <Image
                  width="65px"
                  height="60px"
                  src={mainTarget}
                  size="cover"
                  repeat="no-repeat"
                  position="center"
                />
                <Text
                  lineHeight="40px"
                  bold
                  color="#3A3A3A"
                  size="30px"
                  margin="10px 0px"
                >
                  어떤 해외생활을 <br /> 찾고 있나요?
                </Text>
                <Text size="16px" color="#565656" margin="10px 0px">
                  워홀 • 유학 • 취업 • 이민
                </Text>
              </Div>
              <Div
                spaceBetween
                width="100%"
                height="50px"
                padding="10px 30px"
                size="20px"
                backgroundColor="white"
                border="2px solid #204CE5"
                borderRadius="60px"
              >
                <Text width="auto" size="20px" color="#5281FA">
                  정보 보러가기
                </Text>
                <Image
                  width="40px"
                  height="20px"
                  src={arrow}
                  size="contain"
                  repeat="no-repeat"
                  position="center"
                />
              </Div>
            </Div>
            <Div
              width="330px"
              height="410px"
              padding="30px"
              background="#ffffffb8"
              border="1px solid #204CE5"
              BGHover="#DCFFAF"
              cursor="pointer"
              transition="all 0.7s"
              _onClick={() => {
                dispatch(resetVTargetReducer(vTarget));
                dispatch(setVCountryReducer(vCountry));
                dispatch(countryMainDB());
                history.push('/SubMain2');
                window.scrollTo(0, 0);
              }}
            >
              <Div width="100%" height="290px">
                <Image
                  width="65px"
                  height="60px"
                  src={mainCountry}
                  size="contain"
                  repeat="no-repeat"
                  position="center"
                />
                <Text
                  lineHeight="40px"
                  bold
                  color="#3A3A3A"
                  size="30px"
                  margin="10px 0px"
                >
                  어떤 나라정보를 <br /> 찾고 있나요?
                </Text>
                <Text
                  size="16px"
                  lineHeight="30px"
                  color="#565656"
                  margin="10px 0px"
                >
                  유럽 • 오세아니아 • 아시아 •
                  <br /> 북아메리카
                </Text>
              </Div>
              <Div
                spaceBetween
                width="100%"
                height="50px"
                padding="10px 30px"
                size="20px"
                backgroundColor="white"
                border="2px solid #204CE5"
                borderRadius="60px"
              >
                <Text width="auto" size="20px" color="#5281FA">
                  정보 보러가기
                </Text>
                <Image
                  width="40px"
                  height="20px"
                  src={arrow}
                  size="contain"
                  repeat="no-repeat"
                  position="center"
                />
              </Div>
            </Div>
          </Div>
        </Div>
        <Div
          width="100%"
          height="80px"
          borderTop="1px solid #0031DE"
          backgroundColor="White"
          src={footer}
          backgroundSize="cover"
          repeat="no-repeat"
          backgroundPosition="center"
        ></Div>
      </Div>
    </React.Fragment>
  );
};

export default Main;
