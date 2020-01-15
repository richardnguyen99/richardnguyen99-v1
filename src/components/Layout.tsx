/**
 * Layout component does only one job that
 *  frames the structure of the site.
 *
 * If you want to add <SEO /> components,
 *  add in page components.
 */

import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import GlobalStyle from './GlobalStyle'
import Header from './Header'
import Footer from './Footer'

// Define interface for Layout components to type-check params
interface LayoutProps {
  children: React.ReactNode
}

export const query = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(query)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main id="main-page">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
