import React from 'react'

import useLocalStorage from '../hooks/useLocalStorage'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import SEO from '../components/SEO'
import Container from '../components/Container'
import SectionMain from '../components/SectionMain'
import SectionHero from '../components/SectionHero'
import Row from '../components/Row'
import Cross from '../components/Cross'
import Circle from '../components/Circle'
import Col from '../components/Col'
import Typer from '../components/Typer'
import Em from '../components/Em'

import AbstractSquareDot from '../components/svg/AbstractSquareDot'
import AbstractCircle from '../components/svg/AbstractCircle'
import AbstractLine from '../components/svg/AbstractLine'

const IndexPage: React.FC = () => {
  const [theme] = useLocalStorage('theme', 'light')
  const [height, setHeight] = React.useState<number>(0)

  const handleHeight = (): void => {
    setHeight(window.pageYOffset || document.documentElement.scrollTop)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleHeight)

    return (): void => {
      window.removeEventListener('scroll', handleHeight)
    }
  })

  return (
    <Layout>
      <SEO title="Home" />
      <SectionHero
        style={{
          transform: `translate3d(0, ${height * 0.5}px, 0`,
        }}
      >
        <div>
          <Circle
            size={500}
            style={{
              right: '-15%',
              top: `20%`,
              zIndex: -50,
              transform: `translate3d(0, ${height * 0.2}px, 0)`,
            }}
          />
        </div>
        <div
          id="abstract-square-dot"
          style={{
            width: '20%',
            top: '40%',
            left: '40%',
            position: 'absolute',
            opacity: 0.4,
            transform: `translate3d(0, ${height * 0.2}px, 0)`,
          }}
        >
          <AbstractSquareDot mode={theme} />
        </div>
        <div
          id="abstract-circle"
          style={{
            width: '350px',
            height: '350px',
            position: 'absolute',
            top: '455px',
            right: '-100px',
            bottom: '50%',
            opacity: 0.45,
            transform: 'rotate(-45deg)',
          }}
        >
          <AbstractCircle />
        </div>
        <div>
          <Circle
            size={300}
            style={{
              opacity: 1,
              background: '#1db954',
              right: '-80px',
              top: `425px`,
              zIndex: -50,
            }}
          />
        </div>
        <div
          id="abstract-circle"
          style={{
            width: '350px',
            height: '350px',
            position: 'absolute',
            top: '-35%',
            right: '55%',
            bottom: '50%',
            left: '80%',
            opacity: 0.45,
            transform: 'rotate(-45deg)',
          }}
        >
          <AbstractCircle />
        </div>
        <div
          id="abstract-circle"
          style={{
            width: '100%',
            position: 'absolute',
            top: '20%',
            right: '55%',
            bottom: '50%',
            left: '-100%',
            opacity: 0.2,
            transform: 'rotate(-45deg)',
          }}
        >
          <AbstractCircle />
        </div>
        <Container>
          <Row>
            <Col lg={12}>
              <div>
                <h1>
                  <Cross
                    style={{
                      transform: 'scale(0.5) rotate(-45deg)',
                      top: `${height * 0.075 + 15}%`,
                    }}
                  />
                  Hi, I&apos;m&nbsp;
                  <Em
                    color={theme === 'light' ? '#4100f5' : '#ffcdd2'}
                    background={theme === 'light' ? '#ffcdd2' : '#4100f5'}
                  >
                    Richard!
                  </Em>
                </h1>
                <div>
                  <Typer dataText={['Python and Javascript', 'blogs too.']} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionHero>
      <SectionMain>
        <Container style={{ paddingTop: '2rem' }}>
          <Row>
            <Col lg={6}>
              <div>
                <h1>Hi people</h1>
                <p>Welcome to Richard&apos;s blog</p>
                <p>Now go build something great.</p>
              </div>
            </Col>
            <Col lg={6}>
              <div style={{ maxWidth: `350px`, marginBottom: `1.45rem` }}>
                <Banner mode={theme === 'light' ? '#dae0e6' : '#1a1a1b'} />
              </div>
            </Col>
          </Row>
        </Container>
      </SectionMain>
    </Layout>
  )
}

export default IndexPage
