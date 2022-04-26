import React from "react";
import styled from "styled-components";

import { Div, Text, Image, Button } from '../components/ui';

const MyPage = () => {

  return (
    <React.Fragment>
      <React.Fragment>
      <Div width="1050px" margin="0 auto">
        <Div start margin="20px 0">
          <Image shape="circle" width="100px" height="100px" size="cover" src="https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927"  />
          <Div margin="0 0 0 20px">
            <Text margin="0 0 10px 0" size="16px" bold>닉네임</Text>
            <Text>아이디</Text>
          </Div>
        </Div>
        <hr/>
        <Div>
          <Text bold size="16px" padding="20px 0">내가 쓴 글</Text>
          {/* 내가 쓴 글 리스트 불러와서 map으로 뿌리기 */}
          <MyComment>제목입니다. @(사진) -2022.04.25 </MyComment>
          <MyComment>제목입니다.</MyComment>
          <MyComment>제목입니다.</MyComment>
          <MyComment>제목입니다.</MyComment>
          <MyComment>제목입니다.</MyComment>
          {/* 페이지네이션 */}
          <Div center margin="10px 0">
            <Text>페이지네이션[1][2][3][4][5][6]</Text>
          </Div>
        </Div>
        <hr/>
        <Div padding="20px 0">
          <Text bold size="16px" margin="0 0 10px 0">북마크</Text>
          <Div start margin="0 0 10px 0">
            <Button padding="10px" backgroundColor="skyblue">나라별</Button>
            <Button padding="10px" backgroundColor="tomato">용도별</Button>
          </Div>
          {/* 북마크한거 map으로 뿌리기 */}
          <Marked>북마크 된 리스트 입니다. 카드형식으로는 어떨까요?</Marked>
          <Marked>북마크 된 리스트 입니다.</Marked>
          <Marked>북마크 된 리스트 입니다.</Marked>
        </Div>
      </Div>
    </React.Fragment>
    </React.Fragment>
  )
}

export default MyPage;

const MyComment = styled.div`
  padding: 8px;
  background: #eee;
  margin-bottom: 5px;
  /* border-bottom: 1px solid #e1e1e1; */
  font-size: 14px;
`;

const Marked = styled.div`
  padding: 8px;
  background: #eee;
  margin-bottom: 5px;
  /* border-bottom: 1px solid #e1e1e1; */
  font-size: 14px;
`;