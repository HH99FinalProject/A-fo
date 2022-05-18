import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { deleteCommentDB } from '../../redux/modules/comment';

import { Div, Text } from '../ui';

const Comment = (props) => {
  const dispatch = useDispatch();
  
  const is_login = useSelector(state => state.login.isLogin);
  const userId = useSelector(state => state.login.userInfo.userId);
  const commentUserId = props.comment.userId;

  console.log(commentUserId, userId);

  const deleteComment = () => {
    dispatch(deleteCommentDB(props.comment.commentId));
  }

  return (
    <React.Fragment>
      <Div flexStart padding="10px 0">
        <Div width="10%">
          <Text bold margin="0 0 0 20px">
            아이디
          </Text>
        </Div>
        <Div width="70%">
          <Ellipsis>
            {props.comment.comment}
          </Ellipsis>
        </Div>
        <Div width="10%">
          <Text textAlign="right" margin="0 30px 0 0">
            3일전
          </Text>
        </Div>
        {is_login && commentUserId === userId ?
          <>
            <Div width="5%" textCenter cursor="pointer" 
              _onClick={()=>{  }}>
              <Text size="14px" color="blue">수정</Text>
            </Div>
            <Div width="5%" textCenter cursor="pointer" 
              _onClick={()=>{ deleteComment(); }}>
              <Text size="14px" color="red" >삭제</Text>
            </Div>
          </>
        : null}
      </Div>
    </React.Fragment>
  );
};

export default Comment;

const Ellipsis = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;