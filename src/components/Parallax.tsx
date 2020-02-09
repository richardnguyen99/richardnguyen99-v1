import React from 'react'
import styled from 'styled-components'

interface ParallaxProps {
  height: number
}

const StyledParallax = styled.div<ParallaxProps>`
  position: relative;

  @media screen and (min-width: 1200px) {
    transform: translateY(${(props): number => props.height / 3}px);

    backface-visibility: hidden;
    perspective: 1000;
    will-change: transform;
  }
`

const Parallax: React.FC<{global?: boolean}> = ({ children, global=false }) => {
  // Create a state that takes window height position
  // to modify height of some elements in order to create
  // parallax scrolling
  const [height, setHeight] = React.useState<number>(0)

  const handleHeight = (): void => {
    setHeight(global ? (height + 1) : window.pageYOffset || document.documentElement.scrollTop)
  }

  React.useEffect(() => {
    // componentDidMount()
    window.addEventListener('scroll', handleHeight)

    // componentDidUpdate()
    return (): void => {
      window.removeEventListener('scroll', handleHeight)
    }
  }, [height])

  return <StyledParallax height={height}>{children}</StyledParallax>
}

export default Parallax
