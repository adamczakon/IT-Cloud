import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import UserActions from "./UserActions";
import Experience from "./Experience";
import Education from "./Education";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";

const UserProfile = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='profile-header bg-dark'>
        <div className='user-info'>
          <img
            src={user && user.avatar}
            alt=''
            className='profile-img round-img'
          />
          <h3 className='py-2 ml-1'>{user && user.name}</h3>
        </div>
      </div>
      {profile !== null ? (
        <Fragment>
          <UserActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <div className='my-2'>
            <button
              className='btn btn-danger'
              style={{ marginLeft: "auto", display: "flex" }}
              onClick={() => deleteAccount()}
            >
              <i className='fas fa-user-minus pr-1' />
              Delete Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p className='mt-2'>You have not yet created a profile. </p>
          <p>
            <Link to='/create-profile' className='btn btn-primary my-1'>
              Create Profile
            </Link>
          </p>
        </Fragment>
      )}
    </Fragment>
  );
};

UserProfile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(UserProfile);
