import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../redux/configureStore';
import { targetSub1DB } from '../redux/modules/target';
import { countryMainDB } from '../redux/modules/country';

import { BottomSheet, CountryCard, TabMenu } from '../components/core';
import { Button, Div, Image, Input, Text } from '../components/ui';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { RiArrowRightSLine } from 'react-icons/ri';

const SubMain2 = () => {
  const dispatch = useDispatch();
  const vTarget = useSelector((state) => state.target.vTarget);
  const vCountry = useSelector((state) => state.country.vCountry);
  const purpose = useSelector((state) => state.target.onePickTargetNameK);
  const purposeEng = useSelector((state) => state.target.onePickTargetNameE);
  const countryData_vTarget = useSelector(
    (state) => state.target.purpose?.land
  );
  const countryData_vCountry = useSelector((state) => state.country.land);

  // Sub1에서 목적 선택시 나라 종류
  React.useEffect(() => {
    if (vTarget) {
      dispatch(targetSub1DB(purpose));
    }
  }, [vTarget]);

  // 메인에서 vCountry 선택시 나라 종류
  React.useEffect(() => {
    if (vCountry) {
      dispatch(countryMainDB());
    }
  }, [vCountry]);

  // 바텀시트 나타나기
  const [bottomSheet, setBottomSheet] = React.useState(false);
  const showBottomSheet = () => {
    if (!bottomSheet) {
      return setBottomSheet(true);
    }
  };

  // 바텀시트 값(목적별)
  const [addList, setAddList] = React.useState([]);
  const addCountry = (countryName) => {
    if (addList.length < 4) {
      setAddList([...addList, countryName]);
      if (addList.includes(countryName) === true) {
        setAddList(addList?.filter((el) => el !== countryName));
      }
    } else if (addList.length >= 4) {
      setAddList(addList?.filter((el) => el !== countryName));
    }
  };

  // -----스크롤 이벤트
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
      {/* 목적별 경로 시작 */}
      {vTarget && (
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
              });
            }}
          >
            목적별
          </Button>
          <RiArrowRightSLine size="15" />
          <Text>{purpose}</Text>
        </Div>
      )}
      {/* 목적별 경로 끝 */}

      {/* 나라별 경로 시작 */}
      {vCountry && (
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

      {/* 탭메뉴 */}
      <TabMenu />

      {/* 목적별 나라 리스트 */}
      {vTarget && (
        <Div center width="1400px" margin="50px auto">
          {countryData_vTarget?.map((v, i, arr) => {
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
                    {v.continent}
                  </Text>
                </Div>
                <Div flexFlow width="100%">
                  {arr[i].countryInfo?.map((l, i) => {
                    return (
                      <CountryCard
                        key={l + i}
                        {...l}
                        vTarget={vTarget}
                        showBottomSheet={showBottomSheet}
                        addCountry={addCountry}
                      />
                    );
                  })}
                  {arr[i].emptyInfo?.map((h, i) => {
                    return (
                      <Div key={h + i} preparingCountry>
                        <Image flag src={h.flag} />
                        <Text size="16px" margin="20px 0px">
                          {h.countryName}
                        </Text>
                        <Text size="16px">{h.engName}</Text>
                      </Div>
                    );
                  })}
                </Div>
              </Div>
            );
          })}
        </Div>
      )}
      {/* 목적별 나라 리스트 */}

      {/* 나라별 나라 리스트 */}
      {vCountry && (
        <Div center width="1400px" margin="50px auto">
          {countryData_vCountry.map((y, i, arr) => {
            return (
              <Div
                key={y + i}
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
                    {y.continent}
                  </Text>
                </Div>
                <Div flexFlow width="100%">
                  {arr[i].countryInfo?.map((u, i) => {
                    return (
                      <CountryCard
                        key={u + i}
                        {...u}
                        vCountry={vCountry}
                        showBottomSheet={showBottomSheet}
                      />
                    );
                  })}
                  {arr[i].emptyInfo?.map((e, i) => {
                    return (
                      <Div key={e + i} preparingCountry>
                        <Image flag src={e.flag} />
                        <Text size="16px" margin="20px 0px">
                          {e.countryName}
                        </Text>
                        <Text size="16px">{e.engName}</Text>
                      </Div>
                    );
                  })}
                </Div>
              </Div>
            );
          })}
        </Div>
      )}
      {/* 나라별 나라 리스트 */}

      {/* 상단으로 가기 버튼 */}
      {btnStatus && (
        <Button
          className={btnStatus ? 'topBtn active' : 'topBtn'}
          is_float
          _onClick={() => {
            handleTop();
          }}
        >
          <MdOutlineKeyboardArrowUp size={33} />
        </Button>
      )}
      {/* 상단으로 가기 버튼 */}

      {/* 바텀시트(목적별 선택시) */}
      {vTarget && (
        <BottomSheet
          bottomSheet={bottomSheet}
          vTarget={vTarget}
          purposeEng={purposeEng}
          addList={addList}
        />
      )}

      {/* 바텀시트 */}
    </React.Fragment>
  );
};

export default SubMain2;
