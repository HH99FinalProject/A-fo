import React, { useContext } from 'react';
import { AppContext } from '../shared/App';
import { history } from '../redux/configureStore';

import { Button, Div, Image, Input, Text } from '../components/ui';
import mainBackground from '../styles/images/mainBackground.png';

const Main = () => {
  const version = useContext(AppContext);
  React.useEffect(() => {
    localStorage.removeItem('target');
    localStorage.removeItem('country');
  }, []);

  return (
    <Div
      src={mainBackground}
      backgroundSize="cover"
      repeat="no-repeat"
      backgroundPosition="top"
    >
      <Div
        width="1400px"
        margin="0 auto"
        padding="100px 0px 0px 0px"
        border="1px solid black"
      >
        <Div
          center
          width="750px"
          height="750px"
          margin="0 auto"
          background="#ffffff8c"
          border="1px solid black"
          borderRadius="50%"
        >
          <Text
            height="70px"
            lineHeight="35px"
            margin="20px 0px"
            center
            bold
            size="30px"
            color="#0026AC"
            border="1px solid black"
          >
            All About abroad
            <br />
            information!
          </Text>
          <Text
            height="120px"
            lineHeight="60px"
            margin="40px 0px"
            center
            bold
            size="50px"
            color="#0026AC"
            border="1px solid black"
          >
            해외 정보의 모든 것<br />
            에이포에서 확인하기
          </Text>
          <Text
            height="35px"
            margin="20px 0px"
            center
            bold
            size="25px"
            color="#0026AC"
            border="1px solid black"
          >
            한 눈에 비교해 나에게 맞는 해외 생활을 찾아보세요.
          </Text>
          <Div
            margin="50px 0px 0px 0px"
            fontSize="100px"
            color="#0026AC"
            cursor="pointer"
          >
            ↓
          </Div>
        </Div>
        <Div
          spaceBetween
          width="100%"
          margin="300px 0px 250px 0px"
          border="1px solid black"
        >
          <Div
            center
            border="1px solid black"
            width="50%"
            height="550px"
            background="#ffffff8c"
            cursor="pointer"
            _onClick={() => {
              history.push({
                pathname: '/SubMain1',
                state: version.vTarget,
              });
            }}
          >
            <Text
              height="120px"
              lineHeight="60px"
              bold
              size="50px"
              center
              color="#0026AC"
              margin="10px 0px"
            >
              목적별 정보를
              <br /> 찾고 있나요?
            </Text>
            <Text size="20px" color="#5A5A5A" margin="10px 0px">
              이민 / 유학 / 워홀 / 취업
            </Text>
          </Div>
          <Div
            center
            border="1px solid black"
            width="50%"
            height="550px"
            background="#ffffff8c"
            cursor="pointer"
            _onClick={() => {
              history.push({
                pathname: '/SubMain2',
                state: version.vCountry,
              });
              window.scrollTo(0, 0);
            }}
          >
            <Text
              height="120px"
              lineHeight="60px"
              bold
              size="50px"
              center
              color="#0026AC"
              margin="10px 0px"
            >
              나라별 정보를
              <br /> 찾고 있나요?
            </Text>
            <Text size="20px" color="#5A5A5A" margin="10px 0px">
              남아메리카 / 북아메리카 / 아시아 / 오세아니아 / 유럽
            </Text>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default Main;
