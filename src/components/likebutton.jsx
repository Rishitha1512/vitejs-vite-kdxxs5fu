/* eslint-disable react/prop-types */
const LikeButton = ({ isLiked, onToggleLike }) => {
  return (
    <button
      onClick={onToggleLike}
      style={{
        backgroundColor: isLiked ? 'cornflowerblue' : 'coral',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '8px 12px',
        cursor: 'pointer',
      }}
    >
      {isLiked ? 'Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;
