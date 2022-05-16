import React from 'react';
import styled from 'styled-components';

import { Div, Text } from '../ui';

const Comment = (props) => {
  return (
    <React.Fragment>
      <Div spaceBetween padding="10px 0">
        <Div width="10%">
          <Text bold margin="0 0 0 20px">
            아이디
          </Text>
        </Div>
        <Div width="80%">
          <Ellipsis>
            {props.comment.comment}
          </Ellipsis>
        </Div>
        <Div width="10%">
          <Text textAlign="right" margin="0 30px 0 0">
            3일전
          </Text>
        </Div>
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