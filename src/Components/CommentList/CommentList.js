import React from 'react';
import {Comment} from '../../Components';
import './CommentList.css';

const CommentList = ({comments}) => {
  return (
    <ul className="CommentList">
      {comments.map( (comment, i) => (
        <Comment 
          key={i}
          name={comment.email.split('@')[0]}
          body={comment.body}
        />
      ))}
    </ul>
  );
};


export default CommentList;
