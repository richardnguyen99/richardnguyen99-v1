import styled from 'styled-components'

interface ParallaxProps {
  height: number
}

const Parallax = styled.div<ParallaxProps>`
  @media screen and (min-width: 1200px) {
    transform: translate3d(0px, ${(props): number => props.height / 3}px, 0px);

    backface-visibility: hidden;
    perspective: 1000;
    will-change: transform;
  }
`

export default Parallax
