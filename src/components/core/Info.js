import React, { useState } from 'react';

import { Button, Div, Image, Input, Text } from '../ui';

const Info = (props) => {
  // const [visaToggle, setVisaToggle] = useState(true);
  // const [phoneToggle, setPhoneToggle] = useState(false);
  // const [bankToggle, setBankToggle] = useState(false);
  // const [languageToggle, setLanguageToggle] = useState(false);
  // const [timeToggle, setTimeToggle] = useState(false);
  // const [trafficToggle, setTrafficToggle] = useState(false);

  // const changeVisaToggle = () => {
  //   !visaToggle ? setVisaToggle(true) : setVisaToggle(false);
  // };
  // const changePhoneToggle = () => {
  //   !phoneToggle ? setPhoneToggle(true) : setPhoneToggle(false);
  // };
  // const changeBankToggle = () => {
  //   !bankToggle ? setBankToggle(true) : setBankToggle(false);
  // };
  // const changeLanguageToggle = () => {
  //   !languageToggle ? setLanguageToggle(true) : setLanguageToggle(false);
  // };
  // const changeTimeToggle = () => {
  //   !timeToggle ? setTimeToggle(true) : setTimeToggle(false);
  // };
  // const changeTrafficToggle = () => {
  //   !trafficToggle ? setTrafficToggle(true) : setTrafficToggle(false);
  // };
  const title = props.title;
  console.log(title);
  const infoSubTitle = ['휴대전화 개통방식', '주요 통신사', '추천 요금제'];

  const country = props.country;  // 0번,1번인덱스 들어감
  const info = country.map((v) => v.info); 
  const detail = info.map((l) => l.visa);
  console.log(info, detail);


  return (
    // 목적별
    <Div
      position="relative"
      width="350px"
      padding="40px 0px"
      overflow="hidden"
      border="1px solid black"
      backgroundColor="white"
    >
      {/* 북마크 전 */}
      {/* <Button bookmarkBtn border="1px solid black"></Button> */}
      {/* 북마크 전 */}

      {/* 북마크 후 */}
      <Button
        bookmarkBtn
        complete
        backgroundColor="white"
        border="1px solid black"
      ></Button>
      {/* 북마크 후 */}
      {infoSubTitle.map((v, i) => {
        return (
          <Div
            key={v + i}
            width="100%"
            padding="20px"
            border="1px solid black"
            backgroundColor="white"
          >
            <Text
              width="100%"
              height="35px"
              padding="5px"
              backgroundColor="#CEC1FF"
              border="1px solid black"
              size="16px"
              bold
            >
              ● {v}
            </Text>
            <Text
              width="100%"
              lineHeight="20px"
              padding="5px"
              backgroundColor="#CEC1FF"
              border="1px solid black"
            >
              1. 한국에서 이용하던 휴대전화를 그대로 로밍해서 이용 가능하나
              수수료가 많이 나온다.
              <br /> <br />
              2. 선불결제 휴대폰 <br /> 통화요금이 저렴하고, 기본요금 없고,
              사용할 만큼의 통화요금만 미리 충전시켜 이용한다.
              <br /> <br />
              3. 후불결제 <br /> 약정기간을 정해야하며 요금이 비싸다
            </Text>
          </Div>
        );
      })}


    </Div>

    // 나라별
  );
};

export default Info;
