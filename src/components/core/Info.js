import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { Button, Div, Image, Input, Text } from '../ui';

const Info = (props, ref) => {
  // console.log(props.height);

  // 목적별 데이터
  const vTarget = useSelector((state) => state.target.vTarget);

  // 나라별 데이터
  const vCountry = useSelector((state) => state.country.vCountry);
  const countryDetail = useSelector((state) => state.country.countryList);
  const countryList = countryDetail?.map((x, i) => x);
  const countryInfo = countryList[0]?.BaseInfo?.baseInfo;

  // React.useEffect(() => {
  //   if (props.bank) {
  //     props.countryInfo = countryInfo;
  //   }
  // }, []);

  return (
    <>
      {/* 비자 */}
      {props.visa && (
        <div
          style={{
            position: 'relative',
            width: '100%',
            // height: props.height,
            // marginLeft: '-1px',
            padding: '40px 0px',
            overflow: 'hidden',
            backgroundColor: 'white',
            // borderLeft: '1px solid #0031DE',
          }}
        >
          {/* 북마크 전 */}
          {/* <Button bookmarkBtn></Button> */}
          {/* 북마크 후 */}
          {/* <Button bookmarkBtn complete></Button> */}
          {props.info?.map((v, i) => {
            return (
              <TitleBox key={v + i}>
                <Title>● {v.subtitle}</Title>
                <SubBox>
                  <Ol>
                    {v.subInfo?.map((x, j) => {
                      const ol = true;
                      return (
                        <Li ol={ol} key={x + j}>
                          {x.explain1}
                          <ul>
                            {x.oneInfo?.map((y, k) => {
                              return <Li key={y + k}>· {y}</Li>;
                            })}
                          </ul>
                        </Li>
                      );
                    })}
                  </Ol>
                </SubBox>
              </TitleBox>
            );
          })}
        </div>
      )}

      {/* 은행 */}
      {props.bank && (
        <div
          style={{
            position: 'relative',
            width: '100%',
            // height: props.height,
            // marginLeft: '-1px',
            padding: '40px 0px',
            overflow: 'hidden',
            backgroundColor: 'white',
            // borderLeft: '1px solid #0031DE',
          }}
        >
          {/* 북마크 전 */}
          {/* <Button bookmarkBtn></Button> */}
          {/* 북마크 후 */}
          {/* <Button bookmarkBtn complete></Button> */}
          {(vTarget ? props[0] : props?.countryInfo[0]).info?.map((l, i) => {
            return (
              <TitleBox key={l + i}>
                <Title>● {l.subtitle}</Title>
                <SubBox>
                  <Ol>
                    {l.subInfo?.map((x, j) => {
                      const ol = true;
                      return (
                        <Li ol={ol} key={x + j}>
                          {x.explain1}
                          <ul>
                            {x.oneInfo?.map((y, k) => {
                              return (
                                <Li key={y + k}>
                                  {y.explain2}
                                  <Ul>
                                    {y.twoInfo?.map((z, m) => {
                                      return <Li key={z + m}>· {z}</Li>;
                                    })}
                                  </Ul>
                                </Li>
                              );
                            })}
                          </ul>
                        </Li>
                      );
                    })}
                  </Ol>
                </SubBox>
              </TitleBox>
            );
          })}
        </div>
      )}

      {/* 시차 */}
      {props.time && (
        <div
          style={{
            position: 'relative',
            width: '100%',
            // height: props.height,
            // marginLeft: '-1px',
            padding: '40px 0px',
            overflow: 'hidden',
            backgroundColor: 'white',
            // borderLeft: '1px solid #0031DE',
          }}
        >
          {/* 북마크 전 */}
          {/* <Button bookmarkBtn></Button> */}
          {/* 북마크 후 */}
          {/* <Button bookmarkBtn complete></Button> */}
          {(vTarget ? props[1] : props.countryInfo[1]).info?.map((l, i) => {
            return (
              <TitleBox key={l + i}>
                <Title>● {l.subtitle}</Title>
                <SubBox>
                  <Ol>
                    {l.subInfo?.map((x, j) => {
                      const ol = true;
                      return (
                        <Li ol={ol} key={x + j}>
                          {x.explain1}
                          <ul>
                            {x.oneInfo?.map((y, k) => {
                              return (
                                <Li key={y + k}>
                                  {y.explain2}
                                  <Ul>
                                    {y.twoInfo?.map((z, m) => {
                                      return <Li key={z + m}>· {z}</Li>;
                                    })}
                                  </Ul>
                                </Li>
                              );
                            })}
                          </ul>
                        </Li>
                      );
                    })}
                  </Ol>
                </SubBox>
              </TitleBox>
            );
          })}
        </div>
      )}

      {/* 교통 */}
      {props.traffic && (
        <div
          style={{
            position: 'relative',
            width: '100%',
            // height: props.height,
            // marginLeft: '-1px',
            padding: '40px 0px',
            overflow: 'hidden',
            backgroundColor: 'white',
            // borderLeft: '1px solid #0031DE',
          }}
        >
          {/* 북마크 전 */}
          {/* <Button bookmarkBtn></Button> */}
          {/* 북마크 후 */}
          {/* <Button bookmarkBtn complete></Button> */}
          {(vTarget ? props[2] : props.countryInfo[2]).info?.map((l, i) => {
            return (
              <TitleBox key={l + i}>
                <Title>● {l.subtitle}</Title>
                <SubBox>
                  <Ol>
                    {l.subInfo?.map((x, j) => {
                      const ol = true;
                      return (
                        <Li ol={ol} key={x + j}>
                          {x.explain1}
                          <ul>
                            {x.oneInfo?.map((y, k) => {
                              return (
                                <Li key={y + k}>
                                  {y.explain2}
                                  <Ul>
                                    {y.twoInfo?.map((z, m) => {
                                      return <Li key={z + m}>· {z}</Li>;
                                    })}
                                  </Ul>
                                </Li>
                              );
                            })}
                          </ul>
                        </Li>
                      );
                    })}
                  </Ol>
                </SubBox>
              </TitleBox>
            );
          })}
        </div>
      )}

      {/* 언어 */}
      {props.language && (
        <div
          style={{
            position: 'relative',
            width: '100%',
            // height: props.height,
            // marginLeft: '-1px',
            padding: '40px 0px',
            overflow: 'hidden',
            backgroundColor: 'white',
            // borderLeft: '1px solid #0031DE',
          }}
        >
          {/* 북마크 전 */}
          {/* <Button bookmarkBtn></Button> */}
          {/* 북마크 후 */}
          {/* <Button bookmarkBtn complete></Button> */}
          {(vTarget ? props[3] : props.countryInfo[3]).info?.map((l, i) => {
            return (
              <TitleBox key={l + i}>
                <Title>● {l.subtitle}</Title>
                <SubBox>
                  <Ol>
                    {l.subInfo?.map((x, j) => {
                      const ol = true;
                      return (
                        <Li ol={ol} key={x + j}>
                          {x.explain1}
                          <ul>
                            {x.oneInfo?.map((y, k) => {
                              return (
                                <Li key={y + k}>
                                  {y.explain2}
                                  <Ul>
                                    {y.twoInfo?.map((z, m) => {
                                      return <Li key={z + m}>· {z}</Li>;
                                    })}
                                  </Ul>
                                </Li>
                              );
                            })}
                          </ul>
                        </Li>
                      );
                    })}
                  </Ol>
                </SubBox>
              </TitleBox>
            );
          })}
        </div>
      )}

      {/* 통신 */}
      {props.phone && (
        <div
          style={{
            position: 'relative',
            width: '100%',
            // height: props.height,
            // marginLeft: '-1px',
            padding: '40px 0px',
            overflow: 'hidden',
            backgroundColor: 'white',
            // borderLeft: '1px solid #0031DE',
          }}
        >
          {/* 북마크 전 */}
          {/* <Button bookmarkBtn></Button> */}
          {/* 북마크 후 */}
          {/* <Button bookmarkBtn complete></Button> */}
          {(vTarget ? props[4] : props.countryInfo[4]).info?.map((l, i) => {
            return (
              <TitleBox key={l + i}>
                <Title>● {l.subtitle}</Title>
                <SubBox>
                  <Ol>
                    {l.subInfo?.map((x, j) => {
                      const ol = true;
                      return (
                        <Li ol={ol} key={x + j}>
                          {x.explain1}
                          <ul>
                            {x.oneInfo?.map((y, k) => {
                              return (
                                <Li key={y + k}>
                                  {y.explain2}
                                  <Ul>
                                    {y.twoInfo?.map((z, m) => {
                                      return <Li key={z + m}>· {z}</Li>;
                                    })}
                                  </Ul>
                                </Li>
                              );
                            })}
                          </ul>
                        </Li>
                      );
                    })}
                  </Ol>
                </SubBox>
              </TitleBox>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Info;

const TitleBox = styled.div`
  width: 100%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.p`
  width: 100%;
  line-height: 30px;
  padding: 5px 10px;
  background-color: #d2dfff;
  font-size: 16px;
  font-weight: bold;
  color: #0031de;
`;
const SubBox = styled.div`
  width: 100%;
  line-height: 20px;
  padding: 5px 10px;
  background-color: #d2dfff;
  white-space: normal;
  word-break: break-all;
`;
const Ol = styled.ol`
  list-style-type: none;
  width: 100%;
  padding: 0px 5px 0px 20px;
  line-height: 25px;
`;
const Ul = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0px 10px;
  line-height: 25px;
`;
const Li = styled.li`
  ${(props) => (props.ol ? 'list-style-type: decimal;' : 'list-style:none;')};
  width: 100%;
  margin-bottom: 5px;
  font-size: 14px;
`;
