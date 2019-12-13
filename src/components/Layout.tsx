/**
 * Layout component does only one job that
 *  frames the structure of the site.
 *
 * If you want to add <SEO /> components,
 *  add in page components.
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import Header from './Header'
import GlobalStyle from './GlobalStyle'

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
`

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(query)

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main id="main-page">{children}</main>
      <Footer>Hi</Footer>
    </React.Fragment>
  )
}

const query = graphql`
  query PageQuery{
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Layout
