import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

interface Props {
  scroll: string
}

const StyledProgressBar = styled.div<Props>`
  position: fixed;

  z-index: 3;

  background: var(--Theme-Body__text);

  width: ${(props): string => props.scroll.concat('%')};
  height: 4px;
`

const ProgressBar: React.FC = () => {
  const [scroll, setScroll] = useState(0)

  const getHeight = (): number =>
    Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    )

  const heightToWidth = (): void => {
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    const docHeight = getHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)

    setScroll(scrollPostion)
  }

  useEffect((): void => {
    document.addEventListener("scroll", ()=> {
      requestAnimationFrame((): void => heightToWidth())
    })
  }, [scroll])

  return <StyledProgressBar scroll={scroll.toString()} />
}

export default ProgressBar
