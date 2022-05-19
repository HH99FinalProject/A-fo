import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { history } from '../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalReadDB, getPostDetailDB } from '../redux/modules/board';
import Post from '../components/core/Post';

import { Header } from '../components/core';
import { Div, Text, Image, Button, Input } from '../components/ui';
import Search from '../components/core/Search';
import Article from '../components/core/Article';
import Pagination from '../components/core/Pagination';

const Board = (props) => {
  const dispatch = useDispatch();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // 현재페이지
  const [postsPerPage] = useState(20); // 페이지당 포스트 개수
  const postList = useSelector((state) => state.board.postList);
  // console.log(postList)
  React.useEffect(() => {
    dispatch(getTotalReadDB());
  }, []);

  // 현재페이지 가져오기
  const indexOfLastPost = currentPage * postsPerPage; // 1*10 = 10번 포스트
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 10-10 = 0번 포스트
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // 0~10번까지 포스트
  // 이벤트 - 페이지 바꾸기
  const paginate = (pageNum) => setCurrentPage(pageNum);
  const is_login = useSelector(state => state.login.isLogin);
  return (
    <React.Fragment>
      <Header></Header>
      <Div width="1400px" margin="100px auto 50px auto">
        <Text textAlign="center" size="36px" bold>
          자유 게시판
        </Text>
        <Search />
        <PostBtn
          onClick={() => {
            is_login ? history.push('/postwrite')
            : alert('로그인이 필요한 서비스입니다.')
          }}
        >
          글쓰기
        </PostBtn>
        <Div margin="100px 0 0 0" border="1px solid #000">
          {/* map으로 돌리기 */}
          {postList?.map((v, i) => {
            return <Article key={v + i} postList={v} loading={loading} />;
          })}
          <Post posts={currentPosts} loading={loading} ></Post>
        </Div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        ></Pagination>
      </Div>
    </React.Fragment>
  );
};

export default Board;

const PostBtn = styled.button`
  float: right;
  padding: 10px 15px;
  border: 1px solid #000;
  background: #fff;
  color: #7b7b7b;
`;
