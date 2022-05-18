import React from 'react';

import Article from './Article';

const Post = ({ boardPosts, loading }) => {
  
  if(loading) {
    return <h2>...loading</h2>;
  }
  
  return (
    <>
      {boardPosts?.map((post, i) => {
        return <Article key={post + i*2} {...post}/>
      })}
    </>
  );
};
export default Post;