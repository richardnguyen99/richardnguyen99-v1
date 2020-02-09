/**
 * Hero section components for the website
 */
import React, { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'

import { media } from '@styles'

const StyledGreeting = styled.h1`
  color: var(--Theme-Body__Text);

  margin: 0;

  font-size: 0.5rem;
  font-family: var(--Theme-Body__Font--monospace);
  font-weight: normal;
`

const StyledName = styled.h1`
  color: var(--Theme-Body__Text);

  line-height: 1.2;
  margin: 0;

  font-size: 2rem;
  font-weight: 900;
  letter-spacing: -4px;
`

const StyledTitle = styled.h1`
  color: var(--Theme-Body__Text-tint20);

  line-height: 1.2;

  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -4px;
`

const StyledDescription = styled.div`
  color: var(--Theme-Body__Text);

  font-weight: 300;

  max-width: 540px;
  width: 50%;
  margin-top: 2rem;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* This will make the component stay center vertically */
  justify-content: center;
  /* This will make the component stay on left horizontally */
  align-items: flex-start;

  min-height: 100vh;
  width: 100%;

  margin: 0px auto;
  padding: 10rem 0;

  ${media.sm`
    max-width: 540px;

    ${StyledGreeting} {
      font-size: 0.625rem;
    }

    ${StyledName} {
      font-size: 2.625;
    }

    ${StyledTitle} {
      font-size: 2.625rem;
    }
  `}

  ${media.md`
    max-width: 720px;

    ${StyledGreeting} {
      font-size: 1rem;;
    }

    ${StyledName} {
      font-size: 3.25rem;
    }

    ${StyledTitle} {
      font-size: 3.25rem;
    }
  `}

  ${media.lg`
    max-width: 968px;

    ${StyledGreeting} {
      font-size: 1.125rem;
    }

    ${StyledName} {
      font-size: 3.875rem;
    }

    ${StyledTitle} {
      font-size: 3.875rem;
    }
  `}

  ${media.xl`
    max-width: 1040px;

    ${StyledGreeting} {
      font-size: 1.25rem;;
    }

    ${StyledName} {
      font-size: 4.5rem;
    }

    ${StyledTitle} {
      font-size: 4.5rem;
    }
  `}

  div {
    width: 100%;
  }
`

const Hero: React.FC = () => {
  // Declare `mounted` to wait for other previous
  // animations are completed.
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 1000)
    return (): void => clearTimeout(timeout)
  }, [mounted])

  const Greeting: React.FC = () => (
    <StyledGreeting style={{ transitionDelay: '100ms' }}>
      Hi, my name is
    </StyledGreeting>
  )

  const Name: React.FC = () => (
    <StyledName style={{ transitionDelay: '200ms' }}>Richard Nguyen</StyledName>
  )

  const Title: React.FC = () => (
    <StyledTitle style={{ transitionDelay: '300ms' }}>
      I love building webs.
    </StyledTitle>
  )

  const Description: React.FC = () => (
    <StyledDescription style={{ transitionDelay: '400ms' }}>
      <p>
        I&apos;m currently a college student living in Kent, WA. I love learning
        and building things about webs and technologies. This site is a place to
        tell you who I am. It&apos;s also used to store everything I&apos;ve
        learned so far.
      </p>
    </StyledDescription>
  )

  const components = [Greeting, Name, Title, Description]

  return (
    <StyledContainer>
      <TransitionGroup component={null}>
        {mounted &&
          components.map(component => (
            <CSSTransition classNames="fade-up" timeout={3000}>
              {component}
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledContainer>
  )
}

export default Hero
