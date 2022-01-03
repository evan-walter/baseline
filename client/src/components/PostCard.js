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
  function likePost() {
    console.log('Like post!');
  }

  function commentOnPost() {
    console.log('Comment on post!');
  }

  return (
    <div className='flex border-x border-b border-bordergray'>
      <div className='flex basis-full m-2'>
        <div className='flex-none mr-2 w-contain'>
          <div className='h-12 w-12 m-2 border border-white rounded-full'></div>
        </div>
        <div className='flex-1'>
          <div className='flex items-center'>
            <div className='mr-2 font-bold'>{username}</div>
            <div className='mr-2 text-xs text-textgray'>·</div>
            <Link className='text-textgray' to={`/posts/${id}`}>
              <div>{moment(createdAt).fromNow(true)}</div>
            </Link>
          </div>
          <div className='mb-1'>{body}</div>
          <div className='flex items-center justify-between text-textgray'>
            <button className='flex items-center hover:text-themeprimary' onClick={likePost}>
              <div className='mr-2'>
                <svg height='1.2rem' width='1.2rem' xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='img' preserveAspectRatio='xMidYMid meet' viewBox='0 0 20 20'>
                  <path d='M12.72 2c.15-.02.26.02.41.07c.56.19.83.79.66 1.35c-.17.55-1 3.04-1 3.58c0 .53.75 1 1.35 1h3c.6 0 1 .4 1 1s-2 7-2 7c-.17.39-.55 1-1 1H6V8h2.14c.41-.41 3.3-4.71 3.58-5.27c.21-.41.6-.68 1-.73zM2 8h2v9H2V8z' fill='currentColor' />
                </svg>
              </div>
              <div className='mr-2'>{likeCount}</div>
            </button>
            <button className='flex items-center hover:text-blue-500' onClick={commentOnPost}>
              <div className='mr-2'>
                <svg height='1rem' width='1rem' xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='img' preserveAspectRatio='xMidYMid meet' viewBox='0 0 512 512'>
                  <path d='M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z' fill='currentColor' />
                </svg>
              </div>
              <div>{commentCount}</div>
            </button>
            <div className='w-12'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
