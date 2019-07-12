import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import moment from "moment";
import { connect } from "react-redux";
import { deleteExperience } from "../../actions/profile";

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map(exp => (
    <div className='p-2' key={exp._id}>
      <p className='text-strong info-title'>
        {exp.company}
        <i
          className='fas fa-minus-square info-delete'
          onClick={() => deleteExperience(exp._id)}
        />
      </p>

      <p className='text-secondary'>
        <Moment format='YYYY/MM/DD'>{moment.utc(exp.from)}</Moment> -{" "}
        {exp.to === null ? (
          " Now"
        ) : (
          <Moment format='YYYY/MM/DD'>{moment.utc(exp.to)}</Moment>
        )}
      </p>
      <p className='mb-1 text-secondary'>{exp.title}</p>
      <p className='text-justify text-secondary'>{exp.description}</p>
    </div>
  ));
  return (
    <Fragment>
      <div className='box my-3'>
        <h4 className='info-header'>Experience and Employment</h4>
        <div className='info-content'>{experiences}</div>
      </div>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);
