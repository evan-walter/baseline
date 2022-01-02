import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import PostCard from '../components/PostCard';

export default function Home() {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  return (
    <div>
      <h1 className='text-lg text-center'>Home</h1>
      <div className='border-x border-t border-gray-600'>
        {loading ? <h1>Loading posts...</h1> :
        data.getPosts && data.getPosts.map(post => (
          <div className='border-b border-gray-600' key={post.id}>
            <PostCard post={post} />
          </div>
        ))
        }
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
