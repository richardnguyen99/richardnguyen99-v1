import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Post } from '../types'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Row from '../components/Row'
import Col from '../components/Col'
import SectionTitle from '../components/SectionTitle'
import SectionMain from '../components/SectionMain'
import SEO from '../components/SEO'

interface PostTemplateProps {
  data: {
    mdx: Post
  }
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
            </Col>
          </Row>
        </Container>
      </SectionTitle>
      <SectionMain>
        <Container>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Container>
      </SectionMain>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      excerpt
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fixed(width: 120, height: 120) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        date
        categories
        tags
      }
    }
  }
`

export default PostTemplate
