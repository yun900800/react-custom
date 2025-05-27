import List from './list.jsx';
import React from 'react';
const PostList = ({ posts }) => {
    if (!posts || posts.length === 0) {
        return <div>No posts available</div>;
    }
  return (
    <List
      collection={posts}
      textKey="objectID"
      titleKey="title"
      urlKey="url"
    />
  );
}
export default PostList;