import React, { useState, useContext } from 'react';
import { AppContext } from '../shared/App';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { history } from '../redux/configureStore';
import { countryMainDB } from '../redux/modules/country';

import { BottomSheet, CountryCard, TabMenu } from '../components/core';
import { Button, Div, Image, Input, Text } from '../components/ui';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { RiArrowRightSLine } from 'react-icons/ri';

const SubMain2 = () => {
  const version = useContext(AppContext);
  const dispatch = useDispatch();
  const location = useLocation();
  const pickOneTarget = location.pickTargetKinds;
  const continentList = [
    '남아메리카',
    '북아메리카',
    '아시아',
    '오세아니아',
    '유럽',
  ];

  // 나라별 경로 저장
  const [country, setCountry] = React.useState();
  const pickCountry = location.state;
  localStorage.setItem('country', JSON.stringify(pickCountry));
  React.useEffect(() => {
    const save = localStorage.getItem('country');
    if (save !== null) {
      setCountry(save);
    }
  }, [pickCountry]);

  // 바텀시트 나타나기
  const [bottomSheet, setBottomSheet] = React.useState(false);
  const showBottomSheet = () => {
    if (!bottomSheet) {
      return setBottomSheet(true);
    }
  };

  // 메인에서 나라별 선택시 보여주는 나라 종류
  React.useEffect(() => {
    if (pickCountry) {
      dispatch(countryMainDB());
    }
  }, []);
  const countryData = useSelector((state) => state.country.land);
  const landList = countryData.map((v, i) => v.info);
  console.log(landList);
  // for (let i = 0; i < landList.length; i++) {
  //   for (let j = 0; j < landList.length; i++) {
  //     console.log(landList[i][j].continent);
  //   }
  // }

  // 스크롤 이벤트
  const [scrollY, setScrollY] = useState(0);
  const [btnStatus, setBtnStatus] = useState(false);
  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if(scrollY > 200) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  }
  React.useEffect(() => {
    console.log("ScrollY is ", scrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
  }, [scrollY])

  const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setScrollY(0);  // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  }

  React.useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow)
    }
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow)
    }
  })

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
              history.push({
                pathname: '/SubMain1',
                state: version.vTarget,
              });
            }}
          >
            목적별
          </Button>
          <RiArrowRightSLine size="15" />
          <Text>{pickOneTarget}</Text>
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

              <Div
                flexFlow
                width="100%"
                _onClick={() => {
                  showBottomSheet();
                }}
              >
                {/* map돌리기,나라이름 props(text)로 넘겨주기 */}
                <CountryCard pickCountry={pickCountry} />
                <CountryCard pickCountry={pickCountry} />
                <CountryCard pickCountry={pickCountry} />
                <CountryCard pickCountry={pickCountry} />
                <CountryCard pickCountry={pickCountry} />
                <CountryCard pickCountry={pickCountry} />
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
      { btnStatus &&
        <Button
        className={btnStatus ? "topBtn active" : "topBtn"}
        is_float
        _onClick={() => {
          handleTop();
        }}>
          <Button
            backgroundColor= "#fff" 
            _onClick={() => {
              handleTop();
        }}><MdOutlineKeyboardArrowUp size={33}/></Button>
        </Button> }
      {/* 상단으로 가기 버튼 */}

      {/* 바텀시트(목적별 선택시) */}
      <BottomSheet
        bottomSheet={bottomSheet}
        pickCountry={pickCountry}
        pickOneTarget={pickOneTarget}
      />
      {/* 바텀시트 */}
    </React.Fragment>
  );
};

export default SubMain2;
