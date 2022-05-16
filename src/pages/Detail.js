import React from 'react';
import { useSelector } from 'react-redux';
import { history } from '../redux/configureStore';

import { Header, InfoTotal, TabMenu } from '../components/core';
import { Button, Div, Image, Input, Text } from '../components/ui';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { RiArrowRightSLine } from 'react-icons/ri';

const Detail = () => {
  // ???
  const infoTotal = ['비자', '은행', '언어', '통신', '시차', '교통'];

  // 목적별 데이터
  const vTarget = useSelector((state) => state.target.vTarget);
  const purpose = useSelector((state) => state.target.onePickTargetNameK);
  const targetDetail = useSelector((state) => state.target.countryList);

  // 나라별 데이터
  const vCountry = useSelector((state) => state.country.vCountry);
  const countryName = useSelector((state) => state.country.onePickCountryName);
  const countryDetail = useSelector((state) => state.country.countryList);
  const countryInfo = countryDetail.map((n) => n.info);
  const countryFlag = countryDetail.map((f) => f.flag);

  // 북마크 토글
  const [bookMarkToggle, setBookMarkToggle] = React.useState(true);
  const changeBookMarkToggle = () => {
    bookMarkToggle ? setBookMarkToggle(false) : setBookMarkToggle(true);
  };

  // -----스크롤 이벤트 시작
  const [firstScrollY, setFirstScrollY] = React.useState(0);
  const [secondScrollY, setSecondScrollY] = React.useState(0);
  const [targetStatus, setTargetStatus] = React.useState(false);
  const [btnStatus, setBtnStatus] = React.useState(false);

  // 스크롤시 생기는 요소
  const handleFollow = () => {
    if (firstScrollY > 185) {
      setFirstScrollY(window.pageYOffset);
      setTargetStatus(true);
      setBtnStatus(true);
    } else {
      setFirstScrollY(window.pageYOffset);
      setTargetStatus(false);
      setBtnStatus(false);
    }
  };

  // 클릭시 상단으로 가기
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setSecondScrollY(0);
    setBtnStatus(false);
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
  // -----스크롤 이벤트 종료

  return (
    <React.Fragment>
      <Header></Header>
      {/* 목적별 경로 시작 */}
      {vTarget && (
        <Div flexStart width="1400px" margin=" 10px auto">
          <Button
            color="#0031DE"
            _onClick={() => {
              history.push('/');
            }}
          >
            Home
          </Button>
          <RiArrowRightSLine size={15} color="#0031DE" />
          <Button
            color="#0031DE"
            _onClick={() => {
              history.push('/SubMain1');
            }}
          >
            목적별
          </Button>
          <RiArrowRightSLine size={15} color="#0031DE" />
          <Button
            color="#0031DE"
            _onClick={() => {
              history.push('/SubMain2');
            }}
          >
            {purpose}
          </Button>
          <RiArrowRightSLine size={15} color="#0031DE" />
          <Text color="#0031DE">정보</Text>
        </Div>
      )}
      {/* 목적별 경로 끝 */}

      {/* 나라별 경로 시작 */}
      {vCountry && (
        <Div flexStart width="1400px" margin=" 10px auto">
          <Button
            color="#0031DE"
            _onClick={() => {
              history.push('/');
            }}
          >
            Home
          </Button>
          <RiArrowRightSLine size={15} color="#0031DE" />
          <Button
            color="#0031DE"
            _onClick={() => {
              history.push('/SubMain2');
            }}
          >
            나라별
          </Button>
          <RiArrowRightSLine size={15} color="#0031DE" />
          <Button
            color="#0031DE"
            _onClick={() => {
              history.push('/SubMain1');
            }}
          >
            {countryName}
          </Button>
          <RiArrowRightSLine size={15} color="#0031DE" />
          <Text color="#0031DE">정보</Text>
        </Div>
      )}
      {/* 나라별 경로 끝 */}

      {/* 탭메뉴 */}
      <TabMenu />
      {/* 탭메뉴 */}

      {/* 정보 시작 */}
      {/* 목적별 선택된 나라 */}
      {vTarget && (
        <>
          {targetStatus ? (
            <Div
              center
              position="fixed"
              top="0px"
              right="0px"
              zIndex="1"
              width="100%"
              padding="10px 0px"
              backgroundColor="#9FBAFF"
              border="1px solid black"
            >
              <Div row width="1400px" height="60px" border="1px solid black">
                {targetDetail.map((v, i) => {
                  return (
                    <Div
                      key={i}
                      row
                      width="100%"
                      height="60px"
                      border="1px solid black"
                    >
                      <Image flag src={v.flag} />
                      <Text
                        margin="0px 0px 0px 10px"
                        size="30px"
                        color="white"
                        bold
                      >
                        {v.countryName}
                      </Text>
                    </Div>
                  );
                })}
              </Div>
            </Div>
          ) : (
            <Div
              center
              position="relative"
              width="100%"
              margin="60px 0px 0px 0px"
              padding="10px 0px"
              border="1px solid black"
            >
              <Div row width="1400px" height="60px" border="1px solid black">
                {targetDetail.map((u, i) => {
                  return (
                    <Div
                      key={i}
                      row
                      width="100%"
                      height="60px"
                      border="1px solid black"
                    >
                      <Image flag src={u.flag} />
                      <Text
                        margin="0px 0px 0px 10px"
                        size="30px"
                        color="white"
                        bold
                      >
                        {u.countryName}
                      </Text>
                    </Div>
                  );
                })}
              </Div>
            </Div>
          )}
        </>
      )}
      {/* 목적별 선택된 나라 */}

      {/* 나라별 선택된 목적 */}
      {vCountry && (
        <>
          {targetStatus ? (
            <>
              <Div
                center
                position="fixed"
                top="0px"
                right="0px"
                zIndex="1"
                width="100%"
                padding="10px 0px"
                border="1px solid black"
                backgroundColor="#9FBAFF"
              >
                <Div
                  row
                  position="fixed"
                  top="5px"
                  left="70px"
                  padding="10px 0px"
                >
                  <Image flag src={countryFlag[0]} />
                  <Text
                    margin="0px 0px 0px 10px"
                    size="30px"
                    color="white"
                    bold
                  >
                    {countryName}
                  </Text>
                </Div>
                <Div row width="1400px" height="60px" border="1px solid black">
                  {countryDetail.map((h, i) => {
                    return (
                      <Div
                        key={i}
                        row
                        width="100%"
                        height="60px"
                        border="1px solid black"
                      >
                        <Text margin="0px 0px 0px 10px" size="30px" bold>
                          {h.purpose}
                        </Text>
                      </Div>
                    );
                  })}
                </Div>
              </Div>
            </>
          ) : (
            <>
              <Div
                row
                position="relative"
                width="100%"
                margin="60px 0px 0px 0px"
                padding="10px 0px"
                country
                border="1px solid black"
              >
                <Image flag src={countryFlag[0]} />
                <Text margin="0px 0px 0px 10px" size="30px" color="white" bold>
                  {countryName}
                </Text>
              </Div>
              <Div
                center
                position="relative"
                width="100%"
                padding="10px 0px"
                border="1px solid black"
              >
                <Div row width="1400px" height="60px" border="1px solid black">
                  {countryDetail.map((l, i) => {
                    return (
                      <Div
                        key={i}
                        row
                        width="100%"
                        height="60px"
                        border="1px solid black"
                      >
                        <Text margin="0px 0px 0px 10px" size="30px" bold>
                          {l.purpose}
                        </Text>
                      </Div>
                    );
                  })}
                </Div>
              </Div>
            </>
          )}
        </>
      )}
      {/* 나라별 선택된 목적 */}

      {/* 세부정보 */}
      <Div
        center
        position="relative"
        width="100%"
        margin="0px auto 100px auto"
        border="1px solid black"
      >
        {infoTotal.map((t, i) => {
          if (i < 2) {
            return (
              <InfoTotal
                key={i}
                infoTitle={t}
                vTarget={vTarget}
                vCountry={vCountry}
                isOpen
              />
            );
          } else {
            return (
              <InfoTotal
                key={t + i}
                infoTitle={t}
                vTarget={vTarget}
                vCountry={vCountry}
              />
            );
          }
        })}

        {/* 북마크 시작 */}
        {targetStatus ? (
          <Div bookmark bookmarkFix>
            <Div
              row
              width="100%"
              height="45px"
              lineHeight="45px"
              backgroundColor="white"
              border="1px solid black"
              cursor="pointer"
              _onClick={changeBookMarkToggle}
            >
              <Text bold backgroundColor="white" border="1px solid black">
                북마크
              </Text>
              <MdOutlineKeyboardArrowDown size={15} />
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
        ) : (
          <Div bookmark>
            <Div
              row
              width="100%"
              height="45px"
              lineHeight="45px"
              backgroundColor="white"
              border="1px solid black"
              cursor="pointer"
              _onClick={changeBookMarkToggle}
            >
              <Text bold backgroundColor="white" border="1px solid black">
                북마크
              </Text>
              <MdOutlineKeyboardArrowDown size={15} />
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
        )}
        {/* 북마크 끝 */}
      </Div>
      {/* 세부정보 */}
      {/* 정보 끝 */}

      {/* 상단으로 가기 시작 */}
      {btnStatus && (
        <Button
          className={btnStatus ? 'topBtn active' : 'topBtn'}
          backgroundColor="#fff"
          is_float
          _onClick={() => {
            handleTop();
          }}
        >
          <MdOutlineKeyboardArrowUp size={33} />
        </Button>
      )}
      {/* 상단으로 가기 끝 */}
    </React.Fragment>
  );
};

export default Detail;
