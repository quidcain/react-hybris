import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LoginForm from "../components/loginform";

const LoginPage = () => (
  <Layout>
    <SEO title="Login page" />
    <h1>That's a login page</h1>
    <LoginForm />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default LoginPage
