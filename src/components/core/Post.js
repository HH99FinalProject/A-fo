import React from 'react';

import Article from './Article';

const Post = ({ posts, loading }) => {
  return (
    <>
      { loading &&
        <div> loading... </div>
      }
      {posts.map((post) => {
        return <Article key={post.id} {...post}/>
      })}
    </>
  );
};
export default Post;