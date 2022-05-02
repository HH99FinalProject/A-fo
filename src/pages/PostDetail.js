import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { history } from '../redux/configureStore';
import { AiOutlineComment, AiOutlineEye } from 'react-icons/ai';
import { CgHeart } from 'react-icons/cg';

import { Div, Button, Input, Text } from '../components/ui';
import Search from '../components/core/Search';
import Comment from '../components/core/Comment';
import { addComment } from '../redux/modules/comment';

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
                  게시물 제목입니다.
                </Text>
              </Div>
              <Div row width="15%">
                <Div
                  fontSize="10px"
                  padding="8px"
                  backgroundColor="#fff"
                  borderRadius="10px"
                  margin="0 10px 0 0"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              congue sed et sagittis tellus, pharetra malesuada urna. At integer
              adipiscing nullam aliquet dis dolor magna tristique amet. Volutpat
              enim, tincidunt ut neque lorem mi tristique non lorem. Dui
              consequat faucibus mauris risus. Fames dictum mattis dui viverra a
              mattis ornare lectus urna. At nunc ut commodo et, odio sit
              tincidunt. Auctor cursus semper velit sed viverra morbi. Diam sed
              dapibus bibendum odio ut mattis. Vulputate elit risus elementum
              iaculis sed ornare. Non risus id elementum, adipiscing diam ipsum
              velit. Purus etiam quam volutpat tortor, leo. Pellentesque odio
              condimentum lacus parturient sit ut. Orci, in velit ut pretium
              auctor diam semper lectus. Dapibus nulla turpis lorem et enim
              libero.
            </Text>
          </Wrap>

          <Wrap>
            <Text size="20px" margin=" 0 0 20px 0">
              Comment
            </Text>
            <Div spaceBetween width="100%">
              <Input
                placeholder="댓글을 입력해주세요."
                _onChange={onChange}
                value={comment}
                onSubmit={commentWrite}
                is_submit
              />
              <button
                style={{
                  padding: '10px',
                  borderRadius: '10px',
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
  padding: 5px;
  background: tomato;
  color: #fff;
`;

const Wrap = styled.div`
  position: relative;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background: #eee;
  margin-bottom: 20px;
  font-size: 20px;
  width: 100%;
`;

const Content = styled.input`
  font-size: 16px;
  margin-left: 20px;
  padding: 10px;
  width: 90%;
  overflow: auto;
  margin-bottom: 20px;
`;

const CommentList = styled.div`
  margin: 30px 0 0 0;
`;
