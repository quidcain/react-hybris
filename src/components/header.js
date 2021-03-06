import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserName } from '@app/state/selectors';
import { getUserIfToken } from '@app/state/effects';
import Logout from '@app/components/logout';

const Header = ({
  siteTitle,
  userName,
  getUserIfToken,
}) => {
  useEffect(() => getUserIfToken(), []);
  return (
    <header
      style={{
        background: 'rebeccapurple',
        marginBottom: '1.45rem',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1 style={{ margin: 0 }}>
                <Link
                  to="/"
                  className="header-text no-decor"
                >
                  {siteTitle}
                </Link>
              </h1>
            </div>
            <div className="col-4 d-flex">
              <div className="container d-flex justify-content-end">
                <div className="row align-items-center">
                  <div className="col-sm text-nowrap header-text">
                    {userName}
                  </div>
                  <div className="col-sm align-items-center">
                    <Logout />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  userName: PropTypes.string,
  getUserIfToken: PropTypes.func,
};

Header.defaultProps = {
  siteTitle: '',
};

const mapStateToProps = state => ({
  userName: getUserName(state),
});

const effects = {
  getUserIfToken,
};

export default connect(
  mapStateToProps,
  effects,
)(Header);
