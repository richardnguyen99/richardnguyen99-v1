import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="Not found" />
    <h1>Richard didn&#39;t create this route</h1>
    <p>Please redirect to other links in the navigation bar.</p>
  </Layout>
)

export default NotFoundPage
