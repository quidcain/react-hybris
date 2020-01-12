import React from 'react';
import { connect } from 'react-redux';
import { getToken } from '@app/state/selectors';
import { logout } from '@app/state/effects';

const Logout = ({
  token,
  logout,
}) => {
  const handleClick = () => {
    logout();
  };
  if(token) {
    return (
      <span
        onClick={handleClick}
        className="header-text"
      >
        log out
      </span>
    );
  }
  return null;
};

const mapStateToProps = state => ({
  token: getToken(state),
});

const effects = {
  logout,
};

export default connect(
  mapStateToProps,
  effects,
)(Logout);
