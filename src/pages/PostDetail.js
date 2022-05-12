import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../redux/configureStore';
import { addComment } from '../redux/modules/comment';

import { Header, Comment } from '../components/core';
import { Div, Button, Input, Text } from '../components/ui';
import styled from 'styled-components';
import { AiOutlineComment, AiOutlineEye } from 'react-icons/ai';
import { CgHeart } from 'react-icons/cg';

const PostDetail = () => {
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.comment.comment);

  const [comment, setCommentText] = React.useState();
  const onChange = (e) => {
    setCommentText(e.target.value);
  };
  const commentWrite = () => {
    dispatch(addComment(comment));
    setCommentText('');
  };

  const clickPostDetail = useSelector((state) => state.board.post);
  // React.useEffect(()=>{
  //   dispatch();
  // }, [])

  return (
    <React.Fragment>
      <Header></Header>
      <Div
        width="1400px"
        margin="80px auto 50px"
        padding="20px 0"
        alignItems="center"
      >
        <ReturnBtn
          onClick={() => {
            history.push('/board');
          }}
        >
          목록으로
        </ReturnBtn>

        <Div margin="60px 0 0 0">
          <Wrap>
            <Div flexStart>
              <div
                style={{
                  width: '10%',
                  borderRight: '1px solid #bdbdbd',
                  padding: '5px 0',
                }}
              >
                <Text bold size="20px" color="#7b7b7b">
                  #오스트리아
                </Text>
              </div>
              <Div padding="0 0 0 20px">
                <Text size="16px" bold>
                  {clickPostDetail[0].title}
                </Text>
              </Div>
              <Div row width="15%">
                <Div fontSize="10px" padding="8px" margin="0 10px 0 0">
                  목적
                </Div>
                <Div fontSize="10px" padding="8px">
                  오세아니아
                </Div>
              </Div>
            </Div>
            <Div spaceBetween>
              <Div spaceEvenly margin="20px 0">
                <div style={{ padding: '5px 0', width: '100px' }}>
                  <Text>작성자 이름</Text>
                </div>
                <Div spaceEvenly>
                  <Div fontSize="13px" width="50px">
                    몇일전
                  </Div>
                  <Text>
                    <AiOutlineEye /> 155회
                  </Text>
                </Div>
              </Div>
              <Div row>
                <Text>
                  <AiOutlineComment /> 10개
                </Text>
                <Text margin="0 0 0 20px">
                  <CgHeart /> 10개
                </Text>
              </Div>
            </Div>
            <Text
              size="16px"
              lineHeight="1.2em"
              textAlign="justify"
              letterSpacing="0.02em"
            >
              {clickPostDetail[0].content}
            </Text>
          </Wrap>

          <Wrap>
            <Div spaceBetween width="100%">
              <Input
                placeholder="댓글 입력란입니다."
                _onChange={onChange}
                value={comment}
                onSubmit={commentWrite}
                is_submit
                borderRadius="0"
              />
              <button
                style={{
                  padding: '10px',
                  background: '#7b7b7b',
                  color: '#fff',
                }}
                onClick={() => {
                  commentWrite();
                }}
              >
                댓글작성
              </button>
            </Div>

            <CommentList>
              {/* 댓글 !!작성할때마다!! 리스트 불러와서 map으로 뿌려주기 */}
              {comments.map((v, i) => {
                return <Comment key={v + i} comment={comments[i]} />;
              })}
            </CommentList>
          </Wrap>
        </Div>
      </Div>
    </React.Fragment>
  );
};

export default PostDetail;

// const Article = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 10px;
//   border-radius: 10px;
//   background: #eee;
//   margin-bottom: 10px;
//   font-size: 20px;
// `;

const ReturnBtn = styled.button`
  float: right;
  padding: 10px;
  background: #fff;
  border: 1px solid #000;
`;

const Wrap = styled.div`
  position: relative;
  align-items: center;
  padding: 20px;
  background: #fff;
  margin-bottom: 20px;
  font-size: 20px;
  width: 100%;
  word-break: break-all;
`;

const CommentList = styled.div`
  margin: 30px 0 0 0;
`;
