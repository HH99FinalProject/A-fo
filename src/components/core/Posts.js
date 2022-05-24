import React from 'react';

import Article from './Article';

const Posts = ({ posts, postList, loading }) => {
  if(loading) {
    return <h2>...loading</h2>;
  }
  
  // console.log(posts, postList);
  return (
    <>
      {postList?.map((post, i) => {
        return <Article key={post + i} post={post} loading={loading} />
      })}
    </>
  );
};



export default Posts;