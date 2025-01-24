/* eslint-disable react/prop-types */
import { useState } from 'react';
import LikeButton from './likebutton';

const PostCard = ({ post }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '10px', marginBottom: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={post.profileImage}
          alt={post.username}
          style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
        />
        <span style={{ fontWeight: 'bold' }}>{post.username}</span>
      </div>
      <p>{post.content}</p>
      <LikeButton isLiked={isLiked} onToggleLike={toggleLike} />
    </div>
  );
};

export default PostCard;
