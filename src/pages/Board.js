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
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  React.useEffect(() => {
    // pagination구현 임시로 데이터 넣었음
    async function fetchData() {
      setLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  console.log(posts);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

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
        <Div margin="100px 0 0 0">
          {/* map으로 돌리기 */}
          <Post posts={currentPosts(posts)} loading={loading}></Post>
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}></Pagination>
        </Div>

      </Div>
    </React.Fragment>
  );
};

export default Board;

const PostBtn = styled.button`
  float: right;
  padding: 5px;
  background: tomato;
  color: #fff;
`;
