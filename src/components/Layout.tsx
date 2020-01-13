/**
 * Layout component does only one job that
 *  frames the structure of the site.
 *
 * If you want to add <SEO /> components,
 *  add in page components.
 */

import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'
import Header from './Header'

// Define interface for Layout components to type-check params
interface LayoutProps {
  children: React.ReactNode
}

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0;
  span {
    font-size: 0.75rem;
  }
  background: var(--Theme-Body--Background);
  color: var(--Theme-Body--Text);
`

const query = graphql`
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
      <Footer>Richard Nguyen </Footer>
    </>
  )
}

export default Layout
