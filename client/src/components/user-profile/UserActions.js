import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div className='user-actions bg-grey'>
      <Link
        to='/edit-profile'
        className='bg-grey border-left border-right text-secondary p-1'
        style={{ marginLeft: "auto" }}
      >
        <i className='fas fa-user-circle text-primary' />{" "}
        <span className='hide-sm'>Edit Profile</span>
      </Link>
      <Link
        to='/add-experience'
        className='bg-grey border-left border-right text-secondary p-1'
      >
        <i className='fab fa-black-tie text-primary' />{" "}
        <span className='hide-sm'>Add Experience</span>
      </Link>
      <Link
        to='/add-education'
        className='bg-grey border-left border-right text-secondary p-1'
      >
        <i className='fas fa-graduation-cap text-primary' />{" "}
        <span className='hide-sm'>Add Education</span>
      </Link>
    </div>
  );
};

export default DashboardActions;
