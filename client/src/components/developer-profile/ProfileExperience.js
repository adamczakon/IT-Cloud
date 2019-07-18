import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import moment from "moment";

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description }
}) => {
  return (
    <div className='p-2'>
      <h4 className='text-dark'>{company}</h4>
      <p className='text-secondary text-small'>
        <Moment format='YYYY/MM/DD'>{moment.utc(from)}</Moment> -{" "}
        {!to ? " Now" : <Moment format='YYYY/MM/DD'>{moment.utc(to)}</Moment>}
      </p>
      <p className='text-strong info-title'>{title}</p>
      <p className='mt-2 text-justify text-secondary'>{description}</p>
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default ProfileExperience;
