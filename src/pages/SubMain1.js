import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../redux/configureStore';

import { Header, BottomSheet, TargetCard } from '../components/core';
import { Button, Div, Image, Input, Text } from '../components/ui';
import { RiArrowRightSLine } from 'react-icons/ri';

const SubMain1 = (props) => {
  const dispatch = useDispatch();
  const vTarget = useSelector((state) => state.target.vTarget);
  const vCountry = useSelector((state) => state.country.vCountry);
  const targetList_vCountry = useSelector((state) => state.country.land);
  const targetList_vTarget = [
    { korean: '이민', english: 'immigrationVisa' },
    { korean: '취업', english: 'workVisa' },
    { korean: '유학', english: 'studyVisa' },
    { korean: '워홀', english: 'workingHolidayVisa' },
  ];
  const countryName = useSelector((state) => state.country.onePickCountryName);

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

  // 바텀시트 값 추가(나라별)
  const [addList, setAddList] = React.useState([]);
  const addTarget = (targetName) => {
    if (addList.length < 4) {
      setAddList([...addList, targetName]);
      if (addList.includes(targetName) === true) {
        setAddList(addList?.filter((el) => el !== targetName));
      }
    } else if (addList.length >= 4) {
      setAddList(addList?.filter((el) => el !== targetName));
    }
  };

  // 바텀시트 값 제거(나라별)
  const removeTarget = () => {
    if (addList.length >= 0) {
      return setAddList([]);
    }
  };

  return (
    <React.Fragment>
      <Header></Header>
      {/* 목적별 시작 */}
      {/* 경로 시작 */}
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
          <RiArrowRightSLine size="15" color="#0031DE" />
          <Text color="#0031DE">목적별</Text>
        </Div>
      )}
      {/* 경로 끝 */}

      {/* 목적별 선택 시작 */}
      {vTarget && (
        <Div center width="1400px" margin="0px auto">
          {/* 페이지 설명 */}
          <Div center width="1400px" margin="90px auto">
            <Text
              height="50px"
              lineHeight="50px"
              size="40px"
              color="#0031DE"
              bold
              center
            >
              어떤 해외정보가 필요한가요?
            </Text>
            <hr
              style={{
                width: '800px',
                borderBottom: '4px solid #0031DE',
                margin: '20px 0px 30px 0px',
              }}
            />
            <Text
              height="90px"
              lineHeight="30px"
              size="20px"
              color="#0031DE"
              center
            >
              시작할 때 가장 어려운 건, 어디에서 어떻게 시작해야 할지 모르겠다는
              거죠!
              <br />
              걱정 마세요, 에이포에서 필요한 해외정보들을 모아 정리했어요.
              <br /> 여러분께 필요한 해외생활을 골라 보고 비교해보세요.
              <br />
            </Text>
          </Div>

          <Div row width="1400px" margin="0px auto">
            {targetList_vTarget.map((l, i) => {
              return (
                <TargetCard
                  key={l + i}
                  purpose={l.korean}
                  purposeEng={l.english}
                  vTarget={vTarget}
                  addList={addList}
                />
              );
            })}
          </Div>
        </Div>
      )}
      {/* 목적별 선택 끝 */}
      {/* 목적별 끝 */}

      {/* 나라별 시작 */}
      {/* 경로 시작 */}
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
          <RiArrowRightSLine size="15" color="#0031DE" />
          <Button
            color="#0031DE"
            _onClick={() => {
              history.push({
                pathname: '/SubMain2',
              });
            }}
          >
            나라별
          </Button>
          <RiArrowRightSLine size="15" color="#0031DE" />
          <Text color="#0031DE">{countryName}</Text>
        </Div>
      )}
      {/* 경로 끝 */}

      {/* 나라별 선택 시작 */}
      {vCountry && (
        <Div center width="1400px" margin=" 0px auto">
          {/* 페이지 설명 */}
          <Div center width="1400px" margin="90px auto">
            <Text
              height="50px"
              lineHeight="50px"
              size="40px"
              color="#0031DE"
              bold
              center
            >
              {countryName}의 어떤 정보가 필요한가요?
            </Text>
            <hr
              style={{
                width: '800px',
                borderBottom: '4px solid #0031DE',
                margin: '20px 0px 30px 0px',
              }}
            />
          </Div>

          <Div row width="1400px" margin="0px auto">
            {targetList_vCountry.map((h, i) => {
              return (
                <TargetCard
                  key={h + i}
                  {...h}
                  vCountry={vCountry}
                  showBottomSheet={showBottomSheet}
                  addTarget={addTarget}
                />
              );
            })}
          </Div>
        </Div>
      )}
      {/* 나라별 선택 끝 */}

      {/* 바텀시트(나라별 선택시) */}
      <BottomSheet
        bottomSheet={bottomSheet}
        vCountry={vCountry}
        countryName={countryName}
        addList={addList}
        hideBottomSheet={hideBottomSheet}
        removeTarget={removeTarget}
      />
      {/* 바텀시트 끝 */}
      {/* 나라별 끝 */}
    </React.Fragment>
  );
};

export default SubMain1;
