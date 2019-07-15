import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getGithubRepos } from "../../actions/profile";

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos]);

  return (
    <div className='box'>
      <h2 className='info-header'>Github Repos</h2>
      {repos === null ? (
        <Spinner />
      ) : (
        <div className='info-content'>
          {repos.map(repo => (
            <div key={repo.id} className='p-2'>
              <div className='border p-1'>
                <h4>
                  <a
                    href={repo.html_url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {repo.name}
                  </a>
                </h4>
                <p className='my-1'>{repo.description}</p>
                <div className='repos-statistics'>
                  <span className='badge badge-secondary'>
                    Stars: {repo.stargazers_count}
                  </span>
                  <span className='badge badge-secondary'>
                    Watchers: {repo.watchers_count}
                  </span>
                  <span className='badge badge-secondary'>
                    Forks: {repo.forks_count}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  repos: state.profile.repos
});

export default connect(
  mapStateToProps,
  { getGithubRepos }
)(ProfileGithub);
