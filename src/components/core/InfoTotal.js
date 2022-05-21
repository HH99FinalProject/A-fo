import React, { useRef, forwardRef } from 'react';
import { useSelector } from 'react-redux';

import Info from './Info';

import { Button, Div, Image, Input, Text } from '../ui';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const InfoTotal = forwardRef(function InfoTotal(props, ref) {
  const visa = props.infoTitle === '비자';
  const bank = props.infoTitle === '은행';
  const time = props.infoTitle === '시차';
  const traffic = props.infoTitle === '교통';
  const language = props.infoTitle === '언어';
  const phone = props.infoTitle === '통신';

  // 목적별 데이터
  const vTarget = props.vTarget;
  const targetDetail = useSelector((state) => state.target.countryList);
  const targetVisa = targetDetail?.map((v) => v.visa);
  const targetInfo = targetDetail?.map((x, i) => x.BaseInfo.baseInfo);

  // 나라별 데이터
  const vCountry = props.vCountry;
  const countryDetail = useSelector((state) => state.country.countryList);
  const countryVisa = countryDetail?.map((v) => v.visa);
  const countryInfo = countryDetail?.map((x, i) => x.BaseInfo.baseInfo);

  // 토글
  const isOpen = props.isOpen;
  const [toggle, setToggle] = React.useState(isOpen);
  const changeToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  // const scroll = useSelector((state) => state.scroll.scroll);
  // const ref = React.forwardRef((props, ref) => {});

  // 높이값 구하기
  const [height, setHeight] = React.useState(0);
  const heightRef = useRef('null');
  console.log(heightRef.current.height);

  return (
    <React.Fragment>
      {/* 목적별, 나라별(비자) 선택수에 따라서 바뀌는 형태 */}
      {(vTarget || (vCountry && visa)) && (
        <Div
          center
          width="1400px"
          backgroundColor="white"
          border="1px solid #0031DE"
          ref={ref}
        >
          {/* 토글 */}

          <Div
            row
            width="100%"
            height="100px"
            backgroundColor="#D2DFFF"
            cursor="pointer"
            _onClick={() => {
              changeToggle();
            }}
          >
            <Text width="auto" margin="0px 5px" size="25px" bold>
              {props.infoTitle}
            </Text>
            <MdOutlineKeyboardArrowDown size={20} />
          </Div>

          {/* 토글 */}

          {/* 내용 */}
          {toggle ? (
            <Div
              width="100%"
              display="flex"
              flexDirection="row"
              alignItems="flex-start"
              justifyContent="space-between"
              borderTop="1px solid #0031DE"
              height={height}
              ref={heightRef}
            >
              {vTarget && (
                <>
                  {visa &&
                    targetVisa?.map((t, i) => {
                      return <Info key={t + i} {...t} visa={visa} />;
                    })}
                  {bank &&
                    targetInfo?.map((t, i) => {
                      return <Info key={t + i} {...t} bank={bank} index={0} />;
                    })}
                  {time &&
                    targetInfo?.map((t, i) => {
                      return <Info key={t + i} {...t} time={time} index={1} />;
                    })}
                  {traffic &&
                    targetInfo?.map((t, i) => {
                      return (
                        <Info key={t + i} {...t} traffic={traffic} index={2} />
                      );
                    })}
                  {language &&
                    targetInfo?.map((t, i) => {
                      return (
                        <Info
                          key={t + i}
                          {...t}
                          language={language}
                          index={3}
                        />
                      );
                    })}
                  {phone &&
                    targetInfo?.map((t, i) => {
                      return (
                        <Info key={t + i} {...t} phone={phone} index={4} />
                      );
                    })}
                </>
              )}

              {vCountry &&
                visa &&
                countryVisa?.map((c, i) => {
                  return <Info key={c + i} {...c} visa={visa} />;
                })}
            </Div>
          ) : null}
          {/* 내용 */}
        </Div>
      )}

      {/* 나라별 공통정보 형태 */}
      {vCountry && !visa && (
        <Div center width="1400px" border="1px solid #0031DE" ref={ref}>
          {/* 토글 */}
          <Div
            row
            width="100%"
            height="100px"
            backgroundColor="#D2DFFF"
            cursor="pointer"
            _onClick={() => {
              changeToggle();
            }}
          >
            <Text width="auto" margin="0px 5px" size="25px" bold>
              {props.infoTitle}
            </Text>
            <MdOutlineKeyboardArrowDown size={20} />
          </Div>
          {/* 토글 */}

          {/* 내용 */}
          {toggle ? (
            <Div
              width="100%"
              display="flex"
              flexDirection="row"
              alignItems="flex-start"
              justifyContent="space-between"
              borderTop="1px solid #0031DE"
            >
              <>
                {bank && (
                  <Info bank={bank} index={0} countryInfo={countryInfo[0]} />
                )}
                {time && (
                  <Info time={time} index={1} countryInfo={countryInfo[0]} />
                )}
                {traffic && (
                  <Info
                    traffic={traffic}
                    index={2}
                    countryInfo={countryInfo[0]}
                  />
                )}
                {language && (
                  <Info
                    language={language}
                    index={3}
                    countryInfo={countryInfo[0]}
                  />
                )}
                {phone && (
                  <Info phone={phone} index={4} countryInfo={countryInfo[0]} />
                )}
              </>
            </Div>
          ) : null}
          {/* 내용 */}
        </Div>
      )}
    </React.Fragment>
  );
});

export default InfoTotal;
