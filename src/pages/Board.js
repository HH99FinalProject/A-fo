import React from 'react';
import styled from 'styled-components';
import { history } from '../redux/configureStore';

import { Div, Text, Image, Button, Input } from '../components/ui';
import Search from '../components/core/Search';

const Board = (props) => {
  return (
    <React.Fragment>
      <Search />
      <Div width="1400px" margin="100px auto 50px">
        <Text textAlign="center" size="36px" bold>
          자유 게시판
        </Text>
        <PostBtn
          onClick={() => {
            history.push('/postwrite');
          }}
        >
          작성하기
        </PostBtn>
        <Div margin="100px 0 0 0">
          {/* map으로 돌리기 */}
          <Article
            onClick={() => {
              history.push('/postdetail');
            }}
          >
            <Div width="15%">
              <Text bold size="25px">
                #오스트리아
              </Text>
            </Div>
            <Div width="57%">
              <Text size="25px">게시물 제목입니다.</Text>
            </Div>
            <Div spaceAround width="20%">
              <Div
                fontSize="10px"
                padding="8px"
                backgroundColor="#fff"
                borderRadius="10px"
              >
                목적
              </Div>
              <Div
                fontSize="10px"
                padding="8px"
                backgroundColor="#fff"
                borderRadius="10px"
              >
                오세아니아
              </Div>
            </Div>
            <Div fontSize="13px" width="8%" start>
              작성시간
            </Div>
          </Article>
          <Article>
            <Div width="15%">
              <Text bold size="25px">
                #오스트리아
              </Text>
            </Div>
            <Div width="57%">
              <Text size="25px">게시물 제목입니다.</Text>
            </Div>
            <Div spaceAround width="20%">
              <Div
                fontSize="10px"
                padding="8px"
                backgroundColor="#fff"
                borderRadius="10px"
              >
                목적
              </Div>
              <Div
                fontSize="10px"
                padding="8px"
                backgroundColor="#fff"
                borderRadius="10px"
              >
                오세아니아
              </Div>
            </Div>
            <Div fontSize="13px" width="8%" start>
              작성시간
            </Div>
          </Article>
          <Article>
            <Div width="15%">
              <Text bold size="25px">
                #오스트리아
              </Text>
            </Div>
            <Div width="57%">
              <Text size="25px">게시물 제목입니다.</Text>
            </Div>
            <Div spaceAround width="20%">
              <Div
                fontSize="10px"
                padding="8px"
                backgroundColor="#fff"
                borderRadius="10px"
              >
                목적
              </Div>
              <Div
                fontSize="10px"
                padding="8px"
                backgroundColor="#fff"
                borderRadius="10px"
              >
                오세아니아
              </Div>
            </Div>
            <Div fontSize="13px" width="8%" start>
              작성시간
            </Div>
          </Article>
          <Article>
            <Div width="15%">
              <Text bold size="25px">
                #오스트리아
              </Text>
            </Div>
            <Div width="57%">
              <Text size="25px">게시물 제목입니다.</Text>
            </Div>
            <Div spaceAround width="20%">
              <Div
                fontSize="10px"
                padding="8px"
                backgroundColor="#fff"
                borderRadius="10px"
              >
                목적
              </Div>
              <Div
                fontSize="10px"
                padding="8px"
                backgroundColor="#fff"
                borderRadius="10px"
              >
                오세아니아
              </Div>
            </Div>
            <Div fontSize="13px" width="8%" start>
              작성시간
            </Div>
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
