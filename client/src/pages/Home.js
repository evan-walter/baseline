import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import PostCard from '../components/PostCard';

export default function Home() {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  return (
    <div>
      <div>Home</div>
      <div>
        <h1>Recent Posts</h1>
        <div>
          {loading ? <h1>Loading posts...</h1> :
          data.getPosts && data.getPosts.map(post => (
            <div key={post.id}>
              <PostCard post={post} />
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
}

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;
