/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Octicon, { Star, RepoForked } from '@primer/octicons-react'

import { media } from '@styles'
import { useLocalStorage } from '@hooks'
import { Facebook, Twitter, Github } from '@components/svg'

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 1rem;
  padding-bottom: 1rem;

  background: var(--Theme-Body--Text);
  color: var(--Theme-Body--Background);
`

const StyledFooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding-right: 1rem;
  padding-left: 1rem;

  ${media.sm`max-width: 540px;`}
  ${media.md`max-width: 720px;`}
  ${media.lg`max-width: 968px;`}
  ${media.xl`max-width: 1040px;`}
`

const StyledParagraph = styled.p`
  margin: 0;
  font-size: 0.875rem;

  a {
    font-family: 'SF Mono', monospace;
    font-weight: 600;
    text-decoration: underline;

    color: var(--Theme-Body--Background);
  }
`

const StyledInlineBlock = styled.div`
  display: inline-block;

  font-size: 0.75rem;

  padding-left: 0.5rem;

  svg {
    margin-left: 0.25rem;
  }
`

const StyledInlineFlex = styled.div`
  display: flex;
  flex-direction: row;

  svg {
    width: 1rem;

    margin-left: 0.5rem;
  }
`

const StyledFlexGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;

  &#always {
    margin: 0 auto;

    ${media.xl`
      margin: 0;
    `}
  }

  &#wide {
    display: none;

    ${media.xl`
      display: flex;
      flex-flow: row nowrap;
    `}
  }
`

const Footer: React.FC = () => {
  const [theme] = useLocalStorage('theme', 'light')
  const data = useStaticQuery(graphql`
    query MyQuery {
      github {
        repository(name: "richardnguyen99", owner: "richardnguyen99") {
          stargazers(first: 10) {
            totalCount
          }
          forkCount
          url
        }
      }
    }
  `)

  return (
    <StyledFooter>
      <StyledFooterContainer>
        <StyledFlexGroup id="always">
          <StyledParagraph>
            Built by <a href={data.github.repository.url}>@richardnguyen</a>
          </StyledParagraph>
          <StyledInlineBlock>
            {data.github.repository.stargazers.totalCount}
            <Octicon icon={Star} />
          </StyledInlineBlock>
          <StyledInlineBlock>
            {data.github.repository.forkCount}
            <Octicon icon={RepoForked} />
          </StyledInlineBlock>
        </StyledFlexGroup>
        <StyledFlexGroup id="wide">
          <StyledParagraph>See me more at</StyledParagraph>
          <StyledInlineFlex>
            <Facebook mode={theme === 'light' ? 'dark' : 'light'} />
            <Twitter mode={theme === 'light' ? 'dark' : 'light'} />
            <Github mode={theme === 'light' ? 'dark' : 'light'} />
          </StyledInlineFlex>
        </StyledFlexGroup>
      </StyledFooterContainer>
    </StyledFooter>
  )
}

export default Footer
