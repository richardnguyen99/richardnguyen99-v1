import React from 'react'

import useLocalStorage from '../hooks/useLocalStorage'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import SEO from '../components/SEO'
import Container from '../components/Container'
import SectionMain from '../components/SectionMain'
import SectionHero from '../components/SectionHero'
import Row from '../components/Row'
import Col from '../components/Col'
import Typer from '../components/Typer'
import Em from '../components/Em'

import StyledImgHeroLight from '../components/graphql/StyledImgHeroLight'
import StyledImgHeroDark from '../components/graphql/StyledImgHeroDark'

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
        {theme === 'dark' ? <StyledImgHeroDark /> : <StyledImgHeroLight />}

        {/*
          <div
          id="abstract-circle"
          style={{
            width: '100%',
            position: 'absolute',
            top: '20%',
            bottom: '50%',
            opacity: 0.2,
            transform: 'rotate(-45deg)',
          }}
        >
          <AbstractCircle />
        </div>
        */}
        <Container>
          <Row>
            <Col lg={12}>
              <div>
                <h1
                  style={{
                    fontWeight: 900,
                  }}
                >
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
