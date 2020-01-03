import React from 'react'
import styled, { keyframes } from 'styled-components'

import {
  PythonLogo,
  FlaskLogo,
  DjangoLogo,
  JavascriptLogo,
  TypescriptLogo,
  GatsbyLogo,
  ReactLogo,
  SassLogo,
  BootstrapLogo,
  PostgresLogo,
  MongoDBLogo,
  RedisLogo,
  WebpackLogo,
  DockerLogo,
} from './StackLogos'

type Stack = {
  name: string
  logo: React.FC
  link: string

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [c: string]: any
}

interface LogoProps {
  mode: string
}

interface SliderProps extends LogoProps {
  stackList: Stack[]
}

const stacks: Stack[] = [
  {
    name: 'Python',
    logo: PythonLogo,
    link: 'https://wwww.python.org',
  },

  {
    name: 'Flask',
    logo: FlaskLogo,
    link: 'https://www.palletsprojects.com/flask',
  },
  {
    name: 'Django',
    logo: DjangoLogo,
    link: 'https://www.djangoproject.com',
  },
  {
    name: 'React',
    logo: ReactLogo,
    link: 'https://www.reactjs.org',
  },
  {
    name: 'Gatsby',
    logo: GatsbyLogo,
    link: 'https://www.gatsbyjs.org',
  },
  {
    name: 'Typescript',
    logo: TypescriptLogo,
    link: 'https://www.typescriptlang.org',
  },
  {
    name: 'Javascript',
    logo: JavascriptLogo,
    link: 'https://www.developer.mozilla.org/en-US/docs/JavaScript',
  },
  {
    name: 'Docker',
    logo: DockerLogo,
    link: 'https://www.docker.com',
  },
  {
    name: 'Sass Language',
    logo: SassLogo,
    link: 'https://www.sass-lang.org',
  },
  {
    name: 'Bootstrap',
    logo: BootstrapLogo,
    link: 'https://www.getbootstrap.com',
  },
  {
    name: 'PostgreSQL',
    logo: PostgresLogo,
    link: 'https://www.postgresql.org',
  },
  {
    name: 'MongoDB',
    logo: MongoDBLogo,
    link: 'https://www.mongodb.com',
  },
  {
    name: 'Redis',
    logo: RedisLogo,
    link: 'https://redis.io',
  },
  {
    name: 'Webpack',
    logo: WebpackLogo,
    link: 'https://webpack.js.org',
  },
]

const slideAnimation1 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(-100%, 0, 0);
    opacity: 1;
  }
`

const slideAnimation2 = keyframes`
  0% {
    transform: translate3d(100%, 0, 0);
  }
  50% {
    transform: translate3d(0%, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
`

const slideAnimation3 = keyframes`
  0% {
    transform: translate3d(100%, 0, 0);
    opacity: 1;
  }
  50% {
    transform: translate3d(0%, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(-100%, 0, 0);
    opacity: 1;
  }
`

const LogoSliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`

const LogoSlider1 = styled.span`
  display: inline-block;
  animation: ${slideAnimation1} 60s linear;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
  position: absolute;
`

const LogoSlider2 = styled.span`
  display: inline-block;
  animation: ${slideAnimation2} 120s linear infinite;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
`

const LogoSlider3 = styled.span`
  display: inline-block;
  animation: ${slideAnimation3} 120s linear 60s infinite;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
`
const LogoWrapper = styled.section`
  white-space: nowrap;
  overflow: hidden;
  padding: 0.5rem;
  display: flex;
`

const LogoContainer = styled.span<LogoProps>`
  position: relative;
  height: 2rem;
  margin: 0.5rem 1rem;
  bottom: 0;
  opacity: 0.8;
  transition: opacity 120ms ease-in-out;
  ${(props): string | null =>
    props.mode === 'dark' ? `filter: brightness(1) invert(0.1);` : null}

  &:hover {
    opacity: 1;
  }
`

const SortedLogo: React.FC<SliderProps> = ({ stackList, mode }) => (
  <LogoWrapper>
    {stackList.map(
      ({ key, logo: Logo }) =>
        Logo && (
          <LogoContainer key={key} mode={mode}>
            <Logo />
          </LogoContainer>
        )
    )}
  </LogoWrapper>
)

const LogoSlider: React.FC<LogoProps> = ({ mode }) => (
  <LogoSliderContainer>
    <LogoSlider1>
      <SortedLogo mode={mode} stackList={stacks} />
    </LogoSlider1>
    <LogoSlider2>
      <SortedLogo mode={mode} stackList={stacks} />
    </LogoSlider2>
    <LogoSlider3>
      <SortedLogo mode={mode} stackList={stacks} />
    </LogoSlider3>
  </LogoSliderContainer>
)

export default LogoSlider
