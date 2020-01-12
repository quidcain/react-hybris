import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserName } from '@app/state/selectors';
import { getUserIfToken } from '@app/state/effects';

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
        <h1 style={{ margin: 0 }} className="d-flex space-between">
          <Link
            to="/"
            className="header-text no-decor"
          >
            {siteTitle}
          </Link>
        </h1>
        <div className="clearfix">
          <span className="header-text float-right">
            {userName}
          </span>
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
