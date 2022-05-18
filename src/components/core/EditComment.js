import React from "react";
import styled from "styled-components";

import { Div, Text } from "../ui";

const EditComment = () => {

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
            수정할댓글
          </Ellipsis>
        </Div>
        <Div width="10%">
          <Text textAlign="right" margin="0 30px 0 0">
            3일전
          </Text>
        </Div>
          <>
            <Div width="5%" textCenter cursor="pointer" 
              _onClick={()=>{  }}>
              <Text size="14px" color="blue">수정완료</Text>
            </Div>
          </>
      </Div>
    </React.Fragment>
  )
}

export default EditComment;

const Ellipsis = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;