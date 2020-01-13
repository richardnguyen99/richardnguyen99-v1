import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { IndexQueryQuery } from '../graphql-types'

const PostContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const PostLink = styled(Link)`
  display: grid;
  grid-template-columns: 50px 2fr auto;
  align-items: center;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`

interface PostListProps {
  postEdges: IndexQueryQuery['latest']['edges']
}

const PostList: React.FC<PostListProps> = ({ postEdges }) => {
  const postList = postEdges.map(postEdge => {
    return {
      slug: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      thumbnail: postEdge.node.frontmatter.thumbnail,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.frontmatter.date,
    }
  })

  return (
    <PostContainer>
      {postList.map(post => (
        <PostLink to={post.slug} key={post.title}>
          <Img fixed={post.thumbnail.childImageSharp.fixed} />
          <h5>{post.title}</h5>
        </PostLink>
      ))}
    </PostContainer>
  )
}

export default PostList
