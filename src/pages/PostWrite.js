import React, { useReducer, useRef, useState } from 'react';
import styled from 'styled-components';
import { history } from '../redux/configureStore';
import { useDispatch } from 'react-redux';

import { Text, Div, Button } from '../components/ui';
import { addPost } from '../redux/modules/post';

const PostWrite = () => {
  const dispatch = useDispatch();

  const [titleCount, setTitleCount] = useState(0);
  const [contentCount, setContentCount] = useState(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const setPost = () => {
    dispatch(addPost(title, content));
    setTitle('');
    setContent('');
  }

  React.useEffect(()=> {

  }, [])
  
  return (
    <React.Fragment>
      <Div
        width="1400px"
        margin="80px auto 50px"
        padding="20px 0"
        alignItems="center"
      >
        <ReturnBtn onClick={() => {history.push('/board');}}>
          목록으로
        </ReturnBtn>

        <Div margin="30px 0 0 0">
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
              <Title placeholder="제목을 입력하세요." maxLength={30} 
                onChange={(e)=>{ setTitleCount(e.target.value.length); setTitle(e.target.value) }} />
              <div style={{position:"absolute", top:"40px", right:"15px", background: "#fff"}}>({titleCount}/30)</div>
            </Div>
            <Div position="relative">
              <Content overflow="auto" placeholder="내용을 입력하세요." maxLength={500} 
                onChange={(e)=>{ setContentCount(e.target.value.length); setContent(e.target.value)}} 
                value={content}/>
              <div style={{position:"absolute", top:"360px", right:"20px", background: "#fff"}}>{contentCount}/500</div>
            </Div>
            <Div flexEnd>
              <Button padding="10px" border="1px solid #000" _onClick={()=>{ setPost(); }} backgroundColor="#fff">
                등록하기
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
  padding: 10px;
  margin-right: 20px;
  background: #fff;
  border: 1px solid #000;
`;

const Article = styled.div`
  align-items: center;
  padding: 20px;
  border-radius: 10px;
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
    margin-right: 10px;
  }
  span {
    margin-right: 10px;
    color: #fff;
  }
  span:hover {
    color: #000;
    cursor: pointer;
  }
`;

const Title = styled.input`
  background: #fff;
  margin: 20px 0;
  width: 100%;
  font-size: 24px;
  padding: 15px;
  border-radius: 0;
`;

const Content = styled.textarea`
  background: #fff;
  font-size: 16px;
  padding: 20px 15px;
  width: 100%;
  height: 400px;
  overflow: auto;
  margin-bottom: 20px;
  resize: none;
  border-radius: 0;
`;
