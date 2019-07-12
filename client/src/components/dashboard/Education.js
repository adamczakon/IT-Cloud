import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import moment from "moment";
import { connect } from "react-redux";
import { deleteEducation } from "../../actions/profile";

const Education = ({ education, deleteEducation }) => {
  const educations = education.map(edu => (
    <div className='p-2' key={edu._id}>
      <p className='text-strong info-title'>
        {edu.school}{" "}
        <i
          onClick={() => deleteEducation(edu._id)}
          class='fas fa-minus-square info-delete'
        />
      </p>
      <p className=' text-secondary'>
        <Moment format='YYYY/MM/DD'>{moment.utc(edu.from)}</Moment> -{" "}
        {edu.to === null ? (
          " Now"
        ) : (
          <Moment format='YYYY/MM/DD'>{moment.utc(edu.to)}</Moment>
        )}
      </p>
      <p className='text-secondary mb-1'>Degree: {edu.degree}</p>
      <p className='text-justify text-secondary'>{edu.description}</p>
    </div>
  ));

  return (
    <div className='box'>
      <h4 className='info-header'>Education</h4>
      <div className='info-content'>{educations}</div>
    </div>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEducation }
)(Education);
