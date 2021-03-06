import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../redux/configureStore';
import { targetSub1DB } from '../redux/modules/target';
import { countryMainDB } from '../redux/modules/country';

import { Header, BottomSheet, CountryCard, TabMenu } from '../components/core';
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
  const description = useSelector(
    (state) => state.target.purpose?.description
  )?.split('A');
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

  // 바텀시트 없애기
  const hideBottomSheet = () => {
    if (bottomSheet) {
      return setBottomSheet(false);
    }
  };

  // 바텀시트 값 추가,제거(목적별)
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

  // 바텀시트 값 부분제거(목적별)
  // const [removeBtn, setRemoveBtn] = React.useState(false);
  // const removeCountry = (countryName, boolean) => {
  //   if (addList.length > 0 && setRemoveBtn(boolean)) {
  //     setAddList(addList?.filter((el) => el !== countryName));
  //   }
  // };

  // 바텀시트 값 전체제거(목적별)
  const removeAllCountry = () => {
    if (addList.length >= 0) {
      return setAddList([]);
    }
  };

  // -----스크롤 이벤트
  const [btnStatus, setBtnStatus] = React.useState(false);
  // 스크롤시 생기는 요소
  const handleFollow = () => {
    if (window.pageYOffset > 200 && !btnStatus) {
      setBtnStatus(true);
    } else if (window.pageYOffset <= 200 && btnStatus) {
      setBtnStatus(false);
    }
  };
  // 클릭시 상단으로 가기
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setBtnStatus(false);
  };
  // 이벤트 적용
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
            size="15px"
            color="#0031DE"
            _onClick={() => {
              history.push('/');
            }}
          >
            Home
          </Button>
          <RiArrowRightSLine size="15" color="#0031DE" />
          <Button
            size="15px"
            color="#0031DE"
            _onClick={() => {
              history.push('/SubMain1');
            }}
          >
            목적별
          </Button>
          <RiArrowRightSLine size="15" color="#0031DE" />
          <Button size="15px" color="#0031DE" cursor="text">
            {purpose}
          </Button>
        </Div>
      )}
      {/* 목적별 경로 끝 */}

      {/* 나라별 경로 시작 */}
      {vCountry && (
        <Div flexStart width="1400px" margin=" 10px auto">
          <Button
            size="15px"
            color="#0031DE"
            _onClick={() => {
              history.push('/');
            }}
          >
            Home
          </Button>
          <RiArrowRightSLine size="15" color="#0031DE" />
          <Button size="15px" color="#0031DE" cursor="text">
            나라별
          </Button>
        </Div>
      )}
      {/* 나라별 경로 끝 */}

      {/* 페이지 설명 */}
      <Div center width="1400px" margin="90px auto 0px auto">
        <Text
          height="50px"
          lineHeight="50px"
          size="40px"
          color="#0031DE"
          bold
          center
        >
          {vTarget ? purpose + '!' : ''} 어떤 나라 정보가 필요한가요?
        </Text>
        <hr
          style={{
            width: '650px',
            borderBottom: '4px solid #0031DE',
            margin: '20px 0px 30px 0px',
          }}
        />
        {vTarget &&
          description?.map((v) => {
            return (
              <Text
                height="35px"
                lineHeight="35px"
                size="20px"
                color="#0031DE"
                center
              >
                {v}
              </Text>
            );
          })}
      </Div>

      {/* 탭메뉴 */}
      <TabMenu />

      {/* 목적별 나라 리스트 */}
      {vTarget && (
        <Div center width="1400px" margin="0px auto 80px auto">
          {countryData_vTarget?.map((v, i, arr) => {
            return (
              <Div
                key={v + i}
                center
                width="100%"
                margin="50px auto"
                borderLeft="1px solid #0031DE"
              >
                <Div
                  width="100%"
                  borderTop="1px solid #0031DE"
                  borderRight="1px solid #0031DE"
                  borderBottom="1px solid #0031DE"
                >
                  <Text
                    height="60px"
                    lineHeight="60px"
                    center
                    bold
                    color="#3A3A3A"
                    size="20px"
                    backgroundColor="#D2DFFF"
                  >
                    {v.continent}
                  </Text>
                </Div>
                <Div flexFlow width="100%">
                  {arr[i].countryInfo?.map((c, i) => {
                    return (
                      <CountryCard
                        key={c + i}
                        {...c}
                        vTarget={vTarget}
                        showBottomSheet={showBottomSheet}
                        addCountry={addCountry}
                        addListLength={addList.length}
                      />
                    );
                  })}
                  {arr[i].emptyInfo?.map((e, j) => {
                    return (
                      <Div key={e + j} preparingCountry>
                        <Div center width="234px" height="340px">
                          <Text size="22px" bold color="#3A3A3A">
                            {e.countryName}
                          </Text>
                          <Text
                            margin="35px 0px 45px 0px"
                            size="12px"
                            color="#3A3A3A"
                          >
                            {e.engName}
                          </Text>
                          <Image flag src={e.flag} />
                        </Div>
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
                borderLeft="1px solid #0031DE"
              >
                <Div
                  width="100%"
                  borderTop="1px solid #0031DE"
                  borderRight="1px solid #0031DE"
                  borderBottom="1px solid #0031DE"
                >
                  <Text
                    height="60px"
                    lineHeight="60px"
                    center
                    bold
                    size="20px"
                    color="#3A3A3A"
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
                  {arr[i].emptyInfo?.map((e, j) => {
                    return (
                      <Div key={e + j} preparingCountry>
                        <Div center width="234px" height="340px">
                          <Text size="22px" bold color="#3A3A3A">
                            {e.countryName}
                          </Text>
                          <Text
                            margin="35px 0px 45px 0px"
                            size="12px"
                            color="#3A3A3A"
                          >
                            {e.engName}
                          </Text>
                          <Image flag src={e.flag} />
                        </Div>
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
          is_float
          _onClick={() => {
            handleTop();
          }}
        >
          <MdOutlineKeyboardArrowUp size={30} color="#0031DE" />
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
          addCountry={addCountry}
          hideBottomSheet={hideBottomSheet}
          removeAllCountry={removeAllCountry}
        />
      )}

      {/* 바텀시트 */}
    </React.Fragment>
  );
};

export default SubMain2;
