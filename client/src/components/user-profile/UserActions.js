import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div className='user-actions bg-grey'>
      <Link
        to='/edit-profile'
        className='btn-action border-left border-right'
        style={{ marginLeft: "auto" }}
      >
        <i className='fas fa-user-circle text-primary' />{" "}
        <span className='hide-sm'>Edit Profile</span>
      </Link>
      <Link to='/add-experience' className='btn-action border-right'>
        <i className='fab fa-black-tie text-primary' />{" "}
        <span className='hide-sm'>Add Experience</span>
      </Link>
      <Link to='/add-education' className='btn-action '>
        <i className='fas fa-graduation-cap text-primary' />{" "}
        <span className='hide-sm'>Add Education</span>
      </Link>
    </div>
  );
};

export default DashboardActions;
