import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    status,
    company,
    location,
    bio,
    skills,
    user: { name }
  }
}) => (
  <div className='box box-info my-3'>
    <h4 className='info-header'>About</h4>
    <div className='p-2'>
      {bio && (
        <Fragment>
          <h4 className='text-strong'>About me</h4>
          <p> {bio}</p>
        </Fragment>
      )}
      <h4 className='mt-2'>Position</h4>
      <p>
        {status} {company && <span> at {company}</span>}
      </p>
      <h4 className='mt-2'>Location</h4>
      <p>{location && <span>{location}</span>}</p>
      <h4 className='text-strong mt-2 mb'>Skills</h4>
      {skills.map((skill, index) => (
        <span key={index} className='badge badge-primary'>
          {skill}
        </span>
      ))}
    </div>

    <div className='skills' />
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
