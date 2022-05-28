import React from "react";
import styled from 'styled-components';

import { Div, Text } from "../ui";


const MyChats = () => {
  
  return (
    <React.Fragment>
      <Div spaceBetween padding="10px 20px" position="relative" height="86px" 
        backgroundColor="#fff" borderBottom="1px solid #0031de"
        _onClick={()=>{}} cursor="pointer">
        <Div position="absolute" right="20px" top="10px">
          <Text color="#aaa">2021-05-28</Text>
        </Div>
        <Div flexStart>
          <EllipsisName>UsernameConversation</EllipsisName>
          <EllipsisContent>ConversationConversationConversation</EllipsisContent>
        </Div>
      </Div>
    </React.Fragment>
  )
}

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