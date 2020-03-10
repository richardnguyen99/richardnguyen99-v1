/**
 * Hero section components for the website
 */
import React, { useState, useEffect, useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'

import { ThemeContext } from '@context/ThemeContext'
import { useMediaQuery } from '@hooks'
import { media } from '@styles'
import { Typer } from '@components'
import { Facebook, Twitter, Github } from '@components/svg'

const StyledGreeting = styled.h1`
  color: var(--Theme-Body__text);

  margin: 0;

  font-size: 1rem;
  font-family: var(--Theme-Body__Font--monospace);
  font-weight: normal;
`

const StyledName = styled.h1`
  color: var(--Theme-Body__text);

  line-height: 1.2;
  margin: 0;

  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: -4px;
`

const StyledTitle = styled.h1`
  color: var(--Theme-Body__text--tint20);

  line-height: 1.2;

  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -4px;
`

const StyledDescription = styled.div`
  color: var(--Theme-Body__text);

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
      font-size: 1.125rem;
    }

    ${StyledName} {
      font-size: 3.125rem;
    }

    ${StyledTitle} {
      font-size: 3.125rem;
    }
  `}

  ${media.md`
    max-width: 720px;

    ${StyledGreeting} {
      font-size: 1.5rem;;
    }

    ${StyledName} {
      font-size: 3.75rem;
    }

    ${StyledTitle} {
      font-size: 3.75rem;
    }
  `}

  ${media.lg`
    max-width: 968px;

    ${StyledGreeting} {
      font-size: 1.625rem;
    }

    ${StyledName} {
      font-size: 4.375rem;
    }

    ${StyledTitle} {
      font-size: 4.375rem;
    }
  `}

  ${media.xl`
    max-width: 1040px;

    ${StyledGreeting} {
      font-size: 1.75rem;;
    }

    ${StyledName} {
      font-size: 5rem;
    }

    ${StyledTitle} {
      font-size: 5rem;
    }
  `}

  div {
    width: 100%;
  }
`

const StyledSocialMediaContaier = styled.div`
  display: flex;
  justify-content: flex-start;

  margin-top: 2rem;
`

const StyledSocialMediaLink = styled.a`
  position: relative;
  font-size: 1rem;

  color: var(--Theme-Body__background);
  background: var(--Theme-Body__text);

  border: 1px solid var(--Theme-Body__text);
  border-radius: 4px;

  padding: 1rem;
  margin-right: 1rem;

  line-height: initial; /* ¯\_(ツ)_/¯ */

  svg {
    width: 16px;
    height: 16px;

    fill: var(--Theme-Body__background);
  }

  span {
    max-width: 0;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    overflow: hidden;

    font-weight: 600;

    transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &:hover {
    span {
      ${media.xl`max-width: 10rem;`}
    }
  }
`

const Hero: React.FC = () => {
  // Declare `mounted` to wait for other previous
  // animations are completed.
  const { theme } = useContext(ThemeContext)
  const [isWide] = useMediaQuery({ minWidth: '1040px' })
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
    <StyledName style={{ transitionDelay: '200ms' }}>
      Richard Nguyen.
    </StyledName>
  )

  const Title: React.FC = () =>
    !isWide ? (
      <StyledTitle style={{ transitionDelay: '300ms' }}>
        I love building webs.
      </StyledTitle>
    ) : (
      <Typer
        dataText={[
          'I love building webs.',
          'I write in Python',
          'and Javascript, too!',
        ]}
      />
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

  const SocialMedia: React.FC = () => (
    <StyledSocialMediaContaier style={{ transition: '500ms' }}>
      <StyledSocialMediaLink>
        <Facebook
          id="fb"
          defaultLight
          mode={theme === 'light' ? 'dark' : 'light'}
        />
        <span>&nbsp;&nbsp;/richardn1999</span>
      </StyledSocialMediaLink>
      <StyledSocialMediaLink>
        <Twitter
          id="tw"
          defaultLight
          mode={theme === 'light' ? 'dark' : 'light'}
        />
        <span>&nbsp;&nbsp;Twitter</span>
      </StyledSocialMediaLink>
      <StyledSocialMediaLink>
        <Github
          id="gh"
          defaultLight
          mode={theme === 'light' ? 'dark' : 'light'}
        />
        <span>&nbsp;&nbsp;/richardnguyen99</span>
      </StyledSocialMediaLink>
    </StyledSocialMediaContaier>
  )

  const components = [Greeting, Name, Title, Description, SocialMedia]

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
