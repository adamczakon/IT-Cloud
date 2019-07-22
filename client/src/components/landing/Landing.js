import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Register from "./Register";
import Login from "./Login";

const Landing = ({ isAuthenticated }) => {
  const [loginActive, setLoginActive] = useState(true);
  const [registerActive, setRegisterActive] = useState(false);

  const activateLogin = () => {
    setRegisterActive(false);
    setLoginActive(true);
  };
  const activateRegister = () => {
    setLoginActive(false);
    setRegisterActive(true);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  let className = "bg-grey text-primary";

  let component;
  loginActive
    ? (component = <Login activateRegister={activateRegister} />)
    : (component = <Register activateLogin={activateLogin} />);
  return (
    <section className='landing'>
      <div className='landing-content'>
        <div className='landing-header'>
          <h1 className='mb-2'>IT Cloud</h1>
          <p>
            IT Cloud was created to connect developers from around the world.
            Create your profile, add some info about yourself and intearct with
            other people who share the same passion as you.
          </p>
        </div>
        <div className='landing-forms'>
          <div className='forms-navigation'>
            <div
              name='login'
              className={`navigation-item border-bottom border-right text-secondary ${loginActive &&
                className}`}
              onClick={activateLogin}
            >
              <p className='navigation-header'>Login</p>
            </div>
            <div
              name='register'
              className={`navigation-item border-right text-secondary ${registerActive &&
                className} `}
              onClick={activateRegister}
            >
              <p className='navigation-header '>Register</p>
            </div>
          </div>
          <div className='forms-content'>
            <div className='register'>{component}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
