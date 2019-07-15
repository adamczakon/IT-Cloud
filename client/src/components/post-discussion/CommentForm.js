import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  return (
    <div className='box my-1'>
      <div className='bg-primary p-1'>
        <h4>Leave a comment</h4>
      </div>
      <form
        className='form'
        onSubmit={e => {
          e.preventDefault();
          addComment(postId, { text });
          setText("");
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Leave a comment...'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <div className='p-1'>
          <button type='Submit' className='btn btn-primary'>
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(CommentForm);
