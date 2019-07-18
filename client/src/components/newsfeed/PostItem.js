import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => (
  <div className='box p-2 my-2 post-grid'>
    <div className='post-header'>
      <Link to={`/profile/${user}`}>
        <img className='post-img round-img' src={avatar} alt='' />
      </Link>
    </div>
    <div className='post-author'>
      <Link to={`/profile/${user}`}>
        <h4 className='text-dark text-strong'>{name}</h4>
      </Link>
      <p className='post-date text-small text-secondary'>
        <span className='hide-sm'>Posted on</span>{" "}
        <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>
      <p className='my-1 py-1 text-justify border-bottom'>{text}</p>
      {showActions && (
        <div className='post-buttons'>
          <button
            onClick={() => addLike(_id)}
            type='button'
            className='btn btn-light'
          >
            <i className='fas fa-thumbs-up' />{" "}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button
            onClick={() => removeLike(_id)}
            type='button'
            className='btn btn-light'
          >
            <i className='fas fa-thumbs-down' />
          </button>
          <Link to={`/posts/${_id}`} className='btn btn-primary'>
            <i className='far fa-comments ' />
            {comments.length > 0 && (
              <span className='comment-count ml'>
                <span className='pl'>{comments.length}</span>
              </span>
            )}
          </Link>
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={() => deletePost(_id)}
              type='button'
              className='btn btn-danger'
            >
              <i className='fas fa-times' />
            </button>
          )}
        </div>
      )}
    </div>
  </div>
);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost }
)(PostItem);
