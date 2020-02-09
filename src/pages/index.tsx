/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import { Hero, About, Blog, Project } from '@components/sections'
import { SEO, Layout } from '@components'

// eslint-disable-next-line import/extensions
import { IndexQueryQuery } from '@/graphql-types'
import Container from '../components/Container'

interface IndexPageProps {
  data: IndexQueryQuery
}

const StyledMainContainer = styled(Container)`
  counter-reset: section;
`

/** Index / Landing page
 * The source code of index page '/'
 */
const IndexPage: React.FC<IndexPageProps> = ({
  data: {
    placeholderImage: { childImageSharp },
    latest: { edges },
    github: {
      user: { repositories },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Home" />
      {/* Modify y-axis (height) to create a parallax scrolling effect */}
      <StyledMainContainer>
        <Hero />
        <About img={childImageSharp} />
        <Blog edges={edges} />
        <Project repositories={repositories} />
      </StyledMainContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    defaultCover: file(relativePath: { eq: "website-success.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    githubCovers: allImageSharp {
      edges {
        node {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
    placeholderImage: file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    latest: allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 30, height: 30) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
          }
          timeToRead
          excerpt
        }
      }
    }
    github {
      user(login: "richardnguyen99") {
        repositories(
          first: 1
          orderBy: { field: STARGAZERS, direction: DESC }
        ) {
          edges {
            node {
              name
              url
              description
              stargazers(last: 10) {
                totalCount
              }
              repositoryTopics(last: 3) {
                edges {
                  node {
                    topic {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
