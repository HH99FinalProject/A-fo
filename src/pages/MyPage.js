import React from "react";
import styled from "styled-components";

import { Div, Text, Image, Button } from '../components/ui';
import Article from "../components/core/Article";
import Bookmark from "../components/core/Bookmark";

const MyPage = () => {

  return (
    <React.Fragment>
      
      <Div width="1400px" margin="0 auto">
        <Div start margin="80px 0 50px 0">
          <Image shape="circle" width="163px" height="163px" size="cover" src="https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927"  />
          <Div width="200px" margin="0 0 0 50px">
            <Text margin="0 0 20px 0" size="45px" bold>Name</Text>
            <Text size="25px">description</Text>
          </Div>
          <Button border="1px solid #b3b3b3" padding="3px"><Text size="12px" color="#7b7b7b">Edit Profile</Text></Button>
        </Div>

        <Div backgroundColor="#e1e1e1" padding="30px" borderRadius="10px">
          <Text bold size="25px" margin="0 0 20px 0">내가 쓴 글</Text>
          <Hr/>
          {/* 내가 쓴 글 리스트 불러와서 map으로 뿌리기 */}
          <Article />
          <Article />
          <Article />
          {/* 페이지네이션 */}
          <Div center margin="10px 0">
            <Text>페이지네이션[1][2][3][4][5][6]</Text>
          </Div>
        </Div>

        <Div backgroundColor="#e1e1e1" padding="30px" borderRadius="10px" margin="20px 0 0 0">
          <Div start margin="0 0 10px 0">
            <Text bold size="25px" margin="0 20px 10px 0">북마크</Text>
            <Div start margin="0 0 10px 0">
              <Div fontSize="14px" padding="10px" backgroundColor="#fff" borderRadius="20px" margin="0 15px 0 0">나라별</Div>
              <Div fontSize="14px" padding="10px" backgroundColor="#fff" borderRadius="20px">목적별</Div>
            </Div>
          </Div>
          <Hr/>
          {/* 북마크한거 map으로 뿌리기 */}
          <FlexWrap>
            <Bookmark />
            <Bookmark />
            <Bookmark />
            <Bookmark />
            <Bookmark />
            <Bookmark />
          </FlexWrap>
        </Div>
      </Div>
    </React.Fragment>
  )
}

export default MyPage;

const MyComment = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
  background: #eee;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 700;
`;

const Marked = styled.div`
  display: flex;
  align-items: center;
  width: 440px;
  padding: 15px 10px;
  background: #eee;
  margin-bottom: 15px;
  border-radius: 10px;
  font-size: 14px;
`;

const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Hr = styled.hr`
  border: 1px solid #fff;
  margin-bottom: 15px;
`;