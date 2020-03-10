/* eslint-disable import/extensions */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Icon, { Star } from '@primer/octicons-react'

import { Heading } from '@components'
import { media } from '@styles'
import { useMediaQuery } from '@hooks'
import { IndexQueryQuery } from '@/graphql-types'

interface ProjectProps {
  repositories: IndexQueryQuery['github']['user']['repositories']
}

const StyledContainer = styled.section`
  position: relative;

  min-height: 100vh;

  padding: 10rem 0;

  ${media.xl`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
  `}
`

const StyledContent = styled.div`
  position: relative;
  grid-row: 1/-1;
  grid-column: 1/7;
`

const StyledLabel = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  font-family: var(--Theme-Body__Font--monospace);
  color: var(--Theme-Body__text);

  margin-top: 0;
  padding: 2rem 0;

  transition: 200ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    letter-spacing: 6px;
  }
`

const StyledStar = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  margin-right: 0.5rem;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  font-weight: 700;

  background: var(--Theme-Body__background);
  color: var(--Theme-Body__text);

  border-radius: 4px;
`

const StyledDescription = styled.div`
  position: relative;
  z-index: 2;

  background: var(--Theme-Body__background);
  color: var(--Theme-Body__text);

  padding: 2rem;

  border-radius: 8px;
  border: var(--Theme-Body__postLine);

  box-shadow: var(--Theme-Body__boxShadow);
`

const StyledTagsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;

  padding: 0;
  margin: 2rem 0 0.75rem;

  list-style: none;
`

const StyledTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  margin-right: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;

  background: var(--Theme-Body__text);
  color: var(--Theme-Body__background);

  border-radius: 4px;

  &:hover {
    filter: brightness(0.9);
  }
`

const StyledImg = styled(Img)`
  position: relative;
  vertical-align: middle;

  width: 100%;
  max-width: 100%;
`

const StyledImgContainer = styled.div`
  grid-column: 6/-1;
  grid-row: 1/-1;

  position: relative;
  z-index: 1;
`

const StyledProject = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0.75rem;

  align-items: center;
  margin-top: 6.5rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:nth-of-type(odd) {
    ${StyledContent} {
      text-align: right;
      grid-column: 7/-1;
    }

    ${StyledImgContainer} {
      grid-column: 1 / 8;
    }

    ${StyledTagsContainer} {
      justify-content: flex-end;
    }
  }
`

const StyledProjectMobile = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;

  margin: 0;
  padding: 0;

  list-style: none;
`

const StyledListProjectMobile = styled.li`
  box-shadow: var(--Theme-Body__boxShadow);
  border: 1px solid var(--Theme-Body__postLine);
  border-radius: 8px;

  background: var(--Theme-Body__background);
  color: var(--Theme-Body__text);

  transition: transform 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    transform: translateY(-5px);
  }
`

const StyledContentMobile = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1rem;

  height: 100%;
`

const StyledDescriptionMobile = styled.p`
  color: var(--Theme-Body--Text);

  margin-top: 0;

  font-size: 0.75rem;
  font-weight: 200;
`

const StyledTitle = styled.h3`
  color: var(--Theme-Body--Text);

  font-size: 1rem;
  font-weight: 600;

  margin-top: 1rem;
  margin-right: 0rem;
  margin-bottom: 0.75rem;
  margin-left: 0rem;
`

const Project: React.FC<ProjectProps> = ({ repositories }) => {
  const [isWide] = useMediaQuery({ minWidth: '1040px' })
  const githubCover: Pick<
    IndexQueryQuery,
    'githubCovers' | 'defaultCover'
  > = useStaticQuery(graphql`
    query GithubQuery {
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
      defaultCover: file(relativePath: { eq: "website-success.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const repos = repositories.edges

  return (
    <StyledContainer>
      <Heading>Projects</Heading>
      {isWide ? (
        <div id="projects" style={{ width: '100%' }}>
          {repos.map(({ node }) => {
            const {
              name,
              description,
              stargazers: { totalCount },
              repositoryTopics: { edges },
            } = node

            const img = githubCover.githubCovers.edges.find(
              edge => edge.node.fluid.originalName === name.concat('.png')
            )

            return (
              <StyledProject>
                <StyledContent>
                  <StyledLabel>{name}</StyledLabel>
                  <StyledStar>
                    {totalCount}
                    <Icon icon={Star} />
                  </StyledStar>
                  <StyledDescription>{description}</StyledDescription>
                  <StyledTagsContainer>
                    {edges.map(edge => (
                      <StyledTag>{edge.node.topic.name}</StyledTag>
                    ))}
                  </StyledTagsContainer>
                </StyledContent>
                <StyledImgContainer>
                  {typeof img !== 'undefined' ? (
                    <StyledImg fluid={img.node.fluid} />
                  ) : (
                    <StyledImg
                      fluid={githubCover.defaultCover.childImageSharp.fluid}
                    />
                  )}
                </StyledImgContainer>
              </StyledProject>
            )
          })}
        </div>
      ) : (
        <StyledProjectMobile>
          {repos.map(({ node }) => {
            const {
              name,
              url,
              description,
              stargazers: { totalCount },
              repositoryTopics: { edges },
            } = node

            return (
              <StyledListProjectMobile>
                <StyledContentMobile href={url}>
                  <StyledTitle>{name}</StyledTitle>
                  <StyledDescriptionMobile>
                    {description}
                  </StyledDescriptionMobile>
                </StyledContentMobile>
              </StyledListProjectMobile>
            )
          })}
        </StyledProjectMobile>
      )}
    </StyledContainer>
  )
}

export default Project
