import React from 'react';
import styled from 'styled-components';
import { history } from '../../redux/configureStore';
import { AiOutlineComment, AiOutlineEye } from 'react-icons/ai';
import moment from "moment"; 
import "moment/locale/ko";

import { Div, Text } from '../ui';
import { useDispatch, useSelector } from 'react-redux';

const Article = (props) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.login.userInfo.token);
  const is_login = useSelector(state => state.login.isLogin);
  const post = props.post;
  const postId = post?.postId; // 각 글의 postId
  const postUserId = post?.userId;
  const userId = useSelector(state => state.login.userInfo.userId);
  // console.log(props)
  const formData = new FormData();
  formData.append('token', token);
  formData.append('postId', postId);

  if (props.loading) {
    return <h2>...loading</h2>;
  }
  return (
    <React.Fragment>
      <Wrap onClick={() => {
          history.push(`/postDetail/${post?.postId}`);
        }}>
        <div
          style={{
            width: '14%',
            borderRight: '1px solid #bdbdbd',
            padding: '5px 0',
          }}> 
          <SubTitleEllipsis>{post?.subTitle}</SubTitleEllipsis>
        </div>
        <Div width="47%" padding="0 0 0 20px">
          <TitleEllipsis>{post?.title}</TitleEllipsis>
        </Div>
        <Div spaceEvenly width="20%">
          <Div width="45px" fontSize="14px">
            {post?.target}
          </Div>
          <Div width="80px" fontSize="14px">
            {post?.continent}
          </Div>
        </Div>
        <div
          style={{
            width: '10%',
            borderRight: '1px solid #bdbdbd',
            padding: '10px 0',
          }}>
            {is_login && postUserId === userId ?
            <Text>{post?.User.userName} 😀</Text>
            : <Text>{post?.User.userName}</Text>}
        </div>
        <Div width="20%" spaceEvenly>
          <Text>
            <AiOutlineComment size="20"/> {post?.commentCount}개
          </Text>
          <Text>
            <AiOutlineEye size="20" /> {post?.viewCount}회
          </Text>
          <Div fontSize="14px" width="70px">{moment(post?.createdAt).fromNow()}</Div>
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
  cursor: pointer;
  &:hover {
    background: #d2dfff;
  }
`;

const SubTitleEllipsis = styled.div`
  width: 120px;
  min-height: 30px;
  margin-left: 20px;
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
  letter-spacing: 0.1em;
`;

const TitleEllipsis = styled.div`
  width: 430px;
  margin-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
`;