import React, { useRef, useEffect } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { Heading, PostTags } from '@components'
import { media } from '@styles'

import sr from '@utils/scrollreveal'
// eslint-disable-next-line import/extensions
import { IndexQueryQuery } from '@/graphql-types'

interface BlogProps {
  edges: IndexQueryQuery['latest']['edges']
}

const StyledContainer = styled.section`
  position: relative;

  min-height: 100vh;

  padding: 10rem 0;
`

const StyledDescription = styled.p`
  color: var(--Theme-Body__Text);
  font-weight: 900;
`

const StyledPostGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;

  margin: 0;
  padding: 0;

  list-style: none;

  ${media.md`grid-template-columns: repeat(2, 1fr);`}
  ${media.lg`grid-template-columns: repeat(3, 1fr);`}
`

const StyledPostItem = styled.li`
  box-shadow: var(--Theme-Section--BoxShadow);
  border: 1px solid var(--Theme-Section--postLine);
  border-radius: 8px;

  background: var(--Theme-Body--Background);
  color: var(--Theme-Body--Text);

  transition: transform 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    transform: translateY(-5px);
  }
`

const StyledPostContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1rem;

  height: 100%;
`

const StyledPostIcon = styled(Img)`
  display: flex;
`

const StyledPostSubDescription = styled.p`
  color: var(--Theme-Body--Text);

  margin-top: 0;

  font-size: 0.75rem;
  font-weight: 200;
`

const StyledPostTitle = styled.h3`
  color: var(--Theme-Body--Text);

  font-size: 1rem;
  font-weight: 600;

  margin-top: 1rem;
  margin-right: 0rem;
  margin-bottom: 0.75rem;
  margin-left: 0rem;
`

const Blog: React.FC<BlogProps> = ({ edges }) => {
  const blogRef = useRef<HTMLElement>(null)

  useEffect((): void => {
    if (blogRef && blogRef.current) {
      sr.reveal(blogRef.current, {
        origin: 'bottom',
        distance: '20px',
        duration: 500,
        delay: 200,
        mobile: false,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      })
    }
  })

  return (
    <StyledContainer id="blog" ref={blogRef}>
      <Heading>Blogs</Heading>
      <StyledDescription>@Lastest</StyledDescription>
      <StyledPostGrid>
        {edges.map(edge => (
          <StyledPostItem>
            <StyledPostContainer
              to={edge.node.fields.slug}
              key={edge.node.frontmatter.title}
            >
              <StyledPostIcon
                fixed={edge.node.frontmatter.thumbnail.childImageSharp.fixed}
              />
              <StyledPostTitle>{edge.node.frontmatter.title}</StyledPostTitle>
              <StyledPostSubDescription>
                {`${edge.node.frontmatter.date} / ${
                  edge.node.timeToRead === null ? 0 : edge.node.timeToRead
                }min`}
              </StyledPostSubDescription>
              <PostTags tags={edge.node.frontmatter.tags} />
            </StyledPostContainer>
          </StyledPostItem>
        ))}
      </StyledPostGrid>
    </StyledContainer>
  )
}

export default Blog
