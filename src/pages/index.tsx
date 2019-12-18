import React from 'react'

import useLocalStorage from '../hooks/useLocalStorage'
import Layout from '../components/Layout'
import Image from '../components/Image'
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
              top: `${height * 0.05 + 20}%`,
              zIndex: -50,
            }}
          />
        </div>
        <Container>
          <Row>
            <Col lg={12}>
              <div>
                <h1
                  style={{
                    fontSize: '4em',
                    fontWeight: 800,
                    letterSpacing: '4px',
                    display: 'inline-block',
                  }}
                >
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
                <Image />
              </div>
            </Col>
          </Row>
        </Container>
      </SectionMain>
    </Layout>
  )
}

export default IndexPage
