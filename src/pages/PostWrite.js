import React from 'react';
import styled from 'styled-components';
import { history } from '../redux/configureStore';

import { Text, Div, Button } from '../components/ui';
import Search from '../components/core/Search';

const PostWrite = () => {
  return (
    <React.Fragment>
      <Div width="1400px" margin="80px auto 50px"padding="20px 0" alignItems="center">
        <Text textAlign="center" size="36px" bold >자유 게시판</Text>
        <Search />
        <ReturnBtn onClick={() => {history.push("/board")}}>목록으로</ReturnBtn>

        <Div margin="100px 0 0 0">
          <Article>
            <Div start>
              <Target>
                <Div>대륙별</Div>
                <span>아시아</span>
                <span>유럽</span>
                <span>오세아니아</span>
                <span>북미</span>
                <span>남미</span>
              </Target>
              <Target>
                <Div>목적별</Div>
                <span>워홀</span>
                <span>이민</span>
                <span>취업</span>
                <span>유학</span>
              </Target>
            </Div>

            <Title placeholder='제목을 입력하세요.' />
            <Content placeholder='내용을 입력하세요.'/>
            <Div spaceBetween>
              <input type="file" onChange={() => {}}/>
              <Button padding="10px" radius="10px">작성완료</Button>
            </Div>
          </Article>
        </Div>
      </Div>
    </React.Fragment>
  )
};

export default PostWrite;

const ReturnBtn = styled.button`
  float: right;
  padding: 5px;
  background: tomato;
  color: #fff;
`;

const Article = styled.div`
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background: #eee;
  margin-bottom: 10px;
  font-size: 20px;
`;

const Target = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  font-weight: 700;
  Div {
    padding: 10px;
    background: #fff;
    border-radius: 10px;
    margin-right: 10px;
  }
  span {
    margin-right: 10px;
  }
  span:hover {
    color: red;
    cursor: pointer;
  }
`;

const Title = styled.input`
  margin: 20px 0;
  width: 100%;
  font-size: 24px;
  padding: 15px;
`;

const Content = styled.textarea`
  font-size: 16px;
  padding: 20px 15px;
  width: 100%;
  height: 400px;
  overflow: auto;
  margin-bottom: 20px;
`;