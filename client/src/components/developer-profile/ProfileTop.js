import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar }
  }
}) => {
  return (
    <Fragment>
      <div className='profile-header profile-background'>
        <div className='user-info'>
          <img className='profile-img round-img my-1' src={avatar} alt='' />
          <h3 className='py-2 ml-1'>{name}</h3>
        </div>
      </div>
      <div className='user-actions bg-grey py-1'>
        <div style={{ marginLeft: "auto" }}>
          {website && (
            <a
              href={website}
              target='_blank'
              rel='noopener noreferrer'
              className='px'
            >
              <i className='fas fa-globe fa-2x' />
            </a>
          )}
          {social && social.twitter && (
            <a
              className='px'
              href={social.twitter}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-twitter fa-2x' />
            </a>
          )}
          {social && social.facebook && (
            <a
              className='px'
              href={social.facebook}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-facebook fa-2x' />
            </a>
          )}
          {social && social.linkedin && (
            <a
              className='px'
              href={social.linkedin}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin fa-2x' />
            </a>
          )}
          {social && social.youtube && (
            <a
              className='px'
              href={social.youtube}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-youtube fa-2x' />
            </a>
          )}
          {social && social.instagram && (
            <a
              className='px'
              href={social.instagram}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram fa-2x' />
            </a>
          )}
        </div>
      </div>
    </Fragment>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
