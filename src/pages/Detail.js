import React, { useContext } from 'react';
import { AppContext } from '../shared/App';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { history } from '../redux/configureStore';
import { getTargetInfo } from '../redux/modules/target';

import { Info, InfoTotal, TabMenu } from '../components/core';
import { Button, Div, Image, Input, Text } from '../components/ui';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { RiArrowRightSLine } from 'react-icons/ri';
import australia from '../styles/images/australia.png';

import Data from '../redux/data';

const Detail = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const version = useContext(AppContext);
  const pickOneTarget = location.pickTargetKinds;
  const localTarget = localStorage.getItem('target');
  const targetName = '취업';
  const countryName1 = '중국';
  const countryName2 = '베트남';
  const countryName3 = '일본';

  useEffect(() => {
    dispatch(
      getTargetInfo(targetName, countryName1, countryName2, countryName3)
    );
  }, []);

  const title = [
    { korea: '비자', english: 'visa' },
    { korea: '은행', english: 'bank' },
  ];
  const infoTitle = title.map((l, i) => l);

  const country = Data.countryList;
  const countryName = country.map((v) => v.countryName);

  // React.useEffect(() => {
  //   localStorage.removeItem('target');
  // }, []);

  // 토글
  const [bookMarkToggle, setBookMarkToggle] = React.useState(true);
  const changeBookMarkToggle = () => {
    bookMarkToggle ? setBookMarkToggle(false) : setBookMarkToggle(true);
  };

  // 스크롤 이벤트
  const [scrollY, setScrollY] = React.useState(0);
  const [btnStatus, setBtnStatus] = React.useState(false);
  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > 200) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setScrollY(0); 
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  };

  React.useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow);
    };
  });

  const [toggle, setToggle] = React.useState(true);
  const changeToggle = () => {
    !toggle ? setToggle(true) : setToggle(false);
  };

  return (
    <React.Fragment>
      {/* 목적별 경로 시작 */}
      {localTarget && (
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
              history.push({
                pathname: '/SubMain1',
                state: version.vTarget,
              });
            }}
          >
            목적별
          </Button>
          <RiArrowRightSLine size="15" />
          <Button
            _onClick={() => {
              history.push({
                pathname: '/SubMain2',
                pickTargetKinds: pickOneTarget,
              });
            }}
          >
            {pickOneTarget}
          </Button>
          <RiArrowRightSLine size="15" />
          <Text>정보</Text>
        </Div>
      )}
      {/* 목적별 경로 끝 */}

      {/* 나라별 경로 시작 */}
      {!localTarget && (
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
              history.push({
                pathname: '/SubMain2',
                state: version.vCountry,
              });
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
            ?
          </Button>
          <RiArrowRightSLine size="15" />
          <Text>정보</Text>
        </Div>
      )}
      {/* 나라별 경로 끝 */}

      {/* 탭메뉴 */}
      <TabMenu />
      {/* 탭메뉴 */}

      {/* 정보 시작 */}

      {/* 선택된 목적or나라 */}
      <Div
        center
        position="relative"
        width="100%"
        margin="60px 0px 0px 0px"
        padding="10px 0px"
        border="1px solid black"
      >
        <Div row width="1400px" height="60px" border="1px solid black">
          {countryName.map((p, i) => {
            // console.log(p) // 나라들
            return (
              <Div
                key={p + i}
                row
                width="100%"
                height="60px"
                border="1px solid black"
              >
                <Image flag src={australia} />
                <Text margin="0px 0px 0px 10px" size="20px" color="white" bold>
                  {p}
                </Text>
              </Div>
            );
          })}
        </Div>
      </Div>

      {/* 선택된 목적or나라 */}

      {/* 세부정보 */}
      <Div
        center
        position="relative"
        width="100%"
        margin="0px auto 100px auto"
        border="1px solid black"
      >
        {infoTitle.map((t, i) => {
          // console.log(t) // 비자, 은행
          return (
            <InfoTotal
              key={t + i}
              textK={t.korea}
              textB={t.english}
              country={country}
            />
            // <React.Fragment>
            // <Div key={t + i} _onClick={()=>{changeToggle();}} row width="100%" height="100px" backgroundColor="#d2dfff" border="1px solid #000">
            //   <Text width="auto" margin="0 5px" border="1px solid #000" size="16px" bold>
            //     {t.korea} ▼
            //   </Text>
            // </Div>
            // {toggle ?
            //   <Div width="100%" display="flex" flexDirection="row" alignItems="flex-start" justifyContent="space-between">
            //     {country.map((v, index) => {
            //       return (
            //         <Info key={v + index} title={t.english} country={country} {...v} />
            //       ) 
            //     })}
            //   </Div>  
            // : null}
            // </React.Fragment>
          );
        })}

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
                backgroundColor="#D2DFFF"
                border="1px solid black"
              >
                <Text margin="10px" size="20px" bold>
                  워홀
                </Text>
                <Text margin="10px">비자</Text>
                <Text margin="10px">대사관</Text>
              </Div>

              <Div
                width="100%"
                margin="5px 0px"
                backgroundColor="#D2DFFF"
                border="1px solid black"
              >
                <Text margin="10px" size="20px" bold>
                  유학
                </Text>
                <Text margin="10px">비자</Text>
                <Text margin="10px">교통</Text>
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
      </Div>
      {/* 세부정보 */}
      {/* 정보 끝 */}

      {/* 상단으로 가기 시작 */}
        { btnStatus &&
          <Button
            className={btnStatus ? 'topBtn active' : 'topBtn'}
            backgroundColor="#fff"
            is_float
            _onClick={() => {
              handleTop();
        }}><MdOutlineKeyboardArrowUp size={33}/></Button>}
      {/* 상단으로 가기 끝 */}
    </React.Fragment>
  );
};

export default Detail;
