import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../redux/configureStore';
import { addCommentDB, getCommentDB } from '../redux/modules/comment';
import { getPostDetailDB } from '../redux/modules/board';
import moment from "moment"; 
import "moment/locale/ko";

import { Header, Comment } from '../components/core';
import { Div, Button, Input, Text } from '../components/ui';
import styled from 'styled-components';
import { AiOutlineComment, AiOutlineEye } from 'react-icons/ai';
import { CgHeart } from 'react-icons/cg';

const PostDetail = (props) => {
  const dispatch = useDispatch();
  
  const [comment, setComment] = React.useState();

  const commentList = useSelector(state => state.comment.commentList);
  console.log(commentList);
  // params값 찾아옴
  const postId = +props.match.params.postId;

  const onChange = (e) => {
    setComment(e.target.value);
  };

  const token = useSelector((state => state.login.userInfo.token));
  const commentData = {
    comment: comment,
    postId: postId,
  }
  console.log(commentData);

  // 댓글작성
  const addComment = () => {
    if (!token) alert('로그인이 필요한 서비스입니다.');
    dispatch(addCommentDB({commentData, token}));
    setComment('');
  };

  const postDetail = useSelector(state => state.board.postDetail);
  const p = useSelector(state => state.board);
  console.log(postDetail, p)

  React.useEffect(()=>{
    // 게시글 정보만 가져오는 디스패치
    dispatch(getPostDetailDB(postId));
    // 댓글만 가져오는 디스패치
    dispatch(getCommentDB(postId));
  }, [])

  // 사진 미업로드시 랜덤사진5장 중 1개 띄우기
  // let num = Math.floor(Math.random() * 5) + 1;
  if(postDetail?.postImageUrl) {
    var img = `https://a-fo-back.shop${postDetail?.postImageUrl}`;
  } else {
    var img = `https://countryimage.s3.ap-northeast-2.amazonaws.com/no2.jpg`;
  }


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
                  {postDetail?.subTitle}
                </Text>
              </div>
              <Div padding="0 0 0 20px">
                <Text size="16px" bold>
                  {postDetail?.title}
                </Text>
              </Div>
              <Div row width="15%">
                <Div fontSize="10px" padding="8px" margin="0 10px 0 0">
                  {postDetail?.target}
                </Div>
                <Div fontSize="10px" padding="8px">
                  {postDetail?.continent}
                </Div>
              </Div>
            </Div>
            <Div spaceBetween>
              <Div spaceEvenly margin="20px 0">
                <div style={{ padding: '5px 0', width: '100px' }}>
                  <Text>{postDetail?.User.userName}</Text>
                </div>
                <Div spaceEvenly>
                  <Div fontSize="13px" width="160px">
                    {moment(postDetail?.createdAt).fromNow()}
                  </Div>
                  <Text>
                    <AiOutlineEye /> {postDetail?.viewCount}회
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
            <Div>
              <Text
                size="16px"
                lineHeight="1.2em"
                textAlign="justify"
                letterSpacing="0.02em"
                margin="0 0 10px 0"
              >
                {postDetail?.content}
              </Text>
              <Div width="300px">
                <img width='100%' src={img} alt='이미지입니다'/>
              </Div>
            </Div>
          </Wrap>

          <Wrap>
            <Div spaceBetween width="100%">
              <Input
                placeholder="댓글 입력란입니다."
                _onChange={onChange}
                value={comment}
                onSubmit={addComment}
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
                  addComment();
                }}
              >
                댓글작성
              </button>
            </Div>

            <CommentList>
              {/* 댓글 !!작성할때마다!! 리스트 불러와서 map으로 뿌려주기 */}
              {commentList?.map((v, i) => {
                return <Comment key={`v_${i}`} comment={v} />;
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
