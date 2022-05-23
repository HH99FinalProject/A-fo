import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { history } from '../../redux/configureStore';
import moment from "moment"; 
import "moment/locale/ko";

import { deleteCommentDB, editCommentDB } from '../../redux/modules/comment';
import { Div, Text } from '../ui';

const Comment = (props) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [changeComment, setChangeComment] = useState('');

  const is_login = useSelector(state => state.login.isLogin);
  const userId = useSelector(state => state.login.userInfo.userId);
  const commentUserId = props.comment.userId;

  console.log(commentUserId, userId);
  console.log(props)

  const deleteComment = () => {
    const data = {
      commentId: props.comment.commentId,
      postId: props.comment.postId,
    }
    if (window.confirm('정말로 삭제하시겠어요?') === true) {
      dispatch(deleteCommentDB(data));
    }
  }

  const ref = useRef(null);

  const editComment = () => {
    if (changeComment === '') {
      alert('댓글을 수정해주세요.');
    } else {
      const data = {
        comment: changeComment,
        commentId: props.comment.commentId,
        postId: props.comment.postId,
      }
      console.log(data);
      dispatch(editCommentDB(data))
    }
  }

  return (
    <React.Fragment>
      <Div flexStart padding="10px 0">
        <Div width="15%">
        {is_login && commentUserId === userId ?
          <Text bold margin="0 0 0 20px" letterSpacing="1px" size="16px">
            {props.comment.userName} (me)
          </Text>
        : <Text bold margin="0 0 0 20px" letterSpacing="1px" size="16px">
          {props.comment.userName}
      </Text>
        }
        </Div>
        <Div width="70%">
          {/* getState가 true면 원래댓글, false면 수정모드input */}
          {editMode ?
            <input defaultValue={props.comment.comment}
              onChange={(e)=>{ setChangeComment(e.target.value); console.log(e.target.value); }} ></input>
          : <Ellipsis>
              {props.comment.comment}
            </Ellipsis>}
        </Div>
        <Div width="11%" border="1px solid #000">
          <Text textAlign="right" margin="0 40px 0 0" letterSpacing="1px">
            {moment(props.comment.updatedAt).fromNow()}
          </Text>
        </Div>
        {is_login && commentUserId === userId ?
          <>
            <Div width="4%" textCenter cursor="pointer"> 
              {editMode ? 
              <Text size="14px" color="blue" letterSpacing="1px"
                _onClick={()=>{ setEditMode(false); editComment(); }} >수정완료</Text>
              : <Text size="14px" color="blue" letterSpacing="1px"
                _onClick={()=>{ setEditMode(true); }} >수정</Text>}
            </Div>
            <Div width="4%" textCenter cursor="pointer" letterSpacing="1px"
              _onClick={()=>{ deleteComment(); }}>
              <Text size="14px" color="red" letterSpacing="1px" >삭제</Text>
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
  letter-spacing: 1px;
  font-size: 18px;
`;