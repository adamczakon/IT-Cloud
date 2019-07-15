import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";
import Alert from "../layout/Alert";

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: ""
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <div className='box p-2'>
        <h3 className='text-primary mb-2'>
          <i class='fas fa-book-reader mr-1' /> Add Experience
        </h3>
        <form
          className='form'
          onSubmit={e => {
            e.preventDefault();
            addExperience(formData, history);
          }}
        >
          <div className='form-group'>
            <p className='text-strong mb'>Job Title</p>
            <input
              type='text'
              placeholder='* Job Title'
              name='title'
              value={title}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <p className='text-strong mb'>Company</p>
            <input
              type='text'
              placeholder='* Company'
              name='company'
              value={company}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <p className='text-strong mb'>Location</p>
            <input
              type='text'
              placeholder='Location'
              name='location'
              value={location}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <h4>From Date</h4>
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
              Current Job
            </p>
          </div>
          <div className='form-group'>
            <h4>To Date</h4>
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
              placeholder='Job Description'
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
            Go Back
          </Link>
        </form>
      </div>
      <Alert />
    </Fragment>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { addExperience }
)(withRouter(AddExperience));
