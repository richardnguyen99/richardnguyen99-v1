import React, { useEffect, useRef } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { Col, Heading, Row } from '@components'
import { media } from '@styles'
import sr from '@utils/scrollreveal'

// eslint-disable-next-line import/extensions
import { IndexQueryQuery } from '@/graphql-types'

interface AboutProps {
  img: IndexQueryQuery['placeholderImage']['childImageSharp']
}

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  position: relative;

  padding: 10rem 0;
`

const StyledRowContent = styled(Row)`
  width: 100%;

  justify-content: space-between;
  align-items: flex-start;

  margin: 0 auto;

  ${Col} {
    padding-right: 0;
    padding-left: 0;
  }
`

const StyledSkillsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(10rem, 100%));

  overflow: hidden;

  padding: 0;
  margin-top: 1.5rem;
  list-style: none;
`

const StyledSkillItem = styled.li`
  position: relative;

  margin-bottom: 0.75rem;
  padding-left: 1.25rem;

  font-family: var(--Theme-Body__Font--monospace);
  font-size: 0.75rem;

  color: var(--Theme-Body__text);

  &:before {
    content: '»';
    position: absolute;
    top: 5px;
    left: 0;
    font-size: 1.25rem;
    line-height: 0.875rem;
  }
`
const StyledAvatarContainer = styled.div`
  position: relative;

  max-width: 18.75rem;
  margin-top: 1rem;
  margin-right: auto;
  margin-left: auto;

  ${media.lg`
    margin-right: 0;
    margin-left: 12rem;
  `}
`

const StyledAvatar = styled(Img)`
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);

  border-radius: 4px;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    box-shadow: var(--Theme-Body__boxShadow);
  }
`

const StyledAvatarFrame = styled.div`
  width: 100%;
  position: relative;
  border-radius: 4px;
  background-color: white;
  margin-left: -20px;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    mix-blend-mode: normal;
  }
  &:after {
    border: 4px solid var(--Theme-Body__text);
    top: 20px;
    left: 20px;
    z-index: -1;
  }

  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
    }
    ${StyledAvatar} {
      filter: grayscale(100%) contrast(1);
      mix-blend-mode: normal;
    }
  }
`

const StyledDescription = styled.p`
  color: var(--Theme-Body__text);
  font-weight: 400;
`

const About: React.FC<AboutProps> = ({ img }) => {
  const aboutRef = useRef<HTMLElement>(null)

  useEffect((): void => {
    if (aboutRef && aboutRef.current) {
      sr.reveal(aboutRef.current, {
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
    <StyledContainer id="about" ref={aboutRef}>
      <Heading>About me</Heading>
      <StyledRowContent>
        <Col lg={6}>
          <StyledDescription>
            Hi, I&apos;m Richard Nguyen, a college student and an immigrant from
            Vietnam, living in Kent, WA. I&apos;m currently studying at Highline
            College. I love learning, designing and building websites, both
            front-end and back-end.
          </StyledDescription>
          <StyledDescription>
            I was never the best in schools, I&apos;m super curious about
            everything I&apos;m interested in. Tech is one of those things.
            That&apos;s why I chose to pursue Computer Science as my major. I
            also love reading and learning outside the classroom and I want to
            to keep everything I&apos;ve learned so far. This blog is kinda my
            digital notebook in the internet.
          </StyledDescription>
          <StyledDescription>
            These are fews of technologies I feel comfortable working with.
            I&apos;ll also write about them on this site:
          </StyledDescription>
          <StyledSkillsGrid>
            <StyledSkillItem>Python/Flask/Django</StyledSkillItem>
            <StyledSkillItem>Javascript (ES6+)/Typescript</StyledSkillItem>
            <StyledSkillItem>HTML + CSS/SCSS</StyledSkillItem>
            <StyledSkillItem>React/Gatsby/Vue</StyledSkillItem>
            <StyledSkillItem>PostgresQL/GraphQL</StyledSkillItem>
            <StyledSkillItem>Webpack/Docker</StyledSkillItem>
          </StyledSkillsGrid>
        </Col>
        <Col lg={6}>
          <StyledAvatarContainer>
            <StyledAvatarFrame>
              <StyledAvatar fluid={img.fluid} />
            </StyledAvatarFrame>
          </StyledAvatarContainer>
        </Col>
      </StyledRowContent>
    </StyledContainer>
  )
}

export default About
