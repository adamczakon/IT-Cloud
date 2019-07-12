import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");

  return (
    <div className='box'>
      <div className='bg-grey p-1'>
        <h4 className='text-secondary'>Create a post</h4>
      </div>
      <form
        className='form'
        onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setText("");
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Create a post'
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

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);
