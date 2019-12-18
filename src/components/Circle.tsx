import styled from 'styled-components'

interface CircleProps {
  size: number
  bg?: string
}

const Circle = styled.span<CircleProps>`
  position: absolute;
  border-radius: 50%;
  height: ${(props): number => props.size}px;
  width: ${(props): number => props.size}px;
  opacity: 0.5;

  background: ${(props): string =>
    typeof props.bg !== 'undefined'
      ? props.bg
      : 'var(--Theme-Section--Background__gradient)'};
`

export default Circle
