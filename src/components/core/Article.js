import React from "react";
import styled from "styled-components";
import { history } from "../../redux/configureStore";
import { AiOutlineComment, AiOutlineEye }from "react-icons/ai";

import { Div, Text } from "../ui";

const Article = (props) => {

  return (
    <React.Fragment>
      <Wrap
        onClick={() => {
          history.push('/postdetail');
        }}
      >
        <div style={{width:"10%", borderRight:"1px solid #bdbdbd", padding:"5px 0"}}>
          <Text bold size="20px" color="#7b7b7b">
            #오스트리아
          </Text>
        </div>
        <Div width="50%" padding="0 0 0 20px">
          <Text size="16px" bold>{props.title}</Text>
        </Div>
        <Div spaceEvenly width="15%">
          <Div
            fontSize="10px"
            padding="8px"
            borderRadius="10px"
          >
            목적
          </Div>
          <Div
            fontSize="10px"
            padding="8px"
            borderRadius="10px"
          >
            오세아니아
          </Div>
        </Div>
        <div style={{width:"7%", borderRight:"1px solid #bdbdbd", padding:"5px 0", background: "#fff"}}>
          <Text>작성자 이름</Text>
        </div>
        <Div width="18%" spaceEvenly>
          <Text><AiOutlineComment /> 10개</Text>
          <Text><AiOutlineEye /> 155회</Text>
          <Div fontSize="13px">
            몇일전
          </Div>
        </Div>
      </Wrap>
    </React.Fragment>
  )
}

export default Article;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background: #fff;
  border-bottom: 1px solid #000;
  font-size: 20px;
`;