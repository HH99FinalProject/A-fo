import React from 'react';
import styled from 'styled-components';

import { Div, Button, Text } from '../components/ui';

const PostDetail = () => {
  return (
    <React.Fragment>
      <Div width="1080px" margin="20px auto 50px" border="1px solid #000" padding="20px" alignItems="center">
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
      <Div width="1080px" margin="80px auto 50px"padding="20px 0" alignItems="center">
        <Text textAlign="center" size="36px" bold >자유 게시판</Text>
        <ReturnBtn onClick={() => {}}>목록으로</ReturnBtn>

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
            <Div spaceBetween margin="20px 0">
              <Text size="34px">제목입니다.</Text>
              <Text size="14px">작성시간입니다.</Text>
            </Div>
            <Text size="16px" lineHeight="1.2em" textAlign="justify" letterSpacing="0.02em">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam congue sed et sagittis tellus, pharetra malesuada urna. At integer adipiscing nullam aliquet dis dolor magna tristique amet. Volutpat enim, tincidunt ut neque lorem mi tristique non lorem. Dui consequat faucibus mauris risus. Fames dictum mattis dui viverra a mattis ornare lectus urna. At nunc ut commodo et, odio sit tincidunt. Auctor cursus semper velit sed viverra morbi. Diam sed dapibus bibendum odio ut mattis. Vulputate elit risus elementum iaculis sed ornare. Non risus id elementum, adipiscing diam ipsum velit. Purus etiam quam volutpat tortor, leo. Pellentesque odio condimentum lacus parturient sit ut. Orci, in velit ut pretium auctor diam semper lectus. Dapibus nulla turpis lorem et enim libero.</Text>
          </Article>
          <Article>
            <Text size="34px" margin=" 0 0 20px 0">Comment</Text>
            <Content />
            <Button float="right" padding="5px">댓글작성</Button>
            <CommentList>
              {/* 댓글 !!작성할때마다!! 리스트 불러와서 map으로 뿌려주기 */}
              댓글리스트입니다.
            </CommentList>
          </Article>
        </Div>
      </Div>
    </React.Fragment>
  )
};

export default PostDetail;

const ReturnBtn = styled.button`
  float: right;
  margin-top: 30px;
  padding: 5px;
  background: tomato;
  color: #fff;
`;

const Article = styled.div`
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background: #eee;
  margin-bottom: 20px;
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

const Content = styled.input`
  font-size: 16px;
  padding: 10px;
  width: 90%;
  overflow: auto;
  margin-bottom: 20px;
`;

const CommentList = styled.div`
  margin: 30px 0 0 0;
`;