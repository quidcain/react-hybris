import React from 'react';
import { Link } from 'gatsby';

import Layout from '@app/components/layout';
import Image from '@app/components/image';
import Seo from '@app/components/seo';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/login/">Go to login page</Link>
  </Layout>
);

export default IndexPage;
