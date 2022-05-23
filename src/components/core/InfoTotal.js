import React, { useRef, forwardRef } from 'react';
import { useSelector } from 'react-redux';

import Info from './Info';

import { Button, Div, Image, Input, Text } from '../ui';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const InfoTotal = (props) => {
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
  const countryList = countryDetail?.map((x, i) => x);
  const countryInfo = countryList[0]?.BaseInfo?.baseInfo;

  // 토글
  const isOpen = props.isOpen;
  const [toggle, setToggle] = React.useState(isOpen);
  const changeToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  // 높이값 구하기
  const [height, setHeight] = React.useState(0);
  const ref = useRef('null');
  // console.log(document.querySelector('.a').offsetHeight);
  React.useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, []);

  return (
    <React.Fragment>
      {/* 목적별, 나라별(비자) 선택수에 따라서 바뀌는 형태 */}
      {(vTarget || (vCountry && visa)) && (
        <Div
          center
          width="1400px"
          backgroundColor="white"
          border="1px solid #0031DE"
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
            <div
              className="a"
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                width: '100%',
                borderTop: '1px solid #0031DE',
              }}
              ref={ref}
            >
              {vTarget && (
                <>
                  {visa &&
                    targetVisa?.map((t, i) => {
                      return (
                        <Info key={t + i} {...t} visa={visa} height={height} />
                      );
                    })}
                  {bank &&
                    targetInfo?.map((t, i) => {
                      return (
                        <Info key={t + i} {...t} bank={bank} height={height} />
                      );
                    })}
                  {time &&
                    targetInfo?.map((t, i) => {
                      return (
                        <Info key={t + i} {...t} time={time} height={height} />
                      );
                    })}
                  {traffic &&
                    targetInfo?.map((t, i) => {
                      return (
                        <Info
                          key={t + i}
                          {...t}
                          traffic={traffic}
                          height={height}
                        />
                      );
                    })}
                  {language &&
                    targetInfo?.map((t, i) => {
                      return (
                        <Info
                          key={t + i}
                          {...t}
                          language={language}
                          height={height}
                        />
                      );
                    })}
                  {phone &&
                    targetInfo?.map((t, i) => {
                      return (
                        <Info
                          key={t + i}
                          {...t}
                          phone={phone}
                          height={height}
                        />
                      );
                    })}
                </>
              )}

              {vCountry &&
                visa &&
                countryVisa?.map((c, i) => {
                  return <Info key={c + i} {...c} visa={visa} />;
                })}
            </div>
          ) : null}
          {/* 내용 */}
        </Div>
      )}

      {/* 나라별 공통정보 형태 */}
      {vCountry && !visa && (
        <Div center width="1400px" border="1px solid #0031DE">
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
                {bank && <Info bank={bank} countryInfo={countryInfo} />}
                {time && <Info time={time} countryInfo={countryInfo} />}
                {traffic && (
                  <Info traffic={traffic} countryInfo={countryInfo} />
                )}
                {language && (
                  <Info language={language} countryInfo={countryInfo} />
                )}
                {phone && <Info phone={phone} countryInfo={countryInfo} />}
              </>
            </Div>
          ) : null}
          {/* 내용 */}
        </Div>
      )}
    </React.Fragment>
  );
};

export default InfoTotal;
