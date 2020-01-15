/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import styled from 'styled-components'

import Container from './Container'
import Row from './Row'
import Col from './Col'

import MailTo from './MailTo'
import Facebook from './svg/Facebook'
import Twitter from './svg/Twitter'
import Github from './svg/Github'
import useLocalStorage from '../hooks/useLocalStorage'

const StyledFooter = styled.footer`
  margin-top: 2.5rem;
  justify-content: space-between;
  flex-direction: column;

  background: var(--Theme-Body--Background);
  color: var(--Theme-Body--Text);
`

const P = styled.p`
  font-size: 0.875rem;
`

const Footer: React.FC = () => {
  const [mode] = useLocalStorage('theme', 'light')

  return (
    <StyledFooter>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>Contact me</h3>
            <P>
              If you&apos;re interesting in me and my works, or want to shoot
              the breeze, please fire off an e-mail.
            </P>
            <MailTo href="mailto:richard.ng0616@gmail.com">Contact me</MailTo>
          </Col>
          <Col style={{ textAlign: 'right' }} lg={6}>
            <h3>See me more</h3>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '1em',
                flexDirection: 'row-reverse',
              }}
            >
              <a
                style={{ width: '24px', height: '24px', marginRight: '1rem' }}
                href="https://facebook.com"
              >
                <Facebook mode={mode} />
              </a>
              <a
                style={{ width: '24px', height: '24px', marginRight: '1rem' }}
                href="https://facebook.com"
              >
                <Twitter mode={mode} />
              </a>
              <a
                style={{ width: '24px', height: '24px', marginRight: '1rem' }}
                href="https://facebook.com"
              >
                <Github mode={mode} />
              </a>
            </div>
            <P>@Richard Nguyen - all right reserved.</P>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  )
}

export default Footer
