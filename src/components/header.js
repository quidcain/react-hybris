import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import selectors from '@app/state/selectors';


const Header = ({ siteTitle, user }) => (
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
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle} {selectors.getUserName(user)}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(Header);
