import React from 'react';
import { Link } from 'gatsby';

import Layout from '@app/components/layout';
import Seo from '@app/components/seo';
import LoginForm from '@app/components/loginform';

const LoginPage = () => (
  <Layout>
    <Seo title="Login page" />
    <h1>That&#39;s a login page</h1>
    <LoginForm />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default LoginPage;
