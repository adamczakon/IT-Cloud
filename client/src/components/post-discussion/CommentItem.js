import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteComment } from "../../actions/post";

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment
}) => (
  <div className='box p-2 mt-4 post-grid'>
    <div className='post-header'>
      <Link to={`/profile/${user}`}>
        <img className='post-img round-img' src={avatar} alt='' />
      </Link>
    </div>
    <div className='post-author'>
      <h4 className='text-dark text-strong'>{name}</h4>
      <p className='post-date text-small text-secondary'>
        <span className='hide-sm'> Posted on </span>{" "}
        <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>
      <p className='my-1 py-1 text-justify border-bottom'>{text}</p>
      <div className='post-buttons'>
        {!auth.loading && user === auth.user._id && (
          <button
            onClick={() => deleteComment(postId, _id)}
            type='button'
            className='btn btn-danger'
          >
            <i className='fas fa-times' />
          </button>
        )}
      </div>
    </div>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
