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
  return (
    <div>
      <div>{username}</div>
      <Link to={`/posts/${id}`}>
        <div>{moment(createdAt).fromNow(true)}</div>
      </Link>
      <div>{body}</div>
      <div>buttons here</div>
    </div>
  );
}
