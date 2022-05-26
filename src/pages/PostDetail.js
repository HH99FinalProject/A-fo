import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../redux/configureStore';
import { addCommentDB, getCommentDB } from '../redux/modules/comment';
import { getPostDetailDB, deletePostDB } from '../redux/modules/board';
import moment from "moment"; 
import "moment/locale/ko";

import { Header, Comment } from '../components/core';
import { Div, Button, Input, Text } from '../components/ui';
import styled from 'styled-components';
import { AiOutlineComment, AiOutlineEye } from 'react-icons/ai';
import { FiThumbsUp } from 'react-icons/fi';
import { CgHeart } from 'react-icons/cg';

const PostDetail = (props) => {
  const dispatch = useDispatch();
  
  const [comment, setComment] = React.useState();
  const postDetail = useSelector(state => state.board.postDetail);
  const is_login = useSelector(state => state.login.isLogin);
  const userId = useSelector(state => state.login.userInfo.userId);
  const postUserId = postDetail?.userId;

  const commentList = useSelector(state => state.comment.commentList);
  
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

  // 댓글작성
  const addComment = () => {
    if (!token) alert('로그인이 필요한 서비스입니다.');
    dispatch(addCommentDB({commentData, token}));
    setComment('');
  };


  React.useEffect(()=>{
    // 게시글 정보만 가져오는 디스패치
    dispatch(getPostDetailDB(postId));
    // 댓글만 가져오는 디스패치
    dispatch(getCommentDB(postId));
  }, [])

  if(postDetail?.postImageUrl) {
    var img = postDetail?.postImageUrl;
  } else {
    var img = `https://a-fo-bucket2.s3.ap-northeast-2.amazonaws.com/A-fo_default.jpg`;
  }

  const deletePost = () => {
    if (window.confirm('정말로 삭제하시겠어요?') === true) {
      dispatch(deletePostDB(postId));
      history.push('/board');
    }
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
            <Div display="flex">
              <Div flexStart width="88%">
                <div
                  style={{
                    width: '10%',
                    borderRight: '1px solid #bdbdbd',
                    padding: '5px 0',
                  }}>
                  <Text bold size="20px" color="#7b7b7b" letterSpacing="1px">
                    {postDetail?.subTitle}
                  </Text>
                </div>
                
                <Div margin="0 0 0 20px">
                  <Text size="21px" bold letterSpacing="1px">
                    {postDetail?.title}
                  </Text>
                </Div>
                
                <Div row margin="0 0 0 20px">
                  <Div fontSize="16px" margin="0 20px 0 0">
                    {postDetail?.target}
                  </Div>
                  <Div fontSize="16px">
                    {postDetail?.continent}
                  </Div>
                </Div>
              </Div>

              {is_login && postUserId === userId ? 
              <Div width="12%" spaceEvenly>
                <Div>
                  <Text cursor="pointer" letterSpacing="1px" width="60px" boldHover="bold"
                    _onClick={()=>{ history.push(`/postDetail/edit/${postDetail?.postId}`)}}>수정하기</Text>
                </Div>
                <Div margin="0 0 0 20px">
                  <Text cursor="pointer" letterSpacing="1px" width="60px" boldHover="bold"
                    _onClick={()=>{ deletePost(); }}>삭제하기</Text>
                </Div>
              </Div>
              : null}
            </Div>
            <Div flexStart>
              <Div spaceEvenly margin="20px 0">
                <Div padding="5px 0" width="135px">
                  <Text size="16px" letterSpacing="1px">{postDetail?.User.userName}</Text>
                </Div>
                <Div spaceEvenly>
                  <Div fontSize="14px" margin="0 20px 0 0">
                    {moment(postDetail?.createdAt).fromNow()}
                  </Div>
                  <AiOutlineEye size={20} /> 
                  <Text margin="0 0 0 5px" letterSpacing="1px">{postDetail?.viewCount}회</Text>
                </Div>
              </Div>
              <Div row margin="0 20px">
                <AiOutlineComment size={20} />  
                <Text margin="0 0 0 5px" letterSpacing="1px">{postDetail?.commentCount}개</Text>
              </Div>
              {/* <Div row> */}
                {/* <Div row>
                  <FiThumbsUp onClick={()=> {window.alert('준비중입니다!')}} style={{cursor:"pointer"}} size={20} />
                  <Text margin="0 0 0 5px" letterSpacing="1px">10개</Text>
                </Div> */}
              {/* </Div> */}
            </Div>
            <Div borderTop="2px solid #ccc">
              <Text
                size="16px"
                lineHeight="1.2em"
                textAlign="justify"
                letterSpacing="0.05em"
                margin="40px 0 20px 0"
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
              <input
                placeholder="댓글 입력란입니다."
                style={{
                  width: "90%",
                  height: "40px",
                  fontSize: "18px",
                  padding: "0 10px",
                  borderRadius: "0",
                  lineHeight: "1.6em",
                  fontFamily: "inherit",
                  letterSpacing: "0.05em",
                }}
                onChange={onChange}
                value={comment}
                onSubmit={addComment}
                is_submit/>
              <button
                style={{
                  margin:"0 0 0 20px",
                  height: "40px",
                  padding: '10px',
                  background: '#7b7b7b',
                  color: '#fff',
                }}
                onClick={() => {
                  addComment();
                }}>
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

const ReturnBtn = styled.button`
  float: right;
  padding: 10px;
  background: #fff;
  border: 1px solid #000;
  color: #7b7b7b;
  &:hover {
    color: #000;
    font-weight: 700;
  }
`;

const Wrap = styled.div`
  position: relative;
  align-items: center;
  padding: 40px;
  background: #fff;
  margin-bottom: 20px;
  font-size: 20px;
  width: 100%;
  word-break: break-all;
`;

const CommentList = styled.div`
  margin: 30px 0 0 0;
`;
