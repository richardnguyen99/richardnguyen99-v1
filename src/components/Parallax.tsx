import styled from 'styled-components'

interface ParallaxProps {
  height: number
}

const Parallax = styled.div<ParallaxProps>`
  position: relative;

  @media screen and (min-width: 1200px) {
    transform: translateY(${(props): number => props.height / 3}px);

    backface-visibility: hidden;
    perspective: 1000;
    will-change: transform;
  }
`

export default Parallax
