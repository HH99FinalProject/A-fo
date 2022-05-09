import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { AppContext } from '../shared/App';
import { useLocation } from 'react-router-dom';
import { history } from '../redux/configureStore';
import { getTargetInfo } from '../redux/modules/target';

import { BottomSheet, TargetCard } from '../components/core';
import { Button, Div, Image, Input, Text } from '../components/ui';
import { RiArrowRightSLine } from 'react-icons/ri';

const SubMain1 = (props) => {
  // 목적별 경로 저장
  const location = useLocation();
  const [target, setTarget] = React.useState();
  const pickTarget = location.state;
  localStorage.setItem('target', JSON.stringify(pickTarget));
  React.useEffect(() => {
    const save = localStorage.getItem('target');
    if (save !== null) {
      setTarget(save);
    }
  }, [pickTarget]);

  // 바텀시트 나타나기
  const [bottomSheet, setBottomSheet] = React.useState(false);
  const showBottomSheet = () => {
    if (!bottomSheet) {
      return setBottomSheet(true);
    }
  };

  const version = useContext(AppContext);
  const pickOneCountry = location.pickCountryKinds;
  const targetList = ['이민', '유학', '워홀', '취업'];

  return (
    <React.Fragment>
      {/* 목적별 시작 */}
      {/* 경로 시작 */}
      {pickTarget && (
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

      {/* 목적 선택 시작 */}
      {pickTarget && (
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
            {targetList.map((v, i) => {
              return (
                <TargetCard key={v + i} text={v} pickTarget={pickTarget} />
              );
            })}
          </Div>
        </Div>
      )}
      {/* 목적 선택 끝 */}
      {/* 목적별 끝 */}

      {/* 나라별 시작 */}
      {/* 경로 시작 */}
      {!pickTarget && (
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
          <Text>{pickOneCountry}</Text>
        </Div>
      )}
      {/* 경로 끝 */}

      {/* 나라 선택 시작 */}
      {!pickTarget && (
        <Div
          center
          width="1400px"
          margin="150px auto 0px auto"
          border="1px solid black"
        >
          <Text size="40px">?의 어떤 정보가 궁금하세요?</Text>
          <Div
            spaceBetween
            width="100%"
            margin="120px auto 0px auto"
            border="1px solid black"
            _onClick={() => {
              showBottomSheet();
            }}
          >
            {targetList.map((v, i) => {
              localStorage.removeItem('target');
              return <TargetCard key={v + i} text={v} />;
            })}
          </Div>
        </Div>
      )}
      {/* 나라 선택 끝 */}

      {/* 바텀시트 */}
      <BottomSheet
        bottomSheet={bottomSheet}
        pickTarget={pickTarget}
        pickOneCountry={pickOneCountry}
      />
      {/* 바텀시트 끝 */}
      {/* 나라별 끝 */}
    </React.Fragment>
  );
};

export default SubMain1;
