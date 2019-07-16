import React, { Fragment } from "react";

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary text-center'>
        <i className='fas fa-exclamation-triangle' /> Page Not Found
      </h1>
      <h3 className='text-center'>This page doesn't exist</h3>
    </Fragment>
  );
};

export default NotFound;
