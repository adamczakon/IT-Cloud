import React, { useState } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import moment from "moment";
import { connect } from "react-redux";
import { deleteEducation } from "../../actions/profile";

const Education = ({ education, deleteEducation }) => {
  const [buttonId, setButtonId] = useState();

  const setId = id => {
    buttonId !== id ? setButtonId(id) : setButtonId("");
  };

  const educations = education.map(edu => (
    <div className='p-2' key={edu._id}>
      <div className='info-title'>
        <div>
          <p className='text-strong'>{edu.school}</p>
        </div>
        <div className='info-dots text-secondary'>
          <p className='element-hover' onClick={setId.bind(this, edu._id)}>
            ...
          </p>
          <div className={buttonId !== edu._id ? "hidden" : "delete-wrapper"}>
            <p
              className='text-secondary info-delete'
              onClick={() => deleteEducation(edu._id)}
            >
              Delete
            </p>
          </div>
        </div>
      </div>

      <p className='text-secondary'>
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
