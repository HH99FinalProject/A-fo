import React from 'react';

import { Button, Div, Image, Input, Text } from '../ui';

const Info = () => {
  return (
    <Div width="335px" margin="0px 10px" border="1px solid black">
      <Text center width="100%" border="1px solid black">
        호주
      </Text>

      {/* map돌리기 */}
      <Div
        position="relative"
        width="100%"
        margin="20px 0px"
        padding="10px"
        border="1px solid black"
      >
        {/* 북마크 전 */}
        <Button
          bookmarkBtn
          border="1px solid black"
          _onClick={() => {
            window.alert('북마크 완료');
          }}
        ></Button>
        {/* 북마크 전 */}

        {/* 북마크 후 */}
        {/* <Button bookmarkBtn complete border="1px solid black"></Button> */}
        {/* 북마크 후 */}

        <Div flexStart border="1px solid black">
          <Text width="auto" border="1px solid black">
            비자
          </Text>
          <Button border="1px solid black">▼</Button>
        </Div>
        <Div width="100%" margin="5px 0px 0px 0px" border="1px solid black">
          <Text width="100%" border="1px solid black">
            호주 비자에 관한 글입니다. 호주 비자에 관한 글입니다. 호주 비자에
            관한 글입니다. 호주 비자에 관한 글입니다. 호주 비자에 관한 글입니다.
            호주 비자에 관한 글입니다. 호주 비자에 관한 글입니다. 호주 비자에
            관한 글입니다. 호주 비자에 관한 글입니다. 호주 비자에 관한
            글입니다.호주 비자에 관한 글입니다. 호주 비자에 관한 글입니다. 호주
            비자에 관한 글입니다. 호주 비자에 관한 글입니다. 호주 비자에 관한
            글입니다.
          </Text>
        </Div>
      </Div>

      <Div
        position="relative"
        width="100%"
        margin="20px 0px"
        padding="10px"
        border="1px solid black"
      >
        {/* 북마크 전 */}
        {/* <Button bookmarkBtn border="1px solid black"></Button> */}
        {/* 북마크 전 */}

        {/* 북마크 후 */}
        <Button bookmarkBtn complete border="1px solid black"></Button>
        {/* 북마크 후 */}

        <Div flexStart border="1px solid black">
          <Text width="auto" border="1px solid black">
            휴대전화 (Mobile Phone)
          </Text>
          <Button border="1px solid black">▼</Button>
        </Div>
        <Div width="100%" margin="5px 0px 0px 0px" border="1px solid black">
          <Text width="100%" border="1px solid black">
            휴대전화 개통방식
          </Text>
          <Text width="100%" border="1px solid black">
            1. 한국에서 이용하던 휴대전화를 그대로 로밍해서 이용 가능하나
            수수료가 많이 나온다.
            <br /> <br />
            2. 선불결제 휴대폰 Ÿ 통화요금이 저렴하고, 기본요금 없고, 사용할
            만큼의 통화요금만 미리 충전시켜 이용한다. <br /> <br />
            3. 후불결제 Ÿ 약정기간을 정해야하며 요금이 비싸다
          </Text>
          <Text width="100%" border="1px solid black">
            주요 통신사
          </Text>
          <Text width="100%" border="1px solid black">
            1. OPTUS : https://www.optus.com.au/
            <br /> <br />
            2. TELSTRA : https://www.telstra.com.au/
            <br /> <br />
            3.VODAFONE : https://www.vodafone.com/
            <br /> <br />
            4. ALDI : https://www.aldimobile.com.au/
            <br /> <br />
            5. Amaysim : https://www.amaysim.com.au/x
          </Text>
          <Text width="100%" border="1px solid black">
            추천 요금제
          </Text>
          <Text width="100%" border="1px solid black">
            Amaysim사의 알뜰요금제 : $30에 30GB 데이터와 무제한 통화 및 문자
            가능 28일 제한(가격은 오차가 생길 수 있으니 자세한건 홈페이지 참고를
            추천한다.)
          </Text>
        </Div>
      </Div>

      <Div
        position="relative"
        width="100%"
        margin="20px 0px"
        padding="10px"
        border="1px solid black"
      >
        {/* 북마크 전 */}
        {/* <Button bookmarkBtn border="1px solid black"></Button> */}
        {/* 북마크 전 */}

        {/* 북마크 후 */}
        <Button bookmarkBtn complete border="1px solid black"></Button>
        {/* 북마크 후 */}

        <Div flexStart border="1px solid black">
          <Text width="auto" border="1px solid black">
            은행 계좌 개설
          </Text>
          <Button border="1px solid black">▼</Button>
        </Div>
        <Div width="100%" margin="5px 0px 0px 0px" border="1px solid black">
          <Text width="100%" border="1px solid black">
            준비서류
          </Text>
          <Text width="100%" border="1px solid black">
            여권원본, 본인거주지가 증명되는 우편물 (전화 고지서 등), 연락처 및
            입금액이 필요하다.
            <br />※ 은행 상품 및 정보는 수시로 변경되는 점을 참고하길 바란다.
          </Text>
          <Text width="100%" border="1px solid black">
            주요은행
          </Text>
          <Text width="100%" border="1px solid black">
            1. Commonwealth Bank : <br />
            -www.commbank.com.au <br /> -유학생들이 가장 많이 이용하는 은행으로
            지점의 네트워크가 호주 최대이기 때문에 이용이 가장 용이하다.
            <br /> -월별 관리 비용이 청구되지 않는 경우 :
            <br />
            학생비자입국 시<br />
            만 21세 이하일 시<br />월 $ 2,000이상 입금
            <br />
            <br />
            2. Commonwealth Bank : <br />
            -www.commbank.com.au <br /> -유학생들이 가장 많이 이용하는 은행으로
            지점의 네트워크가 호주 최대이기 때문에 이용이 가장 용이하다.
            <br /> -월별 관리 비용이 청구되지 않는 경우 :
            <br />
            학생비자입국 시<br />
            만 21세 이하일 시<br />월 $ 2,000이상 입금
            <br />
            <br /> 3. Commonwealth Bank : <br />
            -www.commbank.com.au <br /> -유학생들이 가장 많이 이용하는 은행으로
            지점의 네트워크가 호주 최대이기 때문에 이용이 가장 용이하다.
            <br /> -월별 관리 비용이 청구되지 않는 경우 :
            <br />
            학생비자입국 시<br />
            만 21세 이하일 시<br />월 $ 2,000이상 입금 <br />
            <br />
            4. Commonwealth Bank : <br />
            -www.commbank.com.au <br /> -유학생들이 가장 많이 이용하는 은행으로
            지점의 네트워크가 호주 최대이기 때문에 이용이 가장 용이하다.
            <br /> -월별 관리 비용이 청구되지 않는 경우 :
            <br />
            학생비자입국 시<br />
            만 21세 이하일 시<br />월 $ 2,000이상 입금
          </Text>
          <Text width="100%" border="1px solid black">
            계좌개설 절차
          </Text>
          <Text width="100%" border="1px solid black">
            1. 계좌개설 절차 준비물 챙기기 (여권 및 신분증, 호주 거주 주소,
            TFN넘버)
            <br /> 2. 은행방문하여 안내에 따라 기본 서류작성
            <br /> 3. 계좌개설 후 보안코드와 PIN번호 설정
            <br />
            4.인터넷 뱅킹 사용에 대한 설정
            <br /> 5.수령방법 선택 (직접 수령의 경우 발급문자를 받으시면
            은행으로 가시면됩니다.)
          </Text>
          <Text width="100%" border="1px solid black">
            유의점
          </Text>
          <Text width="100%" border="1px solid black">
            1. 호주는 은행계좌 개설 시 즉시 카드나 통장을 발급해 주지 않는다.
            계좌 개설 후 2주 가량 경과 후 현금카드와 PIN NUMBER가 우편으로
            발송되며, 발급된 카드는 은행 사이트에 등록을 해야 사용이 가능하다.
            <br />
            2. ATM 사용 시 주의점 : 호주는 ATM 사용 시 비밀번호를 3~5회 이상
            잘못 입력할 경우 카드가 기계 밖으로 나오지 않 도록 되어있다. 이
            경우에는 카드 재발급을 받아야 하나 계좌번호를 알고 있을 경우 현금
            인출은 가능하다.
          </Text>
          <Text width="100%" border="1px solid black">
            은행계좌종류
          </Text>
          <Text width="100%" border="1px solid black">
            개인의 성향이나 자금 이용 목적에 따라 저축예금계좌(Savings or
            Deposit), 거래계좌(또는 당좌예금)(Transaction or Cheque),
            적금계좌(Term Deposit) 등을 이용가능하며 우리나라의 EFTPOS
            체크카드처럼 이용가능하다.
          </Text>
        </Div>
      </Div>

      <Div
        position="relative"
        width="100%"
        margin="20px 0px"
        padding="10px"
        border="1px solid black"
      >
        {/* 북마크 전 */}
        <Button bookmarkBtn border="1px solid black"></Button>
        {/* 북마크 전 */}

        {/* 북마크 후 */}
        {/* <Button bookmarkBtn complete border="1px solid black"></Button> */}
        {/* 북마크 후 */}

        <Div flexStart border="1px solid black">
          <Text width="auto" border="1px solid black">
            언어
          </Text>
          <Button border="1px solid black">▼</Button>
        </Div>
        <Div width="100%" margin="5px 0px 0px 0px" border="1px solid black">
          <Text width="100%" border="1px solid black">
            통용어
          </Text>
          <Text width="100%" border="1px solid black">
            영어
          </Text>
        </Div>
      </Div>

      <Div
        position="relative"
        width="100%"
        margin="20px 0px"
        padding="10px"
        border="1px solid black"
      >
        {/* 북마크 전 */}
        <Button bookmarkBtn border="1px solid black"></Button>
        {/* 북마크 전 */}

        {/* 북마크 후 */}
        {/* <Button bookmarkBtn complete border="1px solid black"></Button> */}
        {/* 북마크 후 */}

        <Div flexStart border="1px solid black">
          <Text width="auto" border="1px solid black">
            시차
          </Text>
          <Button border="1px solid black">▼</Button>
        </Div>
        {/* <Div width="100%" margin="5px 0px 0px 0px" border="1px solid black">
          <Text width="100%" border="1px solid black">
            호주 비자에 관한 글입니다. 호주 비자에 관한 글입니다. 호주 비자에
            관한 글입니다. 호주 비자에 관한 글입니다. 호주 비자에 관한 글입니다.
          </Text>
        </Div> */}
      </Div>

      <Div
        position="relative"
        width="100%"
        margin="20px 0px"
        padding="10px"
        border="1px solid black"
      >
        {/* 북마크 전 */}
        {/* <Button bookmarkBtn border="1px solid black"></Button> */}
        {/* 북마크 전 */}

        {/* 북마크 후 */}
        <Button bookmarkBtn complete border="1px solid black"></Button>
        {/* 북마크 후 */}

        <Div flexStart border="1px solid black">
          <Text width="auto" border="1px solid black">
            교통 정보
          </Text>
          <Button border="1px solid black">▼</Button>
        </Div>
        {/* <Div width="100%" margin="5px 0px 0px 0px" border="1px solid black">
          <Text width="100%" border="1px solid black">
            호주 비자에 관한 글입니다. 호주 비자에 관한 글입니다. 호주 비자에
            관한 글입니다. 호주 비자에 관한 글입니다. 호주 비자에 관한 글입니다.
          </Text>
        </Div> */}
      </Div>
    </Div>
  );
};

export default Info;
