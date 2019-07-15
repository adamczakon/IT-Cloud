import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import moment from "moment";

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description }
}) => (
  <div className='p-2'>
    <h3 className='text-dark'>{school}</h3>
    <p className='text-secondary text-small'>
      <Moment format='YYYY/MM/DD'>{moment.utc(from)}</Moment> -{" "}
      {!to ? " Now" : <Moment format='YYYY/MM/DD'>{moment.utc(to)}</Moment>}
    </p>
    <p className='text-secondary'>{degree}</p>
    <p className='text-secondary'>
      Field Of Study: <span className='pl'>{fieldofstudy}</span>
    </p>
    <p className='text-secondary mt-2'>{description}</p>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;
