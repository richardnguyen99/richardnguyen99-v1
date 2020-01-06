/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import useLocalStorage from '../hooks/useLocalStorage'
import Avatar from '../components/graphql/Avatar'
import Card from '../components/Card'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../components/Container'
import SectionMain from '../components/SectionMain'
import SectionHero from '../components/SectionHero'
import Row from '../components/Row'
import Col from '../components/Col'
import Typer from '../components/Typer'
import Em from '../components/Em'
import Parallax from '../components/Parallax'
import Slider from '../components/Slider'

/** Index / Landing page
 * The source code of index page '/'
 */
const IndexPage: React.FC = () => {
  const [theme] = useLocalStorage('theme', 'light')
  // Create a state that takes window height position
  // to modify height of some elements in order to create
  // parallax scrolling
  const [height, setHeight] = React.useState<number>(0)

  const handleHeight = (): void => {
    setHeight(window.pageYOffset || document.documentElement.scrollTop)
  }

  React.useEffect(() => {
    // componentDidMount()
    window.addEventListener('scroll', handleHeight)

    // componentDidUpdate()
    return (): void => {
      window.removeEventListener('scroll', handleHeight)
    }
  })

  return (
    <Layout>
      <SEO title="Home" />
      {/* Modify y-axis (height) to create a parallax scrolling effect */}
      <Parallax height={height}>
        <SectionHero>
          <Container>
            <Row>
              <Col lg={12}>
                <div>
                  <p
                    style={{
                      fontWeight: 400,
                      marginTop: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '6px',
                      paddingBottom: '1rem',
                    }}
                  >
                    Hello, World!
                  </p>
                  <h1
                    style={{
                      fontSize: '3.75rem',
                      fontWeight: 900,
                    }}
                  >
                    It&apos;s&nbsp;
                    <Em
                      spacing={8}
                      top={0.25}
                      bottom={-0.05}
                      color={theme === 'light' ? '#4100f5' : '#ffcdd2'}
                      background={theme === 'light' ? '#ffcdd2' : '#4100f5'}
                    >
                      Richard!
                    </Em>
                    <br />-
                  </h1>
                  <div>
                    <Typer dataText={['Python and Javascript', 'blogs too.']} />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </SectionHero>
      </Parallax>
      <SectionMain>
        <Container style={{ paddingTop: '2rem' }}>
          <Row>
            <Col lg={8}>
              <div>
                <h1>
                  <Em
                    spacing={4}
                    top={0.55}
                    bottom={0.1}
                    color={theme === 'light' ? '#4100f5' : '#ffcdd2'}
                    background={theme === 'light' ? '#ffcdd2' : '#4100f5'}
                  >
                    Myself
                  </Em>
                </h1>
                <p style={{ textAlign: 'justify' }}>
                  I was never the best in schools or classes. I&apos;m just a
                  boy with a high curiosity. Web technology is one of my
                  interests. I usually take notes of important things.
                  That&apos;s why I created this blog to not only store
                  everything that I&apos;ve learned but also share these things
                  to everyone having the same problems.&nbsp;
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <Card style={{ textAlign: 'center' }}>
                <Avatar />
                <hr />
                <h6 style={{ paddingTop: '1rem' }}>Richard Nguyen, 20</h6>
                <p style={{ fontSize: '0.75rem' }}>
                  Student. Vietnamese. Web development.{' '}
                  <span style={{ fontWeight: 600 }}>Kent, WA.</span>
                </p>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div>
                <h1>
                  <Em
                    spacing={4}
                    top={0.55}
                    bottom={0.1}
                    color={theme === 'light' ? '#4100f5' : '#ffcdd2'}
                    background={theme === 'light' ? '#ffcdd2' : '#4100f5'}
                  >
                    Stacks
                  </Em>
                </h1>
                <p>All techniques I feel comfortable the most with</p>
              </div>
              <Slider mode={theme} />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div>
                <h1>
                  <Em
                    spacing={4}
                    top={0.55}
                    bottom={0.1}
                    color={theme === 'light' ? '#4100f5' : '#ffcdd2'}
                    background={theme === 'light' ? '#ffcdd2' : '#4100f5'}
                  >
                    Blogs
                  </Em>
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionMain>
    </Layout>
  )
}

export default IndexPage
