import React, { useCallback } from 'react';
import CommentItem from './CommentItem';

const Comments = ({ commentList }) => {
  // 전달하는 함수가 메모된다.
  const handleClick = useCallback(() => {
    console.log('Comments 눌림');
  }, []);

  return (
    <div>
      {commentList.map((comment) => {
        return (
          <CommentItem
            key={comment.title}
            title={comment.title}
            content={comment.content}
            likes={comment.likes}
            // 함수를 props로 전달하여 props가 바뀌면서 memo를 써도 다시 전부다 새로 그려진다.
            // onClick={() => {
            //   console.log('눌림');
            // }}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default Comments;
