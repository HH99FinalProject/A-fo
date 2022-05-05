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
        <div style={{width:"10%", borderRight:"1px solid #bdbdbd", padding:"5px 0", background:"#fff"}}>
          <Text bold size="20px" color="#7b7b7b" backgroundColor="#fff">
            #오스트리아
          </Text>
        </div>
        <Div width="50%" padding="0 0 0 20px" backgroundColor="#fff">
          <Text size="16px" bold backgroundColor="#fff">{props.title}</Text>
        </Div>
        <Div spaceEvenly width="15%" backgroundColor="#fff">
          <Div
            fontSize="10px"
            padding="8px"
            backgroundColor="#fff"
            borderRadius="10px"
          >
            목적
          </Div>
          <Div
            fontSize="10px"
            padding="8px"
            backgroundColor="#fff"
            borderRadius="10px"
          >
            오세아니아
          </Div>
        </Div>
        <div style={{width:"7%", borderRight:"1px solid #bdbdbd", padding:"5px 0", background: "#fff"}}>
          <Text backgroundColor="#fff">작성자 이름</Text>
        </div>
        <Div width="18%" spaceEvenly backgroundColor="#fff">
          <Text backgroundColor="#fff"><AiOutlineComment style={{background: "#fff"}}/> 10개</Text>
          <Text backgroundColor="#fff"><AiOutlineEye style={{background: "#fff"}} /> 155회</Text>
          <Div fontSize="13px" backgroundColor="#fff">
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