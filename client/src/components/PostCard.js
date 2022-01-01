import React from 'react';
import moment from 'moment';

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
      <div>{moment(createdAt).fromNow()}</div>
      <div>{body}</div>
      <div>buttons here</div>
    </div>
  );
}
