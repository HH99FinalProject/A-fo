import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { history } from '../redux/configureStore';
import axios from 'axios';

import { Div, Text, Image, Button, Input } from '../components/ui';
import Search from '../components/core/Search';
import Article from '../components/core/Article';
import Pagination from '../components/core/Pagination';
import Post from '../components/core/Post';

const Board = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // 현재페이지
  const [postsPerPage] = useState(20); // 페이지당 포스트 개수

  React.useEffect(() => {
    // pagination구현 임시로 데이터 넣었음
    async function fetchData() {
      setLoading(true);
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setPosts(response.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  // 현재페이지 가져오기
  const indexOfLastPost = currentPage * postsPerPage; // 1*10 = 10번 포스트
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 10-10 = 0번 포스트  
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // 0~10번까지 포스트
  // 이벤트 - 페이지 바꾸기
  const paginate = pageNum => setCurrentPage(pageNum);

  return (
    <React.Fragment>
      <Div width="1400px" margin="100px auto 50px auto">
        <Text textAlign="center" size="36px" bold>
          자유 게시판
        </Text>
        <Search />
        <PostBtn
          onClick={() => {
            history.push('/postwrite');
          }}
        >
          작성하기
        </PostBtn>
        <Div margin="100px 0 0 0" border="1px solid #000">
          {/* map으로 돌리기 */}
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
  padding: 10px;
  border: 1px solid #000;
  background: #fff;
  color: #7b7b7b;
`;
