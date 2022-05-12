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

  // 바텀시트 값(나라별)
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

  return (
    <React.Fragment>
      <Header></Header>
      {/* 목적별 시작 */}
      {/* 경로 시작 */}
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
          <Text>목적별</Text>
        </Div>
      )}
      {/* 경로 끝 */}

      {/* 목적별 선택 시작 */}
      {vTarget && (
        <Div
          center
          width="1400px"
          margin="150px auto 0px auto"
          border="1px solid black"
        >
          <Text size="40px">어떤 목적으로 정보를 찾고 계세요?</Text>
          <Div
            spaceBetween
            width="1400px"
            margin="120px auto 0px auto"
            border="1px solid black"
          >
            {targetList_vTarget.map((l, i) => {
              return (
                <TargetCard
                  key={l + i}
                  purpose={l.korean}
                  purposeEng={l.english}
                  vTarget={vTarget}
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
              });
            }}
          >
            나라별
          </Button>
          <RiArrowRightSLine size="15" />
          <Text>{countryName}</Text>
        </Div>
      )}
      {/* 경로 끝 */}

      {/* 나라별 선택 시작 */}
      {vCountry && (
        <Div
          center
          width="1400px"
          margin="150px auto 0px auto"
          border="1px solid black"
        >
          <Text size="40px">{countryName}의 어떤 정보가 궁금하세요?</Text>
          <Div row margin="120px auto 0px auto" border="1px solid black">
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
      />
      {/* 바텀시트 끝 */}
      {/* 나라별 끝 */}
    </React.Fragment>
  );
};

export default SubMain1;
