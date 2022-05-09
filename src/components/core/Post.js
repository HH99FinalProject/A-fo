import React from 'react';

import Article from './Article';

const Post = ({ posts, loading }) => {
  
  if(loading) {
    return <h2>...loading</h2>;
  }
  
  return (
    <ul>
    {posts.map((post) => {
      return <Article key={post.id} {...post}/>
    })}
    </ul>
  );
};
export default Post;