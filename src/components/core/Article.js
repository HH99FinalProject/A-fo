import React from 'react';
import styled from 'styled-components';
import { history } from '../../redux/configureStore';
import { AiOutlineComment, AiOutlineEye } from 'react-icons/ai';
import moment from "moment"; 
import "moment/locale/ko";

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
  // console.log(props.postList, post)
  const formData = new FormData();
  formData.append('token', token);
  formData.append('postId', postId);
  console.log(props.postList.createdAt);
  console.log(props.postList);
  const deletePost = () => {
    if (window.confirm('정말로 삭제하시겠어요?') === true) {
      dispatch(deletePostDB(postId));
    }
  }

  if (loading) {
    return <h2>...loading</h2>;
  }
  return (
    <React.Fragment>
      <Wrap>
        <div
          style={{
            width: '10%',
            borderRight: '1px solid #bdbdbd',
            padding: '5px 0',
          }}
        >
          <SubTitleEllipsis>{post.subTitle}</SubTitleEllipsis>
        </div>
        <Div width="45%" padding="0 0 0 20px" cursor="pointer"
          _onClick={() => {
          history.push(`/postDetail/${post.postId}`);
        }}>
          <TitleEllipsis>{post.title}</TitleEllipsis>
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
            padding: '10px 0',
          }}
        >
          <Text>{props.postList.User.userName}</Text>
        </div>
        <Div width="18%" spaceEvenly>
          <Text>
            <AiOutlineComment /> {props.postList.commentCount}개
          </Text>
          <Text>
            <AiOutlineEye /> {props.postList.viewCount}회
          </Text>
          <Div fontSize="13px" width="70px">{moment(props.postList.createdAt).fromNow()}</Div>
        </Div>
        <Div width="7%" flexStart>
          {is_login && postUserId === userId ?
            <>
              <EditBtn onClick={()=>{ history.push(`/postDetail/edit/${post.postId}`)}}>수정</EditBtn>
              <DeleteBtn onClick={()=>{ deletePost(); }}>삭제</DeleteBtn>
            </>
          : null
          } 
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
  &:hover {
    background: #d2dfff;
  }
`;

const SubTitleEllipsis = styled.div`
  width: 120px;
  min-height: 30px;
  padding: 10px;
  background: #5281FA;
  border-radius: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
  font-size: 17px;
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
  font-weight: 700;
  margin-right: 20px;
  cursor: pointer;
`;
const DeleteBtn = styled.div`
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;