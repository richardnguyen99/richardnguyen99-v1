import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { BlogPostQueryQuery } from '../graphql-types'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Row from '../components/Row'
import Col from '../components/Col'
import SEO from '../components/SEO'
import PostTags from '../components/PostTags'

interface PostTemplateProps {
  data: BlogPostQueryQuery
}

const StyledPostTitle = styled.section`
  display: flex;
  align-items: center;

  position: relative;
  height: 70vh;

  padding-top: 2rem;
  margin: 0;

  color: var(--Theme-Body__text);
  background: var(--Theme-Body__backGround);
`

const StyledPostContent = styled.section`
  position: relative;
  max-width: 720px;

  padding-top: 1rem;
  margin-top: -2.5rem;
  margin-right: auto;
  margin-bottom: 0rem;
  margin-left: auto;

  color: var(--Theme-Body__text);
  background: var(--Theme-Body__background);

  border-top: 1px solid var(--Theme-Body__postLine);

  overflow: hidden;
`

const PostTemplate: React.FC<PostTemplateProps> = ({ data: { mdx } }) => {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <StyledPostTitle>
        <Container>
          <Row>
            <Col lg={3}>
              <Img fixed={mdx.frontmatter.thumbnail.childImageSharp.fixed} />
            </Col>
            <Col lg={9}>
              <h1
                style={{
                  fontWeight: 900,
                }}
              >
                {mdx.frontmatter.title}
              </h1>
              <div
                style={{
                  fontSize: '0.875rem',
                }}
              >
                {mdx.frontmatter.date}
              </div>
              <PostTags tags={mdx.frontmatter.tags} />
            </Col>
          </Row>
        </Container>
      </StyledPostTitle>
      <StyledPostContent>
        <Container>
          <MDXRenderer>{mdx?.body}</MDXRenderer>
        </Container>
      </StyledPostContent>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      body
      excerpt
      fields {
        slug
      }
      frontmatter {
        categories
        title
        date(formatString: "YYYY-MM-DD")
        tags
        thumbnail {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      id
      timeToRead
    }
  }
`

export default PostTemplate
