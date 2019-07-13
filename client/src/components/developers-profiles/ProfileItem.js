import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  }
}) => {
  return (
    <div className='profile'>
      <div className='profile-up'>
        <img src={avatar} alt='' className='profile-img round-img mb' />
        <h3>{name}</h3>
        <p className='text-secondary text-strong'>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className='text-secondary'>{location && <span>{location}</span>}</p>
        <p className='my-1'>
          {skills.slice(0, 3).map((skill, i) => (
            <span key={i} className='badge badge-primary text-primary mr'>
              {skill}
            </span>
          ))}
        </p>
      </div>
      <div className='profile-view'>
        <Link to={`/profile/${_id}`}>
          <h4 className='text-dark'>View Profile</h4>
        </Link>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
