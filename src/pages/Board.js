import React from 'react';
import styled from "styled-components";

import { Div, Text, Image, Button, Input } from '../components/ui';

const Board = (props) => {
  return (
    <React.Fragment>
      <Div width="1400px" margin="20px auto 50px" border="1px solid #000" padding="20px" alignItems="center">
        <select>
          <option>대륙</option>
          <option>아시아</option>
          <option>유럽</option>
          <option>오세아니아</option>
          <option>남아메리카</option>
          <option>북아메리카</option>
        </select>
        <select>
          <option>목적</option>
          <option>워홀</option>
          <option>이민</option>
          <option>취업</option>
          <option>유학</option>
        </select>
        <input style={{width: '80%', height:"20px", display: 'inline-block'}} placeholder="검색어를 입력해주세요"/>
        <Button backgroundColor="skyblue" width="60px" border="1px solid #eee">검색</Button>
      </Div>
      <Div width="1400px" margin="100px auto 50px">
        <Text textAlign="center" size="36px" bold >자유 게시판</Text>
        <PostBtn>작성하기</PostBtn>
        <Div margin="100px 0 0 0" >
          {/* map으로 돌리기 */}
          <Article>
            <Div width="15%"><Text bold size="25px">#오스트리아</Text></Div>
            <Div width="57%"><Text size="25px">게시물 제목입니다.</Text></Div>
            <Div spaceAround width="20%">
              <Div fontSize="10px" padding="8px" backgroundColor="#fff" borderRadius="10px">목적</Div>
              <Div fontSize="10px" padding="8px" backgroundColor="#fff" borderRadius="10px">오세아니아</Div>
            </Div>
            <Div fontSize="13px" width="8%" start>작성시간</Div>
          </Article>
          <Article>
            <Div width="15%"><Text bold size="25px">#오스트리아</Text></Div>
            <Div width="57%"><Text size="25px">게시물 제목입니다.</Text></Div>
            <Div spaceAround width="20%">
              <Div fontSize="10px" padding="8px" backgroundColor="#fff" borderRadius="10px">목적</Div>
              <Div fontSize="10px" padding="8px" backgroundColor="#fff" borderRadius="10px">오세아니아</Div>
            </Div>
            <Div fontSize="13px" width="8%" start>작성시간</Div>
          </Article>
          <Article>
            <Div width="15%"><Text bold size="25px">#오스트리아</Text></Div>
            <Div width="57%"><Text size="25px">게시물 제목입니다.</Text></Div>
            <Div spaceAround width="20%">
              <Div fontSize="10px" padding="8px" backgroundColor="#fff" borderRadius="10px">목적</Div>
              <Div fontSize="10px" padding="8px" backgroundColor="#fff" borderRadius="10px">오세아니아</Div>
            </Div>
            <Div fontSize="13px" width="8%" start>작성시간</Div>
          </Article>
          <Article>
            <Div width="15%"><Text bold size="25px">#오스트리아</Text></Div>
            <Div width="57%"><Text size="25px">게시물 제목입니다.</Text></Div>
            <Div spaceAround width="20%">
              <Div fontSize="10px" padding="8px" backgroundColor="#fff" borderRadius="10px">목적</Div>
              <Div fontSize="10px" padding="8px" backgroundColor="#fff" borderRadius="10px">오세아니아</Div>
            </Div>
            <Div fontSize="13px" width="8%" start>작성시간</Div>
          </Article>
        </Div>
      </Div>
    </React.Fragment>
  );
};

export default Board;

const PostBtn = styled.button`
  float: right;
  margin-top: 30px;
  padding: 5px;
  background: tomato;
  color: #fff;
`;

const Article = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background: #eee;
  margin-bottom: 10px;
  font-size: 20px;
`;
