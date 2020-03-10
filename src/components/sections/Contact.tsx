import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

import { media } from '@styles'
import { Heading, MailTo } from '@components'
import sr from '@utils/scrollreveal'

const StyledContainer = styled.section`
  position: relative;

  max-width: 40rem;

  padding: 10rem 0;
  margin: 0 auto;

  text-align: center;
`

const StyledHeading = styled(Heading)`
  display: block;
  justify-content: center;
  &:after {
    display: none;
  }
`

const StyledTitle = styled.h4`
  margin: 0 0 1.25rem;
  font-size: 1.25rem;

  color: var(--Theme-Body__text--tint20);

  ${media.md`font-size: 1.5rem;`}
  ${media.lg`font-size: 1.75rem;`}
  ${media.xl`font-size: 2rem;`}
`

const StyledDescription = styled.p`
  color: var(--Theme-Body__text--tint20);
`

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLElement>(null)

  useEffect((): void => {
    if (contactRef && contactRef.current) {
      sr.reveal(contactRef.current, {
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
    <StyledContainer id="contact" ref={contactRef}>
      <StyledHeading>Contact</StyledHeading>
      <StyledTitle>Interested in what I&apos;ve done?</StyledTitle>
      <StyledDescription>
        Currently enrolling in college but still seeking for a job. If you see
        me good enough for your projects, or just want to show the breeze, my
        inbox is always open. I will try to answer to you ASAP!
      </StyledDescription>
      <MailTo href="mailto:richard.ng0616@gmail.com">Contact me</MailTo>
    </StyledContainer>
  )
}

export default Contact
