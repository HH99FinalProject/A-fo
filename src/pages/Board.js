import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { history } from '../redux/configureStore';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalReadDB } from '../redux/modules/board';
import { getPostSearchDB } from '../redux/modules/board';
import { HiOutlineSearch } from 'react-icons/hi';

import { Header } from '../components/core';
import { Div, Text, Image, Button, Input } from '../components/ui';
// import Search from '../components/core/Search';
// import Article from '../components/core/Article';
import Pagination from '../components/core/Pagination';
import { Posts } from '../components/core';

const Board = (props) => {
  const dispatch = useDispatch();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // 현재페이지
  const postsPerPage = 5; // 페이지당 포스트 개수

  const totalPostsLength = useSelector(state => state.board.postLength);
  const searchPostsLength = useSelector(state => state.board.postList)?.length;
  console.log(totalPostsLength, searchPostsLength);
  const postList = useSelector((state) => state.board.postList);
  const is_login = useSelector(state => state.login.isLogin);
  console.log(postList, posts)
  
  
  const inputRef = useRef();
  const formRef = useRef();
  const [continent, setContinent] = useState();
  const [purpose, setPurpose] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    const keyWord = inputRef.current.value;
    const selectContinent = continent === undefined ? '모든대륙' : continent;
    const selectPurpose = purpose === undefined ? '모든목적' : purpose;
    const data = { keyWord, selectContinent, selectPurpose, currentPage };
    dispatch(getPostSearchDB(data));
    formRef.current.reset();
  }
  
  const continentSelect = (e) => {
    setContinent(e.target.value);
  }
  const purposeSelect = (e) => {
    setPurpose(e.target.value);
  }


  // 현재페이지 가져오기
  const indexOfLastPost = currentPage * postsPerPage; // 1*20 = 20번 포스트
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 20-20 = 0번 포스트
  const currentPosts = (tmp) => {
    let currentPosts = 0;
    currentPosts = tmp?.slice(indexOfFirstPost, indexOfLastPost);
    return currentPosts;
  }
  
  React.useEffect(() => {
    dispatch(getTotalReadDB(currentPage));
  }, []);

  React.useEffect(()=>{
    setPosts(postList);
    setLoading(false);
  }, [postList]);

  return (
    <React.Fragment>
      <Header></Header>
      <Div width="1400px" margin="100px auto 50px auto">
        <Text textAlign="center" size="36px" bold letterSpacing="0.1em">
          커뮤니티
        </Text>
        <Div
          spaceBetween
          width="840px"
          backgroundColor="#d2dfff"
          border="1px solid #000"
          margin="40px auto 50px"
          alignItems="center">
            <Div margin="0 0 0 2%">
              <HiOutlineSearch size={25} color="#fff" />
            </Div>
          <form ref={formRef} onSubmit={onSubmit} style={{width: "65%"}}>  
            <input
              ref={inputRef}
              style={{
                width: '100%',
                display: 'inline-block',
                padding: '10px 10px',
                fontSize: '18px',
                background: '#d2dfff',
                outline: 'none',
              }}
              placeholder="검색어를 입력해주세요"
            />
          </form>
          <Div backgroundColor="#9fbaff" borderLeft="1px solid #000" padding="10px">
            <Select onChange={continentSelect} defaultValue='모든대륙'>
              <option>모든대륙</option>
              <option>아시아</option>
              <option>유럽</option>
              <option>오세아니아</option>
              {/* <option>남아메리카</option> */}
              <option>북아메리카</option>
            </Select>
            <Select onChange={purposeSelect} defaultValue='모든목적'>
              <option>모든목적</option>
              <option>워홀</option>
              <option>이민</option>
              <option>취업</option>
              <option>유학</option>
            </Select>
          </Div>
        </Div>
        <PostBtn
          onClick={() => {
            is_login ? history.push('/postwrite')
            : alert('로그인이 필요한 서비스입니다.')
          }}>
          글쓰기
        </PostBtn>
        <Div margin="100px 0 0 0" border="1px solid #000" borderBottom="0">
          {/* map으로 돌리기 */}
          <Posts posts={currentPosts(posts)} postList={postList} loading={loading} />
        </Div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={totalPostsLength}
          paginate={setCurrentPage}
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
  &:hover {
    color: #000;
    font-weight: 700;
  }
`;

const Select = styled.select`
  padding: 10px;
  font-size: 14px;
  border: none;
  background: #9fbaff;
  color: #fff;
  &:hover {
    font-weight:700;
    color: #000;
  }
  &:focus {
    border: none;
    color: #000;
  }
  option {
    background: #9fbaff;
    font-size:15px;
  }
`;
