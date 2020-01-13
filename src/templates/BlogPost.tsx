import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { BlogPostQueryQuery } from '../graphql-types'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Row from '../components/Row'
import Col from '../components/Col'
import SectionTitle from '../components/SectionTitle'
import SectionMain from '../components/SectionMain'
import SEO from '../components/SEO'
import PostTags from '../components/PostTags'

interface PostTemplateProps {
  data: BlogPostQueryQuery
}

const PostTemplate: React.FC<PostTemplateProps> = ({ data: { mdx } }) => {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <SectionTitle>
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
      </SectionTitle>
      <SectionMain>
        <Container>
          <MDXRenderer>{mdx?.body}</MDXRenderer>
        </Container>
      </SectionMain>
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
