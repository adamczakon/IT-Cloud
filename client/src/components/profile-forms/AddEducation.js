import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";
import Alert from "../layout/Alert";

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: ""
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='box p-2'>
      <h3 className='text-primary mb-2'>
        <i class='fas fa-book-reader mr' /> Add Education
      </h3>
      <form
        className='form'
        onSubmit={e => {
          e.preventDefault();
          addEducation(formData, history);
        }}
      >
        <div className='form-group'>
          <p className='text-strong mb'>University</p>
          <input
            type='text'
            placeholder='* School'
            name='school'
            value={school}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <p className='text-strong mb'>Degree</p>
          <input
            type='text'
            placeholder='* Degree or Certificate'
            name='degree'
            value={degree}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <p className='text-strong mb'>Field of Study</p>
          <input
            type='text'
            placeholder='* Field of Study'
            name='fieldofstudy'
            value={fieldofstudy}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <p className='text-strong mb'>*From</p>
          <input
            type='date'
            name='from'
            value={from}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <p className='text-strong mb ml-1'>
            <input
              type='checkbox'
              name='current'
              checked={current}
              value={current}
              onChange={() => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
            />{" "}
            Current School
          </p>
        </div>
        <div className='form-group'>
          <p className='text-strong mb'>To</p>
          <input
            type='date'
            name='to'
            value={to}
            onChange={e => onChange(e)}
            disabled={toDateDisabled ? "disabled" : ""}
          />
        </div>
        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Program Description'
            value={description}
            onChange={e => onChange(e)}
          />
        </div>
        <button
          type='submit'
          className='btn btn-primary my-1 btn-block'
          style={{ padding: "0.8rem" }}
        >
          Save Changes
        </button>
        <Link className='btn btn-dark my-1' to='/dashboard'>
          Back To Profile
        </Link>
      </form>
      <Alert />
    </div>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { addEducation }
)(withRouter(AddEducation));
