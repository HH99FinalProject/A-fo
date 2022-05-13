import React from "react";
import styled from "styled-components";
import { history } from "../../redux/configureStore";
import { AiOutlineComment, AiOutlineEye }from "react-icons/ai";

import { Div, Text } from "../ui";
import { useDispatch } from "react-redux";
import { getPostDetailDB } from "../../redux/modules/board";

const Article = (props, {loading}) => {
  const dispatch = useDispatch();

  if(loading) {
    return <h2>...loading</h2>;
  }
  const post = props.postList;
  
  return (
    <React.Fragment>
      <Wrap
        onClick={() => {
          // dispatch(getPostDetailDB(post.postId));
          history.push(`/postDetail/${post.postId}`);
        }}
      >
        <div style={{width:"9%", borderRight:"1px solid #bdbdbd", padding:"5px 0"}}>
          <SubTitleEllipsis>
            {post.subTitle}
          </SubTitleEllipsis>
        </div>
        <Div width="50%" padding="0 0 0 20px">
          <TitleEllipsis>{post.title}</TitleEllipsis>
        </Div>
        <Div spaceEvenly width="15%">
          <Div
            width="45px"
            fontSize="12px"
            padding="8px"
          >
            {post.target}
          </Div>
          <Div
            width="80px"
            fontSize="12px"
            padding="8px"
          >
            {post.continent}
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

const SubTitleEllipsis = styled.div`
  width: 110px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  font-size: 20px;
  color: #7b7b7b;
`;

const TitleEllipsis = styled.div`
  width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  font-size: 16px;
`;