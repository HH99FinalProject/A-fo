import React from 'react';
import styled from 'styled-components';
import { history } from '../../redux/configureStore';
import { AiOutlineComment, AiOutlineEye } from 'react-icons/ai';

import { Div, Text } from '../ui';
import { deletePostDB, editPostDB, getPostDB } from '../../redux/modules/board';
import { useDispatch, useSelector } from 'react-redux';

const Article = (props, { loading }) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.login.userInfo.token);
  const is_login = useSelector(state => state.login.isLogin);
  const post = props.postList;
  const postId = post.postId; // 각 글의 postId
  const postUserId = post.userId;
  const userId = useSelector(state => state.login.userInfo.userId);
  // console.log(userId, postUserId);
  const viewCount = useSelector(state => state.board.postDetail?.viewCount);

  const formData = new FormData();
  formData.append('token', token);
  formData.append('postId', postId);

  const deletePost = () => {
    if (window.confirm('정말로 삭제하시겠어요?') === true) {
      dispatch(deletePostDB(postId));
    }
  }

  const editModePost = () => {
    // history.push(`/post/${postId}`)
    // const data = {post, token}
    // dispatch(editPostDB(data));
  }

  if (loading) {
    return <h2>...loading</h2>;
  }
  return (
    <React.Fragment>
      <Wrap>
        <div
          style={{
            width: '9%',
            borderRight: '1px solid #bdbdbd',
            padding: '5px 0',
          }}
        >
          <SubTitleEllipsis>{post.subTitle}</SubTitleEllipsis>
        </div>
        <Div width="40%" padding="0 0 0 20px" cursor="pointer"
          _onClick={() => {
          history.push(`/postDetail/${post.postId}`);
        }}>
          <TitleEllipsis>{post.title}</TitleEllipsis>
        </Div>
        <Div width="10%" padding="0 0 0 20px" flexStart >
          {is_login && postUserId === userId ?
            <>
              <EditBtn onClick={()=>{ editModePost(); history.push(`/postDetail/edit/${post.postId}`)}}>수정</EditBtn>
              <DeleteBtn onClick={()=>{ deletePost(); }}>삭제</DeleteBtn>
            </>
          : null
          } 
        </Div>
        <Div spaceEvenly width="15%">
          <Div width="45px" fontSize="12px" padding="8px">
            {post.target}
          </Div>
          <Div width="80px" fontSize="12px" padding="8px">
            {post.continent}
          </Div>
        </Div>
        <div
          style={{
            width: '7%',
            borderRight: '1px solid #bdbdbd',
            padding: '5px 0',
            background: '#fff',
          }}
        >
          <Text>작성자 이름</Text>
        </div>
        <Div width="18%" spaceEvenly>
          <Text>
            <AiOutlineComment /> 10개
          </Text>
          <Text>
            <AiOutlineEye /> {props.postList.viewCount}회
          </Text>
          <Div fontSize="13px">몇일전</Div>
        </Div>
      </Wrap>
    </React.Fragment>
  );
};

export default Article;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background: #fff;
  border-bottom: 1px solid #000;
  font-size: 20px;
`;

const SubTitleEllipsis = styled.div`
  width: 110px;
  min-height: 30px;
  padding: 7px 0;
  background: #5281FA;
  border-radius: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  font-size: 18px;
  color: #fff;
  text-align: center;
`;

const TitleEllipsis = styled.div`
  width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  font-size: 16px;
`;

const EditBtn = styled.div`
  font-size: 14px;
  padding: 5px;
  background: tomato;
  margin-right: 10px;
  cursor: pointer;
`;
const DeleteBtn = styled.div`
  font-size: 14px;
  padding: 5px;
  background: yellowgreen;
  cursor: pointer;
`;