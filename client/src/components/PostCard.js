import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default function PostCard({
  post: {
    id,
    username,
    body,
    createdAt,
    likes,
    likeCount,
    comments,
    commentCount,
  },
}) {
  function likePost () {
    console.log('Like post!');
  }

  return (
    <div>
      <div>{username}</div>
      <Link to={`/posts/${id}`}>
        <div>{moment(createdAt).fromNow(true)}</div>
      </Link>
      <div>{body}</div>
      <button onClick={likePost}>Like Post</button>
      <div>{likeCount}</div>
    </div>
  );
}
