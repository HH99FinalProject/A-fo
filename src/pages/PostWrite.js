import React, { useReducer, useRef, useState } from 'react';
import styled from 'styled-components';
import { history } from '../redux/configureStore';
import { useDispatch } from 'react-redux';

import { Text, Div, Button } from '../components/ui';
import Search from '../components/core/Search';

const PostWrite = () => {
  const dispatch = useDispatch();

  const [titleCount, setTitleCount] = useState(0);
  const [contentCount, setContentCount] = useState(0);

  const addPost = () => {
    dispatch();
  }
  
  return (
    <React.Fragment>
      <Div
        width="1400px"
        margin="80px auto 50px"
        padding="20px 0"
        alignItems="center"
      >
        <Text textAlign="center" size="36px" bold>
          자유 게시판
        </Text>
        <Search />
        <ReturnBtn
          onClick={() => {
            history.push('/board');
          }}
        >
          목록으로
        </ReturnBtn>

        <Div margin="100px 0 0 0">
          <Article>
            <Div flexStart>
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
            <Div position="relative">
              <Title placeholder="제목을 입력하세요." maxLength={30} onChange={(e)=>{ setTitleCount(e.target.value.length); }} />
              <div style={{position:"absolute", top:"40px", right:"15px"}}>({titleCount}/30)</div>
            </Div>
            <Div position="relative">
              <Content overflow="auto" placeholder="내용을 입력하세요." maxLength={500} onChange={(e)=>{ setContentCount(e.target.value.length); }} />
              <div style={{position:"absolute", top:"360px", right:"20px"}}>{contentCount}/500</div>
            </Div>
            <Div flexEnd>
              <Button padding="10px" radius="10px" _onClick={()=>{  }}>
                작성완료
              </Button>
            </Div>
          </Article>
        </Div>
      </Div>
    </React.Fragment>
  );
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
  resize: none;
`;
