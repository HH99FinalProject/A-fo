import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getDetailDB } from '../../redux/modules/chat';

import { Div, Text } from '../ui';

const MyChats = (props) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.login.userInfo.userId);
  const DMList = useSelector(state => state.chat.detailChat);
  console.log(DMList);
  console.log(props.chat.room);

  return (
    <React.Fragment>
      <Div
        spaceBetween
        padding="10px 20px"
        position="relative"
        height="86px"
        backgroundColor="#fff"
        borderBottom="1px solid #0031de"
        _onClick={() => { dispatch(getDetailDB(props.room)) }}
        cursor="pointer"
      >
        <Div position="absolute" right="20px" top="10px">
          <Text color="#aaa">{props.updatedAt}</Text>
        </Div>
        <Div flexStart>
          <EllipsisName>{props.targetAuthor}</EllipsisName>
          <EllipsisContent>
            {props.message}
          </EllipsisContent>
        </Div>
      </Div>
    </React.Fragment>
  );
};

export default MyChats;

const EllipsisName = styled.div`
  width: 90px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 20px;
  color: #0031de;
  font-size: 16px;
`;

const EllipsisContent = styled.div`
  width: 260px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
`;
