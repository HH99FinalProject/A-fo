import React, { useContext } from 'react';
import { AppContext } from '../shared/App';
import { useLocation } from 'react-router-dom';
import { history } from '../redux/configureStore';

import { TargetCard } from '../components/core';
import { Button, Div, Image, Input, Text } from '../components/ui';
import { RiArrowRightSLine } from 'react-icons/ri';

const SubMain1 = (props) => {
  const version = useContext(AppContext);
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
          <Text>?</Text>
        </Div>
      )}
      {/* 경로 끝 */}

      {/* 나라 선택 시작 */}
      {!pickTarget && (
        <Div
          width="1400px"
          margin="150px auto 0px auto"
          border="1px solid black"
        >
          <Text
            width="100%"
            height="100px"
            lineHeight="100px"
            center
            border="1px solid black"
          >
            ?
          </Text>
          <Div spaceBetween width="100%" border="1px solid black">
            {targetList.map((v, i) => {
              localStorage.removeItem('target');
              return (
                <TargetCard key={v + i} text={v} pickCountry={pickOneCountry} />
              );
            })}
          </Div>
        </Div>
      )}
      {/* 나라 선택 끝 */}

      {/* 바텀시트 */}
      {!pickTarget && (
        <Div bottomSheet borderTop="1px solid black">
          <Div
            center
            position="relative"
            width="1400px"
            height="50px"
            border="1px solid black"
          >
            <Text size="20px" bold border="1px solid black">
              유학 + 워홀
            </Text>
            <Button
              bottomSheetBtn
              height="50px"
              border="1px solid black"
              _onClick={() => {
                history.push('/Detail');
              }}
            >
              정보 보러 가기
            </Button>
          </Div>
        </Div>
      )}
      {/* 바텀시트 끝 */}
      {/* 나라별 끝 */}
    </React.Fragment>
  );
};

export default SubMain1;
